import { cn } from "@/lib/utils"

export function UniversityCrest({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-10 w-10", className)}
      role="img"
      aria-label="오타쿠대학교 교표"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* shield */}
      <path
        d="M32 3 L57 11 V32 C57 47 46 56 32 61 C18 56 7 47 7 32 V11 Z"
        fill="currentColor"
        className="text-navy"
      />
      <path
        d="M32 8 L52 14.5 V32 C52 44 43 51.5 32 56 C21 51.5 12 44 12 32 V14.5 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="text-teal"
      />
      {/* monogram O + U */}
      <circle
        cx="27"
        cy="29"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-teal"
      />
      <path
        d="M34 22 V31 C34 36 37.5 39 42 39 C46.5 39 50 36 50 31 V22"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-navy-foreground"
      />
      {/* laurel dots */}
      <circle cx="32" cy="50" r="2" fill="currentColor" className="text-teal" />
    </svg>
  )
}
