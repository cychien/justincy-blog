import { Link } from "@remix-run/react";
import format from "date-fns/format";

import { PenGestalt } from "~/components/icons";
import { ShiftBy } from "~/components/site/ShiftBy";
import { getTagName, getTagStyle } from "~/helpers/tags";

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
        <div className="absolute -bottom-4 -left-4 -right-4 -top-4 -z-10 transition-colors group-hover:bg-[#F5F5F4] sm:-bottom-4 sm:-left-6 sm:-right-6 sm:-top-4 sm:rounded-lg" />
        <div className="flex items-center justify-between space-x-20">
          <div>
            <div className="text-lg font-semibold">{title}</div>
            <div className="mt-4 text-sm leading-6 lg:mt-3">{excerpt}</div>
            <div className="mt-3 flex items-center space-x-3">
              <div className="flex flex-shrink-0 items-center space-x-1.5">
                <ShiftBy y={0.5}>
                  <PenGestalt className="h-4 w-4 flex-shrink-0 text-gray-500" />
                </ShiftBy>
                <span className="flex-shrink-0 font-latin text-sm text-gray-500">
                  {format(new Date(publishedAt), "yyyy-MM-dd")}
                </span>
              </div>
              {tag && (
                <div
                  className="rounded border border-[#C3E9E2] bg-[#E2F8F4] px-2 py-1 text-[13px] text-[#03322A]"
                  style={getTagStyle(tag)}
                >
                  {getTagName(tag)}
                </div>
              )}
            </div>
          </div>
          <div className="relative hidden h-[130px] w-[130px] flex-shrink-0 overflow-hidden rounded border border-[#EDEDF0] bg-gray-50 object-cover group-hover:shadow lg:block">
            <img src={cover} alt="" className="mix-blend-multiply" />
          </div>
        </div>
      </article>
    </Link>
  );
}

export { HomeArticle };
