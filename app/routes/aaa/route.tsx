import { json, type V2_MetaFunction } from "@remix-run/cloudflare";
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

export const meta: V2_MetaFunction = () => {
  return [
    { title: "文章" },
    {
      name: "description",
      content: "紀錄著我在產品路上的心得，以及日常所思所想。",
    },
    { property: "og:title", content: "文章" },
    {
      property: "og:description",
      content: "紀錄著我在產品路上的心得，以及日常所思所想。",
    },
    { property: "og:image:alt", content: "文章" },
    { property: "twitter:title", content: "文章" },
    {
      property: "twitter:description",
      content: "紀錄著我在產品路上的心得，以及日常所思所想。",
    },
  ];
};

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <main className="mt-8">
      <h1 className="text-3xl font-bold">文章</h1>
      <div className="mt-12 space-y-10">
        {loaderData.articles["all"].map((article) => (
          <Article
            key={article.path}
            title={article.attributes.title}
            publishedAt={article.attributes.published_at}
            tag={article.attributes.tag}
            url={article.path}
          />
        ))}
      </div>
    </main>
  );
}
