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
        <div
          className="absolute left-0 top-0 -z-10 h-full max-h-full w-full overflow-hidden bg-no-repeat"
          style={{
            backgroundImage: `url(${bgSrc})`,
            backgroundPosition: "center top",
            backgroundSize: "2500px 873px",
          }}
        />
        <div className="flex h-full flex-col">
          <div className="mx-auto mb-12 w-full px-4 sm:px-8 lg:mb-24 xl:w-[1228px]">
            <Header />
            <Outlet />
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
