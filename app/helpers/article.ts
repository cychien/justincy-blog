import * as FocusGrowArticle from "../routes/articles.focusgrow.mdx";
import * as FontOptArticle from "../routes/articles.fontopt.mdx";
import * as JobArtArticle from "../routes/articles.jobart.mdx";

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
  { ...FocusGrowArticle, path: "/articles/focusgrow" },
  { ...JobArtArticle, path: "/articles/jobart" },
  { ...FontOptArticle, path: "/articles/fontopt" },
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
