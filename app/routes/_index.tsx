import { json, type V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData, useLocation } from "@remix-run/react";

import avatarSrc from "~/assets/avatar.jpeg";
import {
  ArrowRight,
  EmailDuo,
  Github,
  Threads,
  Twitter,
} from "~/components/icons";
import { Button } from "~/components/site/Button";
import { HomeArticle } from "~/components/site/HomeArticle";
import { ShiftBy } from "~/components/site/ShiftBy";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/site/Tabs";
import { getArticleURL } from "~/helpers/article";
import * as articleA from "~/routes/articles.jobart.mdx";

function articleFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Justin CY Blog" },
    { name: "description", content: "Welcome to Justin CY Blog!" },
  ];
};

export async function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return json([articleFromModule(articleA)]);
}

export default function Index() {
  const { pathname, search } = useLocation();
  const articles = useLoaderData<typeof loader>();

  return (
    <main className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[288px_1fr] lg:gap-16 xl:grid-cols-[288px_1fr] xl:gap-28">
      <div className="space-y-12 lg:sticky lg:top-12">
        <div>
          <img
            src={avatarSrc}
            alt="Avatar"
            className="border-pretty h-16 w-16 rounded-full shadow"
          />
          <p className="mt-6 leading-7 lg:text-sm lg:leading-6">
            Hi 我是
            Justin，我是一位熱愛設計的網頁前端工程師，專注於增進使用者體驗，如果你也對這領域有興趣，歡迎追蹤我
          </p>
          <div className="mt-8 space-y-0.5">
            <div>
              <a
                href="https://www.threads.net/@justinnncy"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center space-x-2"
              >
                <Threads className="h-4 w-4 flex-shrink-0 text-gray-500 group-hover:text-gray-700" />
                <span className="font-latin text-sm font-medium text-gray-700 group-hover:text-gray-900 group-hover:underline">
                  <ShiftBy y={-1}>@justinnncy</ShiftBy>
                </span>
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/justinchiency"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center space-x-2"
              >
                <Twitter className="h-4 w-4 flex-shrink-0 text-gray-500 group-hover:text-gray-900" />
                <span className="font-latin text-sm font-medium text-gray-700 group-hover:text-gray-900 group-hover:underline">
                  <ShiftBy y={-1}>@justinchiency</ShiftBy>
                </span>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/cychien"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center space-x-2"
              >
                <Github className="h-[17px] w-[17px] flex-shrink-0 text-gray-500 group-hover:text-gray-900" />
                <span className="font-latin text-sm font-medium text-gray-700 group-hover:text-gray-900 group-hover:underline">
                  <ShiftBy y={1}>https://github.com/cychien</ShiftBy>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="border-pretty shadow-pretty relative overflow-hidden rounded-md border bg-gray-50 p-4 pt-6">
            <div className="absolute left-0 top-0 h-1 w-full bg-gray-900" />
            <div className="flex items-center space-x-2">
              <EmailDuo className="h-6 w-6 text-gray-600" />
              <span className="font-medium">Fresh 週報</span>
            </div>
            <div className="mt-4 text-sm leading-6 text-gray-600">
              Fresh 週報集結了我每週最有價值的內容，填寫下方
              Email，有效率地獲取資訊
            </div>
            <form className="mt-4 text-gray-600">
              <label
                htmlFor="email-input"
                className="block text-[13px] text-gray-500"
              >
                Email
              </label>
              <input
                id="email-input"
                type="text"
                placeholder="tony@gmail.com"
                className="border-pretty shadow-pretty form-input mt-1 w-full rounded border p-2 text-sm placeholder:text-gray-400"
              />
              <Button className="mt-2">訂閱 Fresh</Button>
            </form>
          </div>
        </div>
      </div>
      <div className="divide-y-2 divide-gray-100">
        <section className="pb-12">
          <h1 className="text-2xl font-semibold tracking-widest">文章</h1>
          <p className="mt-4 leading-7 text-gray-500">
            主要分享與使用者體驗有關的內容，偶爾會記錄生活雜想。HTDT
            是一個有趣的文章分類，全名是 How to do
            this，會教你如何實現一些精緻的網頁效果
          </p>
          <Tabs
            id="article-tabs"
            url={pathname + search}
            defaultValue="all"
            className="mt-12"
          >
            <TabsList>
              <TabsTrigger value="all">所有文章</TabsTrigger>
              <TabsTrigger value="design">設計</TabsTrigger>
              <TabsTrigger value="frontend-development">前端開發</TabsTrigger>
              <TabsTrigger value="htdt">HTDT</TabsTrigger>
              <TabsTrigger value="life">生活</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="space-y-12">
                {articles.map((article) => (
                  <HomeArticle
                    key={article.slug}
                    title={article[0].title}
                    excerpt={article[1].description}
                    publishedAt="2022/6/20"
                    tags="前端開發"
                    cover=""
                    url={getArticleURL(article.slug)}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="design"></TabsContent>
            <TabsContent value="frontend-development"></TabsContent>
            <TabsContent value="htdt"></TabsContent>
            <TabsContent value="life"></TabsContent>
          </Tabs>
          <div className="mt-12">
            <Button
              variant="secondary"
              className="flex items-center space-x-1.5"
            >
              <span>查看所有文章</span>
              <ShiftBy y={0.5}>
                <ArrowRight className="h-3 w-3 flex-shrink-0" />
              </ShiftBy>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
