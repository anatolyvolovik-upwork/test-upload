import { Coffee, Croissant, Leaf } from "lucide-react"

export function MenuPlaceholder() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-coffee-light">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-dark mb-12 text-center text-balance">
          Our Menu
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Coffee */}
          <div className="bg-coffee-cream rounded-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-coffee-accent mb-6">
              <Coffee className="w-8 h-8 text-coffee-dark" />
            </div>
            <h3 className="font-display text-2xl font-bold text-coffee-dark mb-4">Coffee & Espresso</h3>
            <p className="text-coffee-dark/70 leading-relaxed">
              From classic drip to expertly crafted espresso drinks. Hot or iced, we brew it right.
            </p>
          </div>

          {/* Pastries */}
          <div className="bg-coffee-cream rounded-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-coffee-accent mb-6">
              <Croissant className="w-8 h-8 text-coffee-dark" />
            </div>
            <h3 className="font-display text-2xl font-bold text-coffee-dark mb-4">Fresh Pastries</h3>
            <p className="text-coffee-dark/70 leading-relaxed">
              Locally baked treats that pair perfectly with your morning brew. Sweet or savory, always fresh.
            </p>
          </div>

          {/* Specialty */}
          <div className="bg-coffee-cream rounded-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-coffee-accent mb-6">
              <Leaf className="w-8 h-8 text-coffee-dark" />
            </div>
            <h3 className="font-display text-2xl font-bold text-coffee-dark mb-4">Specialty Options</h3>
            <p className="text-coffee-dark/70 leading-relaxed">
              Plant-based milks, seasonal specials, and alternative brews for every preference.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-coffee-dark/60 italic">Full menu coming soon!</p>
        </div>
      </div>
    </section>
  )
}
