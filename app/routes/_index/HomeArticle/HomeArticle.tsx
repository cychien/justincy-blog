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
        <div className="absolute -bottom-4 -left-4 -right-4 -top-4 -z-10 group-hover:bg-gray-100 sm:-bottom-4 sm:-left-6 sm:-right-6 sm:-top-4 sm:rounded-lg" />
        <div className="flex items-center justify-between space-x-20">
          <div>
            <div className="font-medium">{title}</div>
            {/* <div className="mt-4 text-sm leading-6 lg:mt-3">{excerpt}</div> */}
            <div className="mt-1.5 text-[13px] text-gray-500">
              {tag && getTagName(tag)}
              {/* {tag && (
                <div
                  className="inline-block rounded border border-[#C3E9E2] bg-[#E2F8F4] px-2 py-1 text-[13px] text-[#03322A]"
                  style={getTagStyle(tag)}
                >
                  {getTagName(tag)}
                </div>
              )} */}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export { HomeArticle };
