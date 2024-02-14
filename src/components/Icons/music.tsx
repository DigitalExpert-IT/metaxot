interface SVGProps {
  color: string;
}

export const Music: React.FC<SVGProps> = ({ color }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 24.5C8.933 24.5 10.5 22.933 10.5 21C10.5 19.067 8.933 17.5 7 17.5C5.067 17.5 3.5 19.067 3.5 21C3.5 22.933 5.067 24.5 7 24.5Z"
        fill={color || "white"}
        stroke={color || "white"}
        stroke-width="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 23.3333C22.933 23.3333 24.5 21.7663 24.5 19.8333C24.5 17.9003 22.933 16.3333 21 16.3333C19.067 16.3333 17.5 17.9003 17.5 19.8333C17.5 21.7663 19.067 23.3333 21 23.3333Z"
        fill={color || "white"}
        stroke={color || "white"}
        stroke-width="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M24.5 3.5L10.5 7V11.6667L24.5 8.16667V3.5Z" fill="none" />
      <path
        d="M10.5 21V11.6667M10.5 11.6667V7L24.5 3.5V8.16667M10.5 11.6667L24.5 8.16667M24.5 19.8333V8.16667"
        stroke={color || "white"}
        stroke-width="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
