import React from "react";

export default function UserIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="32" height="32" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_315_241" transform="scale(0.00195312)" />
          </pattern>
          <image
            id="image0_315_241"
            width="512"
            height="512"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
}