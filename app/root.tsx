import type { LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import bgSrc from "~/assets/bg.jpg";
import { Header } from "~/components/site/Header";
import stylesheet from "~/tailwind.css";

import { Footer } from "./components/site/Footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    crossOrigin: "anonymous",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    crossOrigin: "anonymous",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="absolute right-0 top-0 -z-10">
          <img src={bgSrc} alt="" />
        </div>
        <div className="mx-auto max-w-[1228px] px-4 sm:px-8">
          <Header />
          <Outlet />
        </div>
        <div className="mt-12 lg:mt-24">
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
