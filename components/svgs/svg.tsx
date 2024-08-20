export const LogoClose = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#B9973E" />
      <rect
        x="11"
        y="34"
        width="32"
        height="8"
        rx="4"
        transform="rotate(-45 11 34)"
        fill="white"
      />
      <rect
        x="17"
        y="11"
        width="32"
        height="8"
        rx="4"
        transform="rotate(45 17 11)"
        fill="white"
      />
    </svg>
  );
};
export const LogoOpen = () => {
  return (
    <svg
      width="50"
      height="28"
      viewBox="0 0 50 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_307_17)">
        <path
          d="M22.8358 1.39228C24.154 0.544259 25.846 0.544258 27.1642 1.39228L43.8643 12.136C47.2211 14.2956 45.6916 19.5 41.7001 19.5L8.29988 19.5C4.30838 19.5 2.7789 14.2956 6.13573 12.136L22.8358 1.39228Z"
          fill="#B9973E"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_307_17"
          x="0.292664"
          y="0.756256"
          width="49.4147"
          height="26.7437"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.725 0 0 0 0 0.590513 0 0 0 0 0.244687 0 0 0 0.32 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_307_17"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_307_17"
            result="effect2_dropShadow_307_17"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_307_17"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
