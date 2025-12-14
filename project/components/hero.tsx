import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-coffee-dark">
      {/* Abstract coffee pattern background */}
      <div className="absolute inset-0 opacity-10">
        <img src="/placeholder.svg?height=1080&width=1920" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-coffee-cream mb-6 text-balance">
          Daily Grind Coffee
        </h1>
        <p className="text-xl md:text-2xl text-coffee-cream/90 max-w-2xl mx-auto mb-8 text-pretty">
          Where every cup is a fresh start and every sip is worth savoring
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-coffee-accent hover:bg-coffee-accent/90 text-coffee-dark font-semibold px-8">
            View Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-coffee-cream text-coffee-cream hover:bg-coffee-cream hover:text-coffee-dark bg-transparent"
          >
            Find Us
          </Button>
        </div>
      </div>

      {/* Decorative coffee steam SVG */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-coffee-cream">
          <path
            d="M30,80 Q30,60 35,50 Q40,40 35,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-[float_3s_ease-in-out_infinite]"
          />
          <path
            d="M50,80 Q50,60 55,50 Q60,40 55,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-[float_3s_ease-in-out_0.5s_infinite]"
          />
          <path
            d="M70,80 Q70,60 65,50 Q60,40 65,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-[float_3s_ease-in-out_1s_infinite]"
          />
        </svg>
      </div>
    </section>
  )
}
