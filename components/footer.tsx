import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-coffee-dark text-coffee-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Daily Grind Coffee</h3>
            <p className="text-coffee-cream/80 leading-relaxed">
              Your neighborhood coffee shop serving excellence, one cup at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-coffee-cream/80 hover:text-coffee-accent transition-colors">
                About Us
              </a>
              <a href="#menu" className="block text-coffee-cream/80 hover:text-coffee-accent transition-colors">
                Menu
              </a>
              <a href="#location" className="block text-coffee-cream/80 hover:text-coffee-accent transition-colors">
                Location & Hours
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-coffee-cream/10 hover:bg-coffee-accent flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-coffee-cream/10 hover:bg-coffee-accent flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-coffee-cream/10 hover:bg-coffee-accent flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-coffee-cream/80">
              <a href="mailto:hello@dailygrind.coffee" className="hover:text-coffee-accent transition-colors">
                hello@dailygrind.coffee
              </a>
            </p>
            <p className="text-coffee-cream/80">
              <a href="tel:555-123-4567" className="hover:text-coffee-accent transition-colors">
                (555) 123-4567
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-coffee-cream/20 text-center text-coffee-cream/60">
          <p>
            &copy; {new Date().getFullYear()} Daily Grind Coffee. All rights reserved. Fueled by passion and caffeine.
          </p>
        </div>
      </div>
    </footer>
  )
}
