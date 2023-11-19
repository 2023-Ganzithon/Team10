import React from "react";

export default function LoadingIcon({ className }: { className?: string }) {
  return (
    <>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="84" cy="50" r="10" fill="#26ad9c">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="0.4098360655737705s"
            calcMode="spline"
            keyTimes="0;1"
            values="10;0"
            keySplines="0 0.5 0.5 1"
            begin="0s"
          ></animate>
          <animate
            attributeName="fill"
            repeatCount="indefinite"
            dur="1.639344262295082s"
            calcMode="discrete"
            keyTimes="0;0.25;0.5;0.75;1"
            values="#26ad9c;#26ad9c;#26ad9c;#26ad9c;#26ad9c"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="16" cy="50" r="10" fill="#26ad9c">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.639344262295082s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.639344262295082s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="50" cy="50" r="10" fill="#26ad9c">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.639344262295082s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.4098360655737705s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.639344262295082s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.4098360655737705s"
          ></animate>
        </circle>
        <circle cx="84" cy="50" r="10" fill="#26ad9c">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.639344262295082s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.819672131147541s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.639344262295082s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.819672131147541s"
          ></animate>
        </circle>
        <circle cx="16" cy="50" r="10" fill="#26ad9c">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.639344262295082s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.2295081967213115s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.639344262295082s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.2295081967213115s"
          ></animate>
        </circle>
      </svg>
    </>
  );
}
