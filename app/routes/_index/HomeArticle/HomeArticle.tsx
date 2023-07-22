import { Link } from "@remix-run/react";
import format from "date-fns/format";

import { PenGestalt } from "~/components/icons";
import { ShiftBy } from "~/components/site/ShiftBy";
import { getTagName } from "~/helpers/tags";

type HomeArticleProps = {
  title: string;
  excerpt: string;
  tag?: string;
  publishedAt: string;
  cover: string;
  url: string;
};

function HomeArticle({
  title,
  excerpt,
  tag,
  publishedAt,
  cover,
  url,
}: HomeArticleProps) {
  return (
    <Link to={url} prefetch="intent" className="block">
      <article className="group relative">
        <div className="absolute -bottom-4 -left-4 -right-4 -top-4 -z-10 transition-colors group-hover:bg-gray-50 sm:-bottom-4 sm:-left-6 sm:-right-6 sm:-top-4 sm:rounded-lg" />
        <div className="flex items-center justify-between space-x-16">
          <div>
            <div className="text-lg font-semibold">{title}</div>
            <div className="mt-4 text-sm leading-6 lg:mt-4">{excerpt}</div>
            <div className="mt-3 flex items-center space-x-3 lg:mt-4">
              <div className="flex items-center space-x-1.5">
                <ShiftBy y={0.5}>
                  <PenGestalt className="h-4 w-4 flex-shrink-0 text-gray-500" />
                </ShiftBy>
                <span className="font-latin text-sm text-gray-500">
                  {format(new Date(publishedAt), "yyyy-MM-dd")}
                </span>
              </div>
              {tag && (
                <div className="rounded border border-[#C3E9E2] bg-[#E2F8F4] px-2 py-1 text-[13px] text-[#03322A]">
                  {getTagName(tag)}
                </div>
              )}
            </div>
          </div>
          <div className="hidden min-h-[120px] min-w-[120px] border lg:block" />
        </div>
      </article>
    </Link>
  );
}

export { HomeArticle };
