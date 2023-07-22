import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Outlet, useLoaderData } from "@remix-run/react";
import { format } from "date-fns";

import { getAllArticlesMetadata } from "~/helpers/article";
import { getTagName } from "~/helpers/tags";

export async function loader({ request }: LoaderArgs) {
  const matchedArticleMetadata = getAllArticlesMetadata().find((article) => {
    const slug = request.url.split("/").at(-1);
    const articleFilenameSlug = article.filename.split(".").at(-2);
    return articleFilenameSlug === slug;
  });

  return json(matchedArticleMetadata);
}

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <main className="mt-8">
      <Header
        title={loaderData.attributes.title}
        publishedAt={loaderData.attributes.published_at}
        tag={loaderData.attributes.tag}
      />
      <article className="prose prose-zinc mt-8 flex max-w-none flex-row-reverse items-start justify-end xl:justify-between">
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
      <div className="flex items-end justify-between">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="text-sm text-gray-500">
          發佈於 {format(new Date(publishedAt), "yyyy-MM-dd")}
        </div>
      </div>
      {tag && (
        <div className="mt-5">
          <div className="inline-block rounded border border-[#C3E9E2] bg-[#E2F8F4] px-3 py-1 text-sm text-[#03322A]">
            {getTagName(tag)}
          </div>
        </div>
      )}
    </div>
  );
}
