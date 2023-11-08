import React from "react";

export default function ArrowIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        width="16"
        height="11"
        viewBox="0 0 16 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.985 6.04071C15.2315 5.79413 15.2315 5.39435 14.985 5.14777L10.9668 1.12956C10.7202 0.882983 10.3204 0.882983 10.0738 1.12956C9.82725 1.37614 9.82725 1.77592 10.0738 2.0225L13.6456 5.59424L10.0738 9.16598C9.82725 9.41256 9.82725 9.81234 10.0738 10.0589C10.3204 10.3055 10.7202 10.3055 10.9668 10.0589L14.985 6.04071ZM0.425293 6.22564H14.5385V4.96284H0.425293V6.22564Z"
          fill="#191919"
        />
      </svg>
    </div>
  );
}
