import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { HTTPException } from "hono/http-exception";
import { trimTrailingSlash } from "hono/trailing-slash";

import type { Bindings, EmailQueueMessage } from "./types/hono";
import newsletter from "./routes/newsletter";
import { SimpleNotification } from "./lib/slack";

const app = new Hono<{ Bindings: Bindings }>();

app.use(logger());
app.use(cors());
app.use(trimTrailingSlash());

app.get("/", (c) => {
  return c.text(c.req.path, 200);
});

app.route("/newsletter", newsletter);

app.notFound((c) => {
  return c.text("not found", 404);
});

app.onError((e, c) => {
  if (e instanceof HTTPException) {
    return c.text(e.message.toLowerCase(), e.status);
  } else {
    console.error(e);
    return c.text("internal server error", 500);
  }
});

export default {
  fetch: app.fetch,
  async queue(batch: MessageBatch<EmailQueueMessage>, env: Bindings) {
    let email = "";
    for (const message of batch.messages) {
      if (message.body.action === "newsletter") {
        email += message.body.email;
        try {
          let id = crypto.randomUUID();

          await env.DB.prepare(
            "INSERT INTO newsletter (id, email) VALUES (?, ?)"
          )
            .bind(id, email)
            .all();

          console.log(`inserted email into newsletter: ${email}`);

          await SimpleNotification(
            env.SLACK_WEBHOOK,
            `\`${email}\` has joined the newsletter`
          );
        } catch (e) {
          console.error(e);
          throw new Error("failed to insert email into newsletter");
        }
      } else {
        throw new Error(`invalid action: ${message.body.action}`);
      }
    }
  },
};
