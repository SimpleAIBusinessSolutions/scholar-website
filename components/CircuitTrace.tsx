import type { CSSProperties } from "react";

export default function CircuitTrace() {
  return (
    <svg
      className="circuit-trace absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 800 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <path
        d="M -20 120 L 180 120 L 220 160 L 420 160 L 460 120 L 700 120"
        stroke="url(#trace-gradient-1)"
        strokeWidth="1.5"
        style={{ "--trace-length": 1400 } as CSSProperties}
      />
      <path
        d="M 820 460 L 600 460 L 560 420 L 340 420 L 300 460 L 60 460"
        stroke="url(#trace-gradient-2)"
        strokeWidth="1.5"
        style={
          {
            "--trace-length": 1400,
            animationDelay: "0.3s",
          } as CSSProperties
        }
      />
      <path
        d="M -20 300 L 120 300 L 150 330 L 150 380"
        stroke="url(#trace-gradient-1)"
        strokeWidth="1.5"
        style={
          {
            "--trace-length": 500,
            animationDelay: "0.6s",
          } as CSSProperties
        }
      />
      <path
        d="M 820 260 L 660 260 L 630 230 L 630 180"
        stroke="url(#trace-gradient-2)"
        strokeWidth="1.5"
        style={
          {
            "--trace-length": 500,
            animationDelay: "0.9s",
          } as CSSProperties
        }
      />

      <circle cx="220" cy="160" r="4" fill="#3ddc7a" style={{ animationDelay: "1.2s" }} />
      <circle cx="460" cy="120" r="4" fill="#4d82ff" style={{ animationDelay: "1.3s" }} />
      <circle cx="560" cy="420" r="4" fill="#3ddc7a" style={{ animationDelay: "1.4s" }} />
      <circle cx="300" cy="460" r="4" fill="#4d82ff" style={{ animationDelay: "1.5s" }} />
      <circle cx="150" cy="380" r="4" fill="#3ddc7a" style={{ animationDelay: "1.6s" }} />
      <circle cx="630" cy="180" r="4" fill="#4d82ff" style={{ animationDelay: "1.7s" }} />

      <defs>
        <linearGradient id="trace-gradient-1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
          <stop offset="50%" stopColor="#3ddc7a" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="trace-gradient-2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2f6bff" stopOpacity="0" />
          <stop offset="50%" stopColor="#4d82ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2f6bff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
