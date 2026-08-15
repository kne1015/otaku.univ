import { CalendarDays, ChevronRight } from "lucide-react"
import { notices, academicCalendar } from "@/lib/data"
import { cn } from "@/lib/utils"

function badgeClass(badge?: string) {
  if (badge === "중요") return "bg-destructive text-white"
  if (badge === "학사") return "bg-teal text-teal-foreground"
  return "bg-muted text-muted-foreground"
}

export function NoticeBoard() {
  return (
    <section id="notices" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-teal">
              NOTICE &amp; CALENDAR
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-foreground sm:text-3xl">
              학사공지 &amp; 학사일정
            </h2>
          </div>
          <a
            href="#notices"
            className="hidden shrink-0 items-center gap-1 text-sm font-medium text-teal hover:underline sm:inline-flex"
          >
            전체보기 <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Notices list */}
          <ul className="lg:col-span-2 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            {notices.map((notice) => (
              <li key={notice.title}>
                <a
                  href="#notices"
                  className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-accent"
                >
                  <span
                    className={cn(
                      "shrink-0 rounded-md px-2.5 py-1 text-xs font-bold",
                      badgeClass(notice.badge),
                    )}
                  >
                    {notice.badge ?? notice.category}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-card-foreground">
                      <span className="mr-1.5 text-muted-foreground">
                        [{notice.category}]
                      </span>
                      {notice.title}
                    </p>
                  </div>
                  <time className="hidden shrink-0 font-mono text-xs text-muted-foreground sm:block">
                    {notice.date}
                  </time>
                </a>
              </li>
            ))}
          </ul>

          {/* Academic calendar */}
          <div className="rounded-2xl border border-border bg-navy p-6 text-navy-foreground shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-teal" />
              <h3 className="font-serif text-lg font-bold">
                2026학년도 2학기 학사일정
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {academicCalendar.map((item) => (
                <li key={item.label} className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-teal">
                    {item.date}
                  </span>
                  <span className="text-sm text-navy-foreground/85">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
