import { json, type V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import avatarSrc from "~/assets/avatar.jpeg";
import {
  // ArrowRight,
  // EmailDuo,
  Github,
  // Threads,
  Twitter,
} from "~/components/icons";
// import { Button } from "~/components/site/Button";
import { ShiftBy } from "~/components/site/ShiftBy";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "~/components/site/Tabs";
import type { Article } from "~/helpers/article";
import { getArticlesForEveryTags } from "~/helpers/article";
import { HomeArticle } from "~/routes/_index/HomeArticle";

export async function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return json({ articles: getArticlesForEveryTags() });
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Justin CY blog" },
    {
      name: "description",
      content:
        "👋 我是 Justin，一位在 Cooby 工作的軟體工程師，熱衷於打造 User Interface",
    },
    { property: "og:title", content: "Justin CY blog" },
    {
      property: "og:description",
      content:
        "👋 我是 Justin，一位在 Cooby 工作的軟體工程師，熱衷於打造 User Interface",
    },
    { property: "og:image:alt", content: "Justin CY blog" },
    { property: "twitter:title", content: "Justin CY blog" },
    {
      property: "twitter:description",
      content:
        "👋 我是 Justin，一位在 Cooby 工作的軟體工程師，熱衷於打造 User Interface",
    },
  ];
};

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <main className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[288px_1fr] lg:gap-16 xl:grid-cols-[288px_1fr] xl:gap-[102px]">
      <div className="space-y-12 lg:sticky lg:top-12 lg:self-start">
        <div>
          <img
            src={avatarSrc}
            alt="Avatar"
            className="border-pretty h-16 w-16 rounded-full shadow"
          />
          <p className="mt-6 leading-7 lg:text-sm lg:leading-6">
            👋 我是 Justin，一位在{" "}
            <a
              href="https://www.cooby.co/en"
              className="font-medium text-gray-700 hover:text-gray-900 hover:underline"
            >
              Cooby
            </a>{" "}
            工作的軟體工程師，熱衷於打造 User Interface
          </p>
          <div className="mt-8 space-y-0.5">
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
        {/* <div className="hidden lg:block">
          <div className="border-pretty shadow-pretty relative overflow-hidden rounded-md border bg-gray-50 p-4 pt-6">
            <div className="absolute left-0 top-0 h-1 w-full bg-gray-900" />
            <div className="flex items-center space-x-2">
              <EmailDuo className="h-6 w-6 text-gray-600" />
              <span className="font-medium">Eureka 週報</span>
            </div>
            <div className="mt-4 text-sm leading-6 text-gray-600">
              Eureka
              週報集結了當週我認為最有價值的內容，內容涵括產品開發、設計點子以及
              life hack，幫助你有效率地獲取資訊
            </div>
            <div className="mt-3 text-sm font-medium text-[#EC4733]">
              即將開放
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
        </div> */}
      </div>
      <div className="divide-y-2 divide-gray-100">
        <section className="pb-12">
          <h1 className="text-[28px] font-semibold leading-8 tracking-[5%]">
            文章
          </h1>
          <div className="mt-10 md:mt-[53px]">
            <ArticlesTabsContent articles={loaderData.articles["all"]} />
          </div>

          {/* <Tabs
            id="article-tabs"
            url={pathname + search}
            defaultValue="all"
            className="mt-8"
          >
            <TabsList>
              <TabsTrigger value="all">所有文章</TabsTrigger>
              <TabsTrigger value="design">設計</TabsTrigger>
              <TabsTrigger value="fend">前端開發</TabsTrigger>
              <TabsTrigger value="htdt">HTDT</TabsTrigger>
              <TabsTrigger value="life">生活</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <ArticlesTabsContent articles={loaderData.articles["all"]} />
            </TabsContent>
            <TabsContent value="design">
              <ArticlesTabsContent articles={loaderData.articles["design"]} />
            </TabsContent>
            <TabsContent value="fend">
              <ArticlesTabsContent articles={loaderData.articles["fend"]} />
            </TabsContent>
            <TabsContent value="htdt">
              <ArticlesTabsContent articles={loaderData.articles["htdt"]} />
            </TabsContent>
            <TabsContent value="life">
              <ArticlesTabsContent articles={loaderData.articles["life"]} />
            </TabsContent>
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
          </div> */}
        </section>
      </div>
    </main>
  );
}

function ArticlesTabsContent({
  articles,
}: {
  articles: undefined | Article[];
}) {
  if (!articles || articles.length === 0) {
    return <p className="text-sm text-gray-500">尚無內容</p>;
  }

  return (
    <div className="space-y-12">
      {articles.map((article) => (
        <HomeArticle
          key={article.path}
          title={article.attributes.title}
          excerpt={article.attributes.description}
          publishedAt={article.attributes.published_at}
          tag={article.attributes.tag}
          cover={article.attributes.cover}
          url={article.path}
        />
      ))}
    </div>
  );
}
