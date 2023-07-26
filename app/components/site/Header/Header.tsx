import { Link } from "@remix-run/react";

import { Logo } from "~/components/icons";

import { ShiftBy } from "../ShiftBy";

function Header() {
  return (
    <header className="py-2 sm:pb-4 sm:pt-5">
      <Link to="/" prefetch="intent" className="flex h-9 items-center">
        <ShiftBy y={3}>
          <Logo className="h-5 w-[89px]" />
        </ShiftBy>
      </Link>
    </header>
  );
}

export { Header };
