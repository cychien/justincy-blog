import type { LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
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
  {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
];

export default function App() {
  const location = useLocation();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="author" content="Justin Chien" />
        <meta name="creator" content="Justin Chien" />
        <meta
          property="og:url"
          content={`https://justincy.com${location.pathname}`}
        />
        <meta property="og:site_name" content="Justin Chien" />
        <meta property="og:image" content="https://justincy.com/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@justinchiency" />
        <meta name="twitter:image" content="https://justincy.com/og.png" />
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
          <div className="mx-auto mb-20 w-full px-4 sm:max-w-[736px] sm:px-8 lg:mb-24">
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
