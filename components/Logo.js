export default function Logo({ className = '' }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="32"
        viewBox="0 0 100 32"
        className={`select-none ${className}`}
        aria-label="mrpal logo"
      >
        <text
          x="50%"
          y="22"
          fontFamily="Inter, sans-serif"
          fontSize="20"
          fontWeight="700"
          textAnchor="middle"
          fill="currentColor"
          className="text-gray-800 dark:text-white"
          shapeRendering="crispEdges"
        >
          mrpal
        </text>
      </svg>
    );
  }