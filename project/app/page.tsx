import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { LocationHours } from "@/components/location-hours"
import { MenuPlaceholder } from "@/components/menu-placeholder"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <MenuPlaceholder />
      <LocationHours />
      <Footer />
    </main>
  )
}
