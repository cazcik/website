import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { HTTPException } from "hono/http-exception";
import { trimTrailingSlash } from "hono/trailing-slash";

import type { Bindings } from "./types/hono";
import newsletter from "./routes/newsletter";

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

export default app;
