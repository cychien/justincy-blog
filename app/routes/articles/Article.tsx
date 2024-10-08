import { Link } from "@remix-run/react";
import { format } from "date-fns";

type ArticleProps = {
  title: string;
  excerpt: string;
  publishedAt: string;
  url: string;
};

function Article({ title, excerpt, publishedAt, url }: ArticleProps) {
  return (
    <Link
      to={url}
      prefetch="intent"
      className="group -mx-4 block rounded-md px-4 hover:bg-gray-200"
    >
      <article className="space-y-2 border-b border-gray-200 py-4 group-last:border-b-0 md:border-b-2 md:py-5">
        <div className="flex items-center justify-between gap-6">
          <div className="flex-shrink-0 font-medium">{title}</div>
          <div className="flex-shrink-0 text-xs text-gray-400">
            {format(new Date(publishedAt), "yyyy.MM.dd")}
          </div>
        </div>
        <p className="text-sm text-gray-600">{excerpt}</p>
      </article>
    </Link>
  );
}

export { Article };
