export default function Health({ size = 80 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
    >
      <g fill="none">
        <path
          fill="url(#fluentColorPersonHeart480)"
          d="M10.25 28A4.25 4.25 0 0 0 6 32.249V33c0 3.756 1.942 6.567 4.92 8.38C13.85 43.163 17.786 44 22 44s8.15-.837 11.08-2.62C36.058 39.567 38 36.756 38 33v-.751A4.25 4.25 0 0 0 33.75 28z"
        ></path>
        <path
          fill="url(#fluentColorPersonHeart481)"
          d="M10.25 28A4.25 4.25 0 0 0 6 32.249V33c0 3.756 1.942 6.567 4.92 8.38C13.85 43.163 17.786 44 22 44s8.15-.837 11.08-2.62C36.058 39.567 38 36.756 38 33v-.751A4.25 4.25 0 0 0 33.75 28z"
        ></path>
        <path
          fill="url(#fluentColorPersonHeart484)"
          fillOpacity={0.25}
          d="M10.25 28A4.25 4.25 0 0 0 6 32.249V33c0 3.756 1.942 6.567 4.92 8.38C13.85 43.163 17.786 44 22 44s8.15-.837 11.08-2.62C36.058 39.567 38 36.756 38 33v-.751A4.25 4.25 0 0 0 33.75 28z"
        ></path>
        <path
          fill="url(#fluentColorPersonHeart482)"
          d="M22 4c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10S27.523 4 22 4"
        ></path>
        <path
          fill="url(#fluentColorPersonHeart483)"
          d="m44.202 35.998l-9.115 9.538a1.5 1.5 0 0 1-2.17 0l-9.115-9.538a6.504 6.504 0 1 1 9.404-8.988l.796.833l.796-.833a6.504 6.504 0 0 1 9.404 8.988"
        ></path>
        <defs>
          <linearGradient
            id="fluentColorPersonHeart480"
            x1={13.61}
            x2={18.779}
            y1={30.127}
            y2={46.635}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.125} stopColor="#9c6cfe"></stop>
            <stop offset={1} stopColor="#7a41dc"></stop>
          </linearGradient>
          <linearGradient
            id="fluentColorPersonHeart481"
            x1={22}
            x2={29.238}
            y1={26.095}
            y2={53.143}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#885edb" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#e362f8"></stop>
          </linearGradient>
          <linearGradient
            id="fluentColorPersonHeart482"
            x1={16.756}
            x2={26.949}
            y1={6.659}
            y2={22.934}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.125} stopColor="#9c6cfe"></stop>
            <stop offset={1} stopColor="#7a41dc"></stop>
          </linearGradient>
          <linearGradient
            id="fluentColorPersonHeart483"
            x1={24.668}
            x2={38.208}
            y1={26.312}
            y2={49.048}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fc92cb"></stop>
            <stop offset={1} stopColor="#d7257d"></stop>
          </linearGradient>
          <radialGradient
            id="fluentColorPersonHeart484"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(14.66669 11.83326 -6.45196 7.99686 33.333 38.666)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.436} stopColor="#30116e"></stop>
            <stop offset={0.715} stopColor="#30116e" stopOpacity={0.812}></stop>
            <stop offset={1} stopColor="#30116e" stopOpacity={0}></stop>
          </radialGradient>
        </defs>
      </g>
    </svg>
  );
}
