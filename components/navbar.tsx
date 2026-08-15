"use client"

import { useState } from "react"
import { Menu, X, GraduationCap } from "lucide-react"
import { UniversityCrest } from "@/components/university-crest"
import { cn } from "@/lib/utils"

const menu = [
  { label: "대학소개", href: "#about" },
  { label: "단과대학 & 학과", href: "#colleges" },
  { label: "교수진", href: "#faculty" },
  { label: "강의/수강신청", href: "#courses" },
  { label: "학사공지", href: "#notices" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <UniversityCrest className="h-9 w-9 shrink-0" />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base font-bold text-navy-foreground">
              오타쿠대학교
            </span>
            <span className="text-[10px] font-medium tracking-[0.18em] text-teal">
              OTAKU UNIVERSITY
            </span>
          </span>
        </a>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="주 메뉴">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-navy-foreground/80 transition-colors hover:text-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#courses"
            className="hidden items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-teal-foreground shadow-lg shadow-teal/20 transition-all hover:brightness-110 sm:inline-flex"
          >
            <GraduationCap className="h-4 w-4" />
            수강신청 바로가기
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-navy-foreground lg:hidden"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-navy transition-all duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav
          className="flex flex-col gap-1 px-4 py-4"
          aria-label="모바일 메뉴"
        >
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-navy-foreground/90 transition-colors hover:bg-white/5 hover:text-teal"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#courses"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-bold text-teal-foreground"
          >
            <GraduationCap className="h-4 w-4" />
            수강신청 바로가기
          </a>
        </nav>
      </div>
    </header>
  )
}
