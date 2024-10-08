import { Link } from "@remix-run/react";
import { format } from "date-fns";

import { PenGestalt } from "~/components/icons";
import { ShiftBy } from "~/components/site/ShiftBy";
import { getTagName } from "~/helpers/tags";

type ArticleProps = {
  title: string;
  tag?: string;
  publishedAt: string;
  url: string;
};

export function Article({ title, tag, publishedAt, url }: ArticleProps) {
  return (
    <Link to={url} prefetch="intent" className="block">
      <article className="">
        <div className="font-medium">{title}</div>
        <div className="mt-1 flex space-x-4">
          <ShiftBy y={-0.5}>
            <div className="text-sm text-gray-500">
              {tag && getTagName(tag)}
            </div>
          </ShiftBy>
          <div className="flex flex-shrink-0 items-center space-x-1.5">
            <ShiftBy y={0.5}>
              <PenGestalt className="h-4 w-4 flex-shrink-0 text-gray-500" />
            </ShiftBy>
            <span className="flex-shrink-0 font-latin text-sm text-gray-500">
              {format(new Date(publishedAt), "yyyy-MM-dd")}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
