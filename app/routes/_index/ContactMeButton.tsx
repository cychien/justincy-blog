import { Link } from "@remix-run/react";
import { X as XIcon } from "~/components/icons";

function ContactMeButton() {
  return (
    <Link
      to="https://twitter.com/justinchiency"
      className="flex min-w-max items-center space-x-2 self-start rounded-full bg-gray-900 p-[9px] pl-4 text-sm text-white shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
    >
      <XIcon className="h-3" />
      <span>聯繫我</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 text-gray-400"
      >
        <path
          fillRule="evenodd"
          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
}

export { ContactMeButton };
