import { Link } from "@remix-run/react";

function Header() {
  return (
    <header className="flex items-center justify-end space-x-4 py-2 pt-3 sm:pb-4 sm:pt-5">
      <HeaderItem url="/" text="首頁" />
      <HeaderItem url="/articles" text="文章" />
      <HeaderItem url="/projects" text="Projects" />
      <HeaderItem url="/experience" text="經歷" />
    </header>
  );
}

type HeaderItemProps = {
  url: string;
  text: string;
};

function HeaderItem({ url, text }: HeaderItemProps) {
  return (
    <Link to={url} prefetch="intent">
      <div className="text-sm text-gray-600 hover:text-gray-900">{text}</div>
    </Link>
  );
}

export { Header };
