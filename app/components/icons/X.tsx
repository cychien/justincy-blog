import * as React from "react";
import type { SVGProps } from "react";
const SvgX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={12}
    fill="none"
    {...props}
  >
    <g clipPath="url(#x_svg__a)">
      <path
        fill="currentColor"
        d="M10.227 0h1.993L7.843 5.092 12.957 12H8.944L5.802 7.802 2.206 12H.212L4.85 6.554-.048 0h4.113l2.838 3.835L10.227 0Zm-.698 10.804h1.105l-7.15-9.653H2.297l7.232 9.653Z"
      />
    </g>
    <defs>
      <clipPath id="x_svg__a">
        <path fill="currentColor" d="M0 0h13v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgX;
