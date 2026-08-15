import { GraduationCap, Info } from "lucide-react"
import { courses, type Course } from "@/lib/data"
import { cn } from "@/lib/utils"

const typeStyles: Record<Course["type"], string> = {
  전공필수: "bg-navy text-navy-foreground",
  전공선택: "bg-teal/15 text-teal",
  전공심화: "bg-accent text-navy",
  교양: "bg-muted text-muted-foreground",
}

export function CourseCatalog() {
  return (
    <section id="courses" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold tracking-widest text-teal">
              COURSE CATALOG
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-foreground sm:text-3xl">
              주요 개설 강좌
            </h2>
            <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
              <Info className="h-4 w-4" />
              학점시수 표기 · 학점–이론–실습
            </p>
          </div>
          <a
            href="https://instagram.com/otaku.univ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-bold text-teal-foreground shadow-lg shadow-teal/20 transition-all hover:brightness-110"
          >
            <GraduationCap className="h-4 w-4" />
            수강신청 바로가기
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <span
                  className={cn(
                    "inline-block rounded-full px-3 py-1 text-xs font-semibold",
                    typeStyles[course.type],
                  )}
                >
                  {course.type}
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-card-foreground text-balance">
                  {course.title}
                </h3>
                {course.note && (
                  <p className="mt-2 text-xs font-medium text-destructive">
                    {course.note}
                  </p>
                )}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs text-muted-foreground">학점시수</span>
                <span className="font-mono text-lg font-bold tracking-wider text-teal">
                  {course.credits}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
