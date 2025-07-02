import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";

import "./root.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "https://fav.farm/🧊" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let details = "unexpected error";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    details =
      error.status === 404
        ? "page not found"
        : error.statusText.toLowerCase() || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="flex min-h-dvh">
      <div className="m-auto px-5">
        <p>{details}</p>
        {stack && (
          <pre className="w-full overflow-x-auto">
            <code>{stack}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
