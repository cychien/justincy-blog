import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Outlet, useLoaderData } from "@remix-run/react";
import { format } from "date-fns";

import { getAllArticlesMetadata } from "~/helpers/article";
import { getTagName, getTagStyle } from "~/helpers/tags";

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
    <main className="mt-8">
      <Header
        title={loaderData.attributes.title}
        publishedAt={loaderData.attributes.published_at}
        tag={loaderData.attributes.tag}
      />
      <article className="prose prose-zinc mt-8 flex max-w-none flex-row-reverse items-start justify-end first:prose-headings:mt-0 first:prose-p:mt-0 sm:mt-14 xl:justify-between">
        <Outlet />
      </article>
    </main>
  );
}

type HeaderProps = {
  title: string;
  publishedAt: string;
  tag?: string;
};

function Header({ title, publishedAt, tag }: HeaderProps) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="mt-4 text-sm text-gray-500 sm:mt-0">
          發佈於 {format(new Date(publishedAt), "yyyy-MM-dd")}
        </div>
      </div>
      {tag && (
        <div className="mt-5">
          <div
            className="inline-block rounded border border-[#C3E9E2] bg-[#E2F8F4] px-2 py-1 text-sm text-[#03322A]"
            style={getTagStyle(tag)}
          >
            {getTagName(tag)}
          </div>
        </div>
      )}
    </div>
  );
}
