import * as React from "react";
import type { SVGProps } from "react";
const SvgPenGestalt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 10.5 19 9.5v0c0-1.082 0-1.622-.113-2.087a4 4 0 0 0-2.283-2.721c-.438-.192-.97-.286-2.036-.474L6.502 2.794c-1.515-.267-2.272-.4-2.817-.169a2 2 0 0 0-1.06 1.06c-.231.545-.098 1.302.17 2.817l1.272 7.21c.332 1.88.498 2.82.973 3.525a4 4 0 0 0 1.69 1.417c.776.346 1.73.346 3.64.346h.98c.977 0 1.467 0 1.927-.11.408-.099.798-.26 1.156-.48.404-.247.75-.593 1.441-1.285L19.5 13.5a1.414 1.414 0 0 1 2 0v0a1.414 1.414 0 0 1 0 2l-5.5 5.5M3.499 3.5l4.001 4M13 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
export default SvgPenGestalt;
