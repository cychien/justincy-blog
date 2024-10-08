import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Outlet, useLoaderData } from "@remix-run/react";

import { getArticlesForEveryTags } from "~/helpers/article";
import { Article } from "./Article";
import { Drawer } from "vaul";

export async function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return json({ articles: getArticlesForEveryTags() });
}

export default function Page() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <div className="flex">
      <main className="pb-20 md:w-[398px]">
        <h1 className="pb-7 pt-6 text-3xl font-medium md:pb-16">生活札記</h1>
        {loaderData.articles["all"].length > 0 && (
          <section>
            {loaderData.articles["all"].map((article) => (
              <Article
                key={article.path}
                title={article.attributes.title}
                excerpt={article.attributes.description}
                publishedAt={article.attributes.published_at}
                url={article.path}
              />
            ))}
          </section>
        )}
      </main>

      <div className="ml-12 flex flex-1 justify-center">
        <div className="rounded-t-xl bg-white px-16 pt-12">
          <article className="prose prose-zinc first:prose-headings:mt-0 first:prose-p:mt-0">
            <Outlet />
          </article>
        </div>
      </div>

      {/* <div className="fixed inset-x-0 -bottom-6 top-16 bg-white px-4 pt-12">
        <article className="prose prose-zinc first:prose-headings:mt-0 first:prose-p:mt-0">
          <Outlet />
        </article>
      </div> */}
    </div>
  );
}
