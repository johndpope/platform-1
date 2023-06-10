import { Link } from "react-router-dom";
import { User } from "~/User";

export function TopBar() {
  return (
    <div className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between bg-white px-5">
      <div className="w-1/3">
        <div className="w-fit">
          <Link to="/">
            <img src="/logo.png" />
          </Link>
        </div>
      </div>
      <div className="flex w-1/3 items-center justify-center gap-6">
        <Link
          to="/sandbox"
          className="text-sm font-semibold hover:text-indigo-500"
        >
          Sandbox
        </Link>
        <a href="/docs" className="text-sm font-semibold hover:text-indigo-500">
          Documentation
        </a>
        <a
          href="/docs/recipes"
          className="text-sm font-semibold hover:text-indigo-500"
        >
          Guides
        </a>
      </div>
      <div className="flex w-1/3 items-center justify-end gap-3">
        <User.Login.Button />
      </div>
    </div>
  );
}

function Help() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1110_24449)">
        <path
          d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
          stroke="#18181B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.79883 8.70004C9.05744 7.96488 9.5679 7.34496 10.2398 6.95009C10.9117 6.55522 11.7016 6.41087 12.4697 6.54262C13.2378 6.67437 13.9345 7.07372 14.4364 7.66992C14.9383 8.26613 15.213 9.02072 15.2118 9.80004C15.2118 12 11.9118 13.1 11.9118 13.1"
          stroke="#18181B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 17.5H12.011"
          stroke="#18181B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1110_24449">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
