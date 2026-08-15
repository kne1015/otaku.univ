import { cn } from "@/lib/utils"

export function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-4 w-4", className)}
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.1 9.1 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.12 1.03A12.82 12.82 0 013 1.1a4.52 4.52 0 001.4 6.04A4.48 4.48 0 012 6.6v.06c0 2.18 1.55 4 3.61 4.41a4.52 4.52 0 01-2.04.08c.58 1.8 2.26 3.11 4.25 3.15A9.05 9.05 0 012 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.84-6.87 12.84-12.84 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" />
    </svg>
  )
}
