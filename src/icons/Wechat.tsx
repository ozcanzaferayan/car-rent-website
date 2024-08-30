import * as React from "react";
import type { SVGProps } from "react";
const SvgWechat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 13 12"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M.75 5.5a5 5 0 0 1 9.842-1.252 4.1 4.1 0 0 0-1.967-.498 4.1 4.1 0 0 0-1.721.375.56.56 0 0 0-.373-.142.565.565 0 0 0-.542.719A4.12 4.12 0 0 0 4.5 7.875c0 .993.35 1.904.935 2.616a5.8 5.8 0 0 1-1.093-.186l-1.445.62a1 1 0 0 1-1.38-1.083L1.74 8.49A5 5 0 0 1 .75 5.5m9.989.073a1 1 0 0 1-1.983-.029L7 5.75l-.366 2.697a1 1 0 0 1 .146 1.95 3.125 3.125 0 1 1 3.958-4.824M4.28 5.117c.31 0 .563-.254.563-.567a.565.565 0 0 0-.563-.567.565.565 0 0 0-.562.567c0 .313.252.567.562.567"
      clipRule="evenodd"
    />
    <mask id="wechat_svg__a" fill="currentColor">
      <path
        fillRule="evenodd"
        d="m11 8.993.25 1.507-1.06-.518"
        clipRule="evenodd"
      />
    </mask>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m11 8.993.25 1.507-1.06-.518"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m11.25 10.5-.22.45.872.425-.159-.957zm-.743-1.425.25 1.507.986-.164-.25-1.506zm.963.976-1.06-.518-.44.899 1.06.517z"
      mask="url(#wechat_svg__a)"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m11 8.993.25 1.507-1.06-.518"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.507 9.595a.5.5 0 0 1-.018.788 3.125 3.125 0 1 1 .964-1.177.5.5 0 0 1-.77.174zM9.422 7.7A.423.423 0 0 1 9 7.275c0-.235.189-.425.422-.425s.422.19.422.425a.423.423 0 0 1-.422.425m-2.11-.425c0 .235.19.425.422.425.233 0 .422-.19.422-.425a.423.423 0 0 0-.422-.425.423.423 0 0 0-.421.425"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWechat;
