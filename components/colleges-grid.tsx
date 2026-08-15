"use client"

import { useState } from "react"
import {
  AudioLines,
  Clapperboard,
  Gamepad2,
  Sparkles,
  BookMarked,
  Layers,
  Flower2,
  ChevronDown,
  type LucideIcon,
} from "lucide-react"
import { colleges, type College } from "@/lib/data"
import { cn } from "@/lib/utils"

const iconMap: Record<College["icon"], LucideIcon> = {
  audio: AudioLines,
  film: Clapperboard,
  gamepad: Gamepad2,
  sparkles: Sparkles,
  book: BookMarked,
  layers: Layers,
  flower: Flower2,
}

const VISIBLE_LIMIT = 5

function MajorList({ majors }: { majors: string[] }) {
  const [expanded, setExpanded] = useState(false)
  const hasMore = majors.length > VISIBLE_LIMIT
  const visibleMajors = hasMore && !expanded ? majors.slice(0, VISIBLE_LIMIT) : majors
  const hiddenCount = majors.length - VISIBLE_LIMIT

  return (
    <div className="mt-5 border-t border-border pt-4">
      <ul className="flex flex-wrap gap-2">
        {visibleMajors.map((major) => (
          <li
            key={major}
            className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
          >
            {major}
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-3 inline-flex items-center gap-1 rounded-full px-1 text-xs font-semibold text-teal transition-colors hover:text-navy"
        >
          <span>{expanded ? "접기" : `외 ${hiddenCount}개 학과 더보기`}</span>
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform",
              expanded && "rotate-180",
            )}
          />
        </button>
      )}
    </div>
  )
}

export function CollegesGrid() {
  const totalMajors = colleges.reduce((sum, c) => sum + c.majors.length, 0)

  return (
    <section id="colleges" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-widest text-teal">
            COLLEGES &amp; DEPARTMENTS
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-foreground sm:text-3xl">
            단과대학 요람
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
            {colleges.length}개 단과대학, {totalMajors}개 학과에서 서브컬처를
            학문의 언어로 탐구합니다.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {colleges.map((college, i) => {
            const Icon = iconMap[college.icon]
            return (
              <article
                key={college.name}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-xl hover:shadow-navy/5"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-5 font-mono text-xs font-semibold text-border"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-teal transition-colors group-hover:bg-teal group-hover:text-teal-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-serif text-lg font-bold text-card-foreground">
                  {college.name}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {college.tagline}
                </p>
                <MajorList majors={college.majors} />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
