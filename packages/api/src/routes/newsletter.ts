import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import type { Bindings } from "../types/hono";

const newsletter = new Hono<{ Bindings: Bindings }>();

newsletter.post(
  "/",
  zValidator(
    "json",
    z.object({
      email: z
        .string({
          required_error: "email is required",
          invalid_type_error: "email type is invalid",
        })
        .email({ message: "email is invalid" }),
    }),
    (parsed, c) => {
      if (!parsed.success) {
        return c.json({ message: parsed.error.errors[0].message }, 400);
      }
    }
  ),
  async (c) => {
    const { email } = c.req.valid("json");

    try {
      await c.env.EMAIL_QUEUE.send(
        { action: "newsletter", email: email },
        { contentType: "json" }
      );
      return c.json({ message: "subscribed", data: { email } }, 200);
    } catch (e) {
      console.error(e);
      return c.json({ message: "internal server error" }, 500);
    }
  }
);

export default newsletter;
