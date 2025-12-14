export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-coffee-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-dark mb-8 text-balance">
            More Than Just Coffee
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-coffee-dark/80 leading-relaxed">
            <p className="text-pretty">
              At Daily Grind, we believe that great coffee is the foundation of a great day. But we're not just about
              the beans—we're about the experience, the community, and that perfect moment of peace before the chaos
              begins.
            </p>

            <p className="text-pretty">
              Founded by caffeine enthusiasts who refused to settle for mediocre morning brews, we've made it our
              mission to serve up exceptional coffee in a space where everyone feels welcome. Whether you're a pour-over
              purist, an espresso fanatic, or someone who just needs their daily fix, we've got you covered.
            </p>

            <p className="text-pretty">
              Our beans are ethically sourced, expertly roasted, and brewed with care by our talented baristas who know
              the difference between a flat white and a cortado (and won't judge you if you don't). Come for the coffee,
              stay for the vibes, and leave ready to tackle whatever the day throws at you.
            </p>
          </div>

          {/* Coffee bean decorative elements */}
          <div className="mt-12 flex justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-coffee-medium opacity-20"></div>
            <div className="w-12 h-12 rounded-full bg-coffee-accent opacity-40"></div>
            <div className="w-12 h-12 rounded-full bg-coffee-medium opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
