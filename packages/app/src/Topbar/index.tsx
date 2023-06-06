export function Topbar() {
  return (
    <div className="flex h-16 w-full items-center justify-between px-5">
      <div>
        <img src="/logo.png" />
      </div>
      <div className="flex items-center justify-center gap-6">
        <a
          href="/overview"
          className="text-sm font-semibold hover:text-indigo-500"
        >
          Overview
        </a>
        <a href="/docs" className="text-sm font-semibold hover:text-indigo-500">
          Documentation
        </a>
        <a
          href="/guides"
          className="text-sm font-semibold hover:text-indigo-500"
        >
          Guides
        </a>
        <a
          href="/sandbox"
          className="text-sm font-semibold hover:text-indigo-500"
        >
          Sandbox
        </a>
      </div>
      <div>
        <Help />
      </div>
    </div>
  );
}

function Help() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1110_24449)">
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
