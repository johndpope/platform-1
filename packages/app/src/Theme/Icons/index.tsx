export type Icon = Styleable & {
  color?: string;
};

export function Link(props: Icon) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g>
        <path
          d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
          stroke={props.color || "#18181B"}
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 2H14V6"
          stroke={props.color || "#18181B"}
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66797 9.33333L14.0013 2"
          stroke={props.color || "#18181B"}
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function Union(props: Icon) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12.5C23 18.5751 18.0751 23.5 12 23.5C5.92487 23.5 1 18.5751 1 12.5C1 6.42487 5.92487 1.5 12 1.5C18.0751 1.5 23 6.42487 23 12.5ZM24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5ZM11.5 12V5.5H12.5V12H19V13H12.5V19.5H11.5V13H5V12H11.5Z"
        fill={props.color || "#a1a1aa"}
      />
    </svg>
  );
}

export function Engine(props: Icon) {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M19.2032 3.91699V3.91909L23.7734 9.98745V9.9928C26.3196 10.1107 28.3477 12.2123 28.3477 14.7876V16.0576H31.9995V18.4858H28.3477V19.7566C28.3477 22.3319 26.3196 24.4335 23.7734 24.5514V24.5565L19.2032 30.6249V30.6269L12.8003 30.6269L8.22852 24.5565V24.5511C5.68238 24.4333 3.6543 22.3317 3.6543 19.7564V18.4858H0V16.0576H3.6543V14.7873C3.6543 12.212 5.68238 10.1104 8.22852 9.99252V9.98743L12.8003 3.91699H19.2032Z"
        fill={props.color || "#2C566E"}
      />
    </svg>
  );
}

export function GridBlocks(props: Icon) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <rect width="2.57143" height="2.57143" fill="#3F3F46" />
      <rect
        opacity="0.6"
        x="9.42773"
        width="2.57143"
        height="2.57143"
        fill="#3F3F46"
      />
      <rect
        opacity="0.8"
        x="4.71484"
        width="2.57143"
        height="2.57143"
        fill="#3F3F46"
      />
      <rect
        opacity="0.8"
        y="4.71387"
        width="2.57143"
        height="2.57143"
        fill="#3F3F46"
      />
      <rect
        opacity="0.4"
        x="9.42773"
        y="4.71387"
        width="2.57143"
        height="2.57143"
        fill="#3F3F46"
      />
      <rect
        opacity="0.6"
        x="4.71484"
        y="4.71484"
        width="2.57143"
        height="2.57143"
        fill="#3F3F46"
      />
      <rect
        opacity="0.6"
        y="9.42871"
        width="2.57143"
        height="2.57143"
        fill="#3F3F46"
      />
      <rect
        opacity="0.2"
        x="9.42773"
        y="9.42871"
        width="2.57143"
        height="2.57143"
        fill="#3F3F46"
      />
      <rect
        opacity="0.4"
        x="4.71484"
        y="9.42871"
        width="2.57143"
        height="2.57143"
        fill="#3F3F46"
      />
    </svg>
  );
}

export function X(props: Icon) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M13 3L3 13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 3L13 13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Copy(props: Icon) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M17.5 7.875H9.625C8.6585 7.875 7.875 8.6585 7.875 9.625V17.5C7.875 18.4665 8.6585 19.25 9.625 19.25H17.5C18.4665 19.25 19.25 18.4665 19.25 17.5V9.625C19.25 8.6585 18.4665 7.875 17.5 7.875Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.375 13.125H3.5C3.03587 13.125 2.59075 12.9406 2.26256 12.6124C1.93437 12.2842 1.75 11.8391 1.75 11.375V3.5C1.75 3.03587 1.93437 2.59075 2.26256 2.26256C2.59075 1.93437 3.03587 1.75 3.5 1.75H11.375C11.8391 1.75 12.2842 1.93437 12.6124 2.26256C12.9406 2.59075 13.125 3.03587 13.125 3.5V4.375"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
