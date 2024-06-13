import { json, type V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";

import avatarSrc from "~/assets/avatar.jpeg";
import differentuLogoSrc from "~/assets/differentu-logo.png";
import {
  // ArrowRight,
  // EmailDuo,
  Email,
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

import { Project } from "./Project";

export async function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return json({ articles: getArticlesForEveryTags() });
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Justin Chien" },
    {
      name: "description",
      content: "Hey, 我是 Justin，一位酷愛打造軟體產品的軟體工程師。",
    },
    { property: "og:title", content: "Justin Chien" },
    {
      property: "og:description",
      content: "Hey, 我是 Justin，一位酷愛打造軟體產品的軟體工程師。",
    },
    { property: "og:image:alt", content: "Justin Chien" },
    { property: "twitter:title", content: "Justin Chien" },
    {
      property: "twitter:description",
      content: "Hey, 我是 Justin，一位酷愛打造軟體產品的軟體工程師。",
    },
  ];
};

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <main className="mt-8 grid grid-cols-1 gap-12">
      <div className="space-y-12 lg:top-12 lg:self-start">
        <div>
          <img
            src={avatarSrc}
            alt="Avatar"
            className="border-pretty h-16 w-16 rounded-full shadow"
          />
          <h1 className="mt-12 text-3xl font-bold">Hey 我是 Justin 👋</h1>
          <div className="mt-12 space-y-5 leading-7">
            <p>我是一位軟體工程師，我酷愛打造軟體產品。</p>
            <p>
              我相信人生在世，總需要做些有意義的事影響世界，而我最喜歡的方式就是利用軟體，將世界打造成我滿意、更好的樣子。
            </p>
            <p>
              這個 Blog
              集結了我在產品路上的心得，以及日常所思所想，也會分享我目前最新的
              Projects，歡迎與我交流。
            </p>
          </div>
          <div className="mt-8 flex items-center space-x-3">
            <div>
              <ShiftBy y={1.5}>
                <a
                  href="https://twitter.com/justinchiency"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center space-x-2"
                >
                  <Twitter className="h-[21.5px] flex-shrink-0 text-gray-400 group-hover:text-gray-600" />
                </a>
              </ShiftBy>
            </div>
            <div>
              <a
                href="https://github.com/cychien"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center space-x-2"
              >
                <Github className="h-6 flex-shrink-0 text-gray-400 group-hover:text-gray-600" />
              </a>
            </div>
            <div>
              <a
                href="mailto:xyz030206@gmail.com"
                className="group inline-flex items-center space-x-2"
              >
                <Email className="flex-shrink-0 text-gray-400 group-hover:text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-2 sm:mt-8">
        <h2 className="text-lg font-medium">最新文章</h2>
        <div className="mt-7">
          <ArticlesTabsContent articles={loaderData.articles["all"]} />
        </div>
      </section>

      <section className="mt-2 sm:mt-4">
        <h2 className="text-lg font-medium">Projects</h2>
        <div className="mt-7">
          <Projects />
        </div>
      </section>

      <div className="mt-4">
        <a
          href="https://twitter.com/justinchiency"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-1 rounded text-sm text-gray-400 hover:text-gray-600"
        >
          追蹤我
          <ArrowUpRight className="min-h-4 min-w-4 h-4 w-4" />
        </a>
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
    <div className="space-y-8">
      {articles.slice(0, 3).map((article) => (
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

function Projects() {
  return (
    <div className="space-y-8">
      <Project
        articleUrl=""
        websiteUrl="https://build-ui-fast.com"
        logoSrc="https://build-ui-fast.com/apple-touch-icon.png"
        name="Build UI Fast"
        description="一套精心製作、易於修改的 components 組合包，幫助你高速開發應用，快速實現創意想法。"
        status="in-progress"
      />
      <Project
        articleUrl=""
        websiteUrl="https://differentu.pages.dev"
        logoSrc={differentuLogoSrc}
        name="Differentu"
        description="AI 頭像生成服務。透過你現有照片，為你生出大量具藝術感的新頭像。"
        status="archived"
      />
    </div>
  );
}
