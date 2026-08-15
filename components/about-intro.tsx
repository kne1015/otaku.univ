const stats = [
  { value: "7", label: "단과대학" },
  { value: "52", label: "학과" },
  { value: "2026", label: "개교 연도" },
  { value: "∞", label: "오타쿠 연대" },
]

export function AboutIntro() {
  return (
    <section id="about" className="border-b border-border bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-widest text-teal">
              ABOUT OTAKU UNIVERSITY
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold leading-snug text-foreground text-balance sm:text-3xl">
              덕질을 학문으로, 열정을 학위로.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              오타쿠대학교는 서브컬처를 학문으로 진지하게 연구하는 가상의
               캠퍼스입니다. 보컬로이드부터 버추얼, 게임, TCG, 동방프로젝트에
              이르기까지 &mdash; 모든 &lsquo;최애&rsquo;는 곧 하나의 학문
              분야입니다. 진리(Veritas)는 언제나 덕질 속에 있습니다.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-background p-6 text-center"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-serif text-4xl font-black text-teal">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
