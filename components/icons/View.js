import * as React from "react";
const SvgView = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8.75 21V3h2v18h-2ZM18 21V8.5h2V21h-2ZM4 21l.004-10h2L6 21H4Zm9.248 0v-7h2v7h-2Z"
    />
  </svg>
);
export default SvgView;
