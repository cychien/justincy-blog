import * as React from "react";
import type { SVGProps } from "react";
const SvgEmailDuo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={20}
      height={18}
      x={2}
      y={3}
      fill="currentColor"
      opacity={0.12}
      rx={5}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m18 8-1 .667-.562.375c-1.604 1.069-2.406 1.603-3.273 1.811a5.001 5.001 0 0 1-2.33 0c-.867-.208-1.669-.742-3.273-1.811L7 8.667 6 8m4 13h4c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C22 17.2 22 15.8 22 13v-2c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C18.2 3 16.8 3 14 3h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 5.73C2 6.8 2 8.2 2 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C5.8 21 7.2 21 10 21Z"
    />
  </svg>
);
export default SvgEmailDuo;
