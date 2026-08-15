import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutIntro } from "@/components/about-intro"
import { NoticeBoard } from "@/components/notice-board"
import { CollegesGrid } from "@/components/colleges-grid"
import { FeaturedFaculty } from "@/components/featured-faculty"
import { CourseCatalog } from "@/components/course-catalog"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <AboutIntro />
        <NoticeBoard />
        <CollegesGrid />
        <FeaturedFaculty />
        <CourseCatalog />
      </main>
      <SiteFooter />
    </div>
  )
}
