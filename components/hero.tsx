"use client"

import { InstagramIcon } from "@/components/instagram-icon"
import { TwitterIcon } from "@/components/twitter-icon"

export function Hero() {
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
          
          <a
            href="https://instagram.com/otaku.univ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-foreground/30 bg-navy-foreground/5 px-7 py-3.5 text-sm font-bold text-navy-foreground backdrop-blur transition-colors hover:bg-navy-foreground/10"
          >
            <InstagramIcon className="h-4 w-4" />
            공식 인스타그램 (@otaku.univ)
          </a>
          <a
            href="https://x.com/otakuuniv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-foreground/30 bg-navy-foreground/5 px-7 py-3.5 text-sm font-bold text-navy-foreground backdrop-blur transition-colors hover:bg-navy-foreground/10"
          >
            <TwitterIcon className="h-4 w-4" />
            공식 X (@otakuuniv)
          </a>
           
        </div>
      </div>
     
    </section>
  )
}
