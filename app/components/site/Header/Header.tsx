import { Link } from "@remix-run/react";

import { Logo } from "~/components/icons";

import { ShiftBy } from "../ShiftBy";

function Header() {
  return (
    <header className="flex items-center justify-between py-2 sm:pb-4 sm:pt-5">
      <Link to="/" prefetch="intent" className="flex h-9 items-center">
        <ShiftBy y={3}>
          <Logo className="h-5 w-[89px]" />
        </ShiftBy>
      </Link>
      <Link
        to="/new-features"
        prefetch="intent"
        className="font-latin text-sm font-medium text-gray-500 hover:underline"
      >
        New Features
      </Link>
    </header>
  );
}

export { Header };
