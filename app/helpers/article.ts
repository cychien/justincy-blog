import * as BuyBackTimeArticle from "../routes/articles.buybacktime.mdx";
import * as FocusGrowArticle from "../routes/articles.focusgrow.mdx";
import * as JobArtArticle from "../routes/articles.jobart.mdx";
import * as SunsamaArticle from "../routes/articles.sunsama.mdx";
import * as TodoListArticle from "../routes/articles.todolist.mdx";
import * as WritingStruggleArticle from "../routes/articles.writingstruggle.mdx";
import * as ShouldIBuyArticle from "../routes/articles.shouldibuy.mdx";

type Article = {
  path: string;
  filename: string;
  attributes: {
    tag?: string;
    title: string;
    description: string;
    published_at: string;
    cover: string;
  };
};

const ARTICLES = [
  { ...ShouldIBuyArticle, path: "/articles/shouldibuy" },
  { ...SunsamaArticle, path: "/articles/sunsama" },
  { ...TodoListArticle, path: "/articles/todolist" },
  { ...WritingStruggleArticle, path: "/articles/writingstruggle" },
  { ...BuyBackTimeArticle, path: "/articles/buybacktime" },
  { ...FocusGrowArticle, path: "/articles/focusgrow" },
  { ...JobArtArticle, path: "/articles/jobart" },
] as Article[];

function getAllArticlesMetadata() {
  return ARTICLES;
}

function getArticlesForEveryTags() {
  const result = { all: [] } as Record<string, Article[]>;

  for (let i = 0; i < ARTICLES.length; i++) {
    const tag = ARTICLES[i].attributes.tag;

    if (tag) {
      if (!result[tag]) {
        result[tag] = [];
      }

      result[tag].push(ARTICLES[i]);
    }

    result.all.push(ARTICLES[i]);
  }

  return result;
}

export type { Article };
export { getAllArticlesMetadata, getArticlesForEveryTags };
