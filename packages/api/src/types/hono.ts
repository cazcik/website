export type Bindings = {
  readonly EMAIL_QUEUE: Queue;
  readonly DB: D1Database;
};

export type EmailQueueMessage = {
  readonly action: "newsletter";
  readonly email: string;
};

export type NewsletterEntry = {
  id: string;
  email: string;
  createdAt: Date;
};
