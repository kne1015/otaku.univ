import { GraduationCap, FlaskConical, BookOpen } from "lucide-react"
import { InstagramIcon } from "@/components/instagram-icon"

const courses = [
  "보컬로이드역사학개론",
  "MMD 고고학",
  "보컬로이드 노래의 이해",
]

export function FeaturedFaculty() {
  return (
    <section id="faculty" className="bg-navy py-20 text-navy-foreground sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-widest text-teal">
            FEATURED FACULTY
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
            교수진 소개
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] md:grid-cols-5">
          {/* Portrait */}
          <div className="relative md:col-span-2">
            <img
              src="/images/prof-labmem.png"
              alt="라보멤 교수 초상"
              className="h-64 w-full object-cover object-top md:h-full"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent md:bg-gradient-to-r"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col p-7 md:col-span-3 md:p-9">
            <h3 className="font-serif text-2xl font-bold">라보멤 교수</h3>
            <p className="mt-1 text-sm text-teal">Prof. Labmem</p>

            <div className="mt-4 flex flex-col gap-2 text-sm text-navy-foreground/85">
              <p className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 shrink-0 text-teal" />
                보컬로이드역사학 박사 / 보컬로이드학과 주임교수
              </p>
              <p className="flex items-center gap-2">
                <FlaskConical className="h-4 w-4 shrink-0 text-teal" />
                미래 가젯 연구소 (Future Gadget Lab)
              </p>
            </div>

            <p className="mt-5 text-pretty text-sm leading-relaxed text-navy-foreground/70">
              &ldquo;최초의 보컬로이드 탄생부터 MMD 고고학까지, 서브컬처의 역사를
              탐구합니다.&rdquo;
            </p>

            <div className="mt-6">
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-wide text-navy-foreground/60">
                <BookOpen className="h-4 w-4" /> 주요 담당 강좌
              </p>
              <ul className="flex flex-wrap gap-2">
                {courses.map((course) => (
                  <li
                    key={course}
                    className="rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-medium text-teal"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://instagram.com/oshmkufa.2010"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-teal-foreground transition-all hover:brightness-110"
            >
              <InstagramIcon className="h-4 w-4" />
              @oshmkufa.2010
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
