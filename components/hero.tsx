"use client"

import { useState } from "react"
import { BookOpen, X } from "lucide-react"
import { InstagramIcon } from "@/components/instagram-icon"
import { courses } from "@/lib/data"
import { cn } from "@/lib/utils"

const typeStyles: Record<string, string> = {
  전공필수: "bg-navy text-navy-foreground",
  전공선택: "bg-teal/15 text-teal",
  전공심화: "bg-accent text-navy",
  교양: "bg-muted text-muted-foreground",
}

export function Hero() {
  const [open, setOpen] = useState(false)

  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background */}
      <img
        src="/images/campus-hero.png"
        alt="오타쿠대학교 본관 캠퍼스 전경"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-navy/60"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal">
          SINCE 2026 ·   CAMPUS
        </p>
        <h1 className="max-w-3xl text-balance font-serif text-3xl font-black leading-tight text-navy-foreground sm:text-4xl lg:text-5xl">
          Veritas in Otaku
          <span className="mt-3 block text-xl font-bold text-teal sm:text-2xl lg:text-3xl">
            세상의 모든 덕질이 학문이 되는 곳
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
          2026학년도 오타쿠대학교 신입생 및 전임교원 모집 안내
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-bold text-teal-foreground shadow-xl shadow-teal/25 transition-all hover:brightness-110"
          >
            <BookOpen className="h-4 w-4" />
            2026 수강편람 열람
          </button>
          <a
            href="https://instagram.com/otaku.univ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-foreground/30 bg-navy-foreground/5 px-7 py-3.5 text-sm font-bold text-navy-foreground backdrop-blur transition-colors hover:bg-navy-foreground/10"
          >
            <InstagramIcon className="h-4 w-4" />
            공식 인스타그램 (@otaku.univ)
          </a>
        </div>
      </div>

      {/* Curriculum Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-navy/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="curriculum-modal-title"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-card p-6 shadow-2xl sm:rounded-3xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-widest text-teal">
                  2026 CURRICULUM
                </p>
                <h2
                  id="curriculum-modal-title"
                  className="mt-1 font-serif text-2xl font-bold text-card-foreground"
                >
                  2026학년도 수강편람
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted"
                aria-label="닫기"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="flex flex-col gap-3">
              {courses.map((course) => (
                <li
                  key={course.title}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3"
                >
                  <div className="min-w-0">
                    <p className="font-medium text-card-foreground">
                      {course.title}
                    </p>
                    {course.note && (
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {course.note}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-xs font-semibold",
                        typeStyles[course.type],
                      )}
                    >
                      {course.type}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {course.credits}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-center text-xs text-muted-foreground">
              학점시수 표기: 학점–이론–실습
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
