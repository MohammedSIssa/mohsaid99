export default function Shield({ size = 80 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
    >
      <g fill="none">
        <path
          fill="url(#fluentColorShield200)"
          d="M9.723 2.084a.5.5 0 0 1 .554 0a15.05 15.05 0 0 0 6.294 2.421A.5.5 0 0 1 17 5v4.5c0 3.891-2.307 6.73-6.82 8.467a.5.5 0 0 1-.36 0C5.308 16.23 3 13.39 3 9.5V5a.5.5 0 0 1 .43-.495a15.05 15.05 0 0 0 6.293-2.421"
        ></path>
        <defs>
          <radialGradient
            id="fluentColorShield200"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(21.50002 31 -27.12496 18.81249 -2.5 -7)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.338} stopColor="#0fafff"></stop>
            <stop offset={0.529} stopColor="#367af2"></stop>
            <stop offset={0.682} stopColor="#5750e2"></stop>
            <stop offset={0.861} stopColor="#cc23d1"></stop>
          </radialGradient>
        </defs>
      </g>
    </svg>
  );
}
