import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Outlet, useLoaderData } from "@remix-run/react";

import { getAllArticlesMetadata } from "~/helpers/article";

export async function loader({ request }: LoaderArgs) {
  const matchedArticleMetadata = getAllArticlesMetadata().find((article) => {
    const slug = request.url.split("/").at(-1);
    const articleFilenameSlug = article.path.split("/").at(-1);
    return articleFilenameSlug === slug;
  });

  return json(matchedArticleMetadata);
}

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.attributes.title },
    {
      name: "description",
      content: data?.attributes.description,
    },
    { property: "og:title", content: data?.attributes.title },
    {
      property: "og:description",
      content: data?.attributes.description,
    },
    { property: "og:image:alt", content: data?.attributes.title },
    { property: "twitter:title", content: data?.attributes.title },
    {
      property: "twitter:description",
      content: data?.attributes.description,
    },
  ];
};

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <main className="pb-20">
      <h1 className="pb-14 pt-10 text-3xl font-semibold md:pb-16 md:pt-6">
        {loaderData.attributes.title}
      </h1>
      <article className="prose flex max-w-2xl items-start first:prose-headings:mt-0 prose-p:mb-7 prose-p:leading-7 prose-p:text-gray-900 first:prose-p:mt-0 xl:justify-between">
        <Outlet />
      </article>
    </main>
  );
}
