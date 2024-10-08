type ProjectProps = {
  articleUrl: string;
  websiteUrl: string;
  logoSrc: string;
  name: string;
  description: string;
  status: "in-progress" | "archived";
};

function Project({
  articleUrl,
  websiteUrl,
  logoSrc,
  name,
  description,
  status,
}: ProjectProps) {
  return (
    <a href={websiteUrl} target="_blank" rel="noreferrer" className="block">
      <article className="group relative">
        <div className="absolute -bottom-4 -left-4 -right-4 -top-4 -z-10 group-hover:bg-gray-100 sm:-bottom-4 sm:-left-6 sm:-right-6 sm:-top-4 sm:rounded-lg" />
        <div className="flex space-x-5">
          <img
            src={logoSrc}
            className="min-h-8 min-w-8 h-8 w-8"
            alt="Build UI Fast logo"
          />
          <div>
            <div className="font-medium">{name}</div>
            <div className="mt-3 text-sm text-gray-600">{description}</div>
            <div className="mt-2 text-[13px] font-medium">
              {status === "in-progress" ? (
                <span className="text-[#059669]">進行中</span>
              ) : status === "archived" ? (
                <span className="text-gray-400">停止維護</span>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </a>
  );
}

export { Project };
