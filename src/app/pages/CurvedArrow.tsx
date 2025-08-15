export default function CurvedArrow() {
  return (
    <svg
      width="150"
      height="100"
      viewBox="0 0 150 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Curved path */}
      <path
        d="M5 40 
           C 40 20, 60 50, 75 40 
           C 85 35, 95 25, 90 15
           C 80 0, 60 10, 65 30
           C 70 50, 110 50, 135 65"
        stroke="#2CA6A4"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Sharp arrowhead */}
      <line
        x1="135"
        y1="65"
        x2="127"
        y2="60"
        stroke="#2CA6A4"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="135"
        y1="65"
        x2="127"
        y2="70"
        stroke="#2CA6A4"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
