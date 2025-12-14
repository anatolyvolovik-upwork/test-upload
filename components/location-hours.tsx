import { MapPin, Clock } from "lucide-react"

export function LocationHours() {
  return (
    <section id="location" className="py-20 md:py-28 bg-coffee-cream">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-dark mb-12 text-center text-balance">
          Visit Us
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Location */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-coffee-accent flex items-center justify-center">
                <MapPin className="w-6 h-6 text-coffee-dark" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-coffee-dark mb-3">Location</h3>
                <address className="not-italic text-coffee-dark/80 leading-relaxed text-lg">
                  123 Brew Street
                  <br />
                  Downtown District
                  <br />
                  Coffee City, CC 12345
                </address>
                <p className="mt-4 text-coffee-dark/70">
                  Right in the heart of downtown, perfect for your morning commute or afternoon pick-me-up.
                </p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-coffee-accent flex items-center justify-center">
                <Clock className="w-6 h-6 text-coffee-dark" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-coffee-dark mb-4">Hours</h3>
                <div className="space-y-2 text-lg">
                  <div className="flex justify-between">
                    <span className="text-coffee-dark font-medium">Monday - Friday</span>
                    <span className="text-coffee-dark/80">6:30 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-coffee-dark font-medium">Saturday</span>
                    <span className="text-coffee-dark/80">7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-coffee-dark font-medium">Sunday</span>
                    <span className="text-coffee-dark/80">7:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <p className="mt-4 text-coffee-dark/70">Early bird or night owl? We're here when you need us most.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="aspect-video bg-coffee-light rounded-lg overflow-hidden border-4 border-coffee-medium/20">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="Map showing Daily Grind Coffee location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
