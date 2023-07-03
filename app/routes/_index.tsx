import type { V2_MetaFunction } from "@remix-run/cloudflare";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Justin CY Blog" },
    { name: "description", content: "Welcome to Justin CY Blog!" },
  ];
};

export default function Index() {
  return <div></div>;
}
