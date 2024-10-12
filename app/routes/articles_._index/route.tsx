import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import { getArticlesForEveryTags } from "~/helpers/article";
import { Article } from "./Article";

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
        <h1 className="pb-11 pt-10 text-3xl font-semibold md:pb-14 md:pt-6">
          生活札記
        </h1>
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
    </div>
  );
}
