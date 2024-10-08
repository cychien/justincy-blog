import { Link } from "@remix-run/react";
import Logo from "~/components/icons/Logo";

function Header() {
  return (
    <header className="flex h-16 items-center gap-5 md:h-28">
      <Link to="/" className="flex-shrink-0">
        <Logo className="h-[18px]" />
      </Link>
      {/* <div className="flex flex-shrink-0 space-x-3 rounded-full bg-gray-200 px-3 py-1">
        <HeaderItem url="/articles" text="生活札記" />
        <HeaderItem url="/lab" text="UI 實驗" />
      </div> */}
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
      <div className="text-sm text-gray-500 hover:text-gray-600">{text}</div>
    </Link>
  );
}

export { Header };
