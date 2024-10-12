import { Link } from "@remix-run/react";
import Logo from "~/components/icons/Logo";

function Header() {
  return (
    <header className="flex h-16 items-center md:h-28">
      <div className="flex flex-1 justify-between md:justify-start md:gap-12">
        <Link to="/" className="flex-shrink-0">
          <Logo className="h-[18px]" />
        </Link>
        <div className="flex flex-shrink-0 space-x-3 rounded-full md:space-x-6">
          <HeaderItem url="/articles" text="生活札記" />
          <HeaderItem url="/lab" text="UI 實驗" />
          {/* <HeaderItem url="/products" text="我的產品" />
          <HeaderItem url="/services" text="我的服務" /> */}
        </div>
      </div>
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
