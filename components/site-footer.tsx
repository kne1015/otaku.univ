import { InstagramIcon } from "@/components/instagram-icon"
import { UniversityCrest } from "@/components/university-crest"

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <UniversityCrest className="h-10 w-10" />
              <div className="leading-tight">
                <p className="font-serif text-base font-bold">오타쿠대학교</p>
                <p className="text-[10px] font-medium tracking-[0.18em] text-teal">
                  OTAKU UNIVERSITY
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-navy-foreground/70">
              총장: 라보멤 (Labmem)
            </p>
            <p className="text-sm text-navy-foreground/70">
              미래 가젯 연구소 · Future Gadget Lab
            </p>
          </div>

          {/* Channels */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-navy-foreground/60">
              공식 채널
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://instagram.com/otaku.univ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-navy-foreground/85 transition-colors hover:text-teal"
                >
                  <InstagramIcon className="h-4 w-4" />
                  @otaku.univ
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/oshmkufa.2010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-navy-foreground/85 transition-colors hover:text-teal"
                >
                  <InstagramIcon className="h-4 w-4" />
                  @oshmkufa.2010
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-navy-foreground/60">
              바로가기
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-navy-foreground/85">
              <li>
                <a href="#about" className="transition-colors hover:text-teal">
                  대학소개
                </a>
              </li>
              <li>
                <a href="#colleges" className="transition-colors hover:text-teal">
                  단과대학 &amp; 학과
                </a>
              </li>
              <li>
                <a href="#faculty" className="transition-colors hover:text-teal">
                  교수진
                </a>
              </li>
              <li>
                <a href="#courses" className="transition-colors hover:text-teal">
                  강의/수강신청
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-navy-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright &copy; 2026 Otaku University. All rights reserved.</p>
          <p className="rounded-full bg-white/5 px-3 py-1.5 text-navy-foreground/70">
            본 사이트는 가상의 서브컬처 학술 캠퍼스 프로젝트입니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
