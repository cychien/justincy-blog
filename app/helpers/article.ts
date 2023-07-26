import * as FontOptArticle from "../routes/articles.fontopt.mdx";
import * as JobArtArticle from "../routes/articles.jobart.mdx";

type Article = {
  filename: string;
  attributes: {
    tag?: string;
    title: string;
    description: string;
    published_at: string;
    cover: string;
  };
};

const ARTICLES = [JobArtArticle, FontOptArticle] as Article[];

function getAllArticlesMetadata() {
  return ARTICLES.map((article) => ({
    filename: article.filename,
    attributes: article.attributes,
  }));
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

function getArticleURLFromSlug(slug: string) {
  const slugParts = slug.split(".").join("/");
  return `/${slugParts}`;
}

export type { Article };
export {
  getAllArticlesMetadata,
  getArticlesForEveryTags,
  getArticleURLFromSlug,
};
