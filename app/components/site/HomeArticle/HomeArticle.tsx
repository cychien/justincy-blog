import { PenGestalt } from "~/components/icons";

import { ShiftBy } from "../ShiftBy";

type HomeArticleProps = {
  title: string;
  excerpt: string;
  tags: string;
  publishedAt: string;
  cover: string;
};

function HomeArticle({
  title,
  excerpt,
  tags,
  publishedAt,
  cover,
}: HomeArticleProps) {
  return (
    <article className="group relative cursor-pointer">
      <div className="absolute -bottom-4 -left-4 -right-4 -top-4 -z-10 transition-colors group-hover:bg-gray-50 sm:-bottom-4 sm:-left-6 sm:-right-6 sm:-top-4 sm:rounded-lg" />
      <div className="flex items-center justify-between space-x-16">
        <div>
          <div className="font-medium">{title}</div>
          <div className="mt-4 text-sm leading-6 lg:mt-5">{excerpt}</div>
          <div className="mt-3 flex items-center space-x-3 lg:mt-4">
            <div className="flex items-center space-x-1.5">
              <ShiftBy y={1}>
                <PenGestalt className="h-4 w-4 flex-shrink-0 text-gray-500" />
              </ShiftBy>
              <span className="font-latin text-sm text-gray-500">
                {publishedAt}
              </span>
            </div>
            <div className="rounded border border-[#C3E9E2] bg-[#E2F8F4] px-2 py-1 text-[13px] text-[#03322A]">
              {tags}
            </div>
          </div>
        </div>
        <div className="hidden min-h-[120px] min-w-[120px] border lg:block" />
      </div>
    </article>
  );
}

export { HomeArticle };
