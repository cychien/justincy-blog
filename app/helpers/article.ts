function getArticleURL(slug: string) {
  const slugParts = slug.split(".").join("/");
  return `/${slugParts}`;
}

export { getArticleURL };
