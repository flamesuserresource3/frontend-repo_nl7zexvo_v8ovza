import { motion } from "framer-motion";
import { UtensilsCrossed, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.05),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.04),transparent_40%)]" />

      <div className="container mx-auto px-6 py-24 md:py-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wider uppercase">
            <UtensilsCrossed size={14} />
            Fine Dining Experience
          </div>
          <h1 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
            Savor the Art of Gastronomy
          </h1>
          <p className="mt-4 max-w-2xl text-white/80 md:text-lg">
            Welcome to Étoile — where seasonal ingredients meet culinary
            craftsmanship. Immerse yourself in an evening of elegant ambiance,
            refined flavors, and impeccable service.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-medium text-neutral-900 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
            >
              Explore Menu
            </a>
            <a
              href="#reservations"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Reserve a Table
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-1.5">
              <Star className="text-amber-400" size={16} />
              <Star className="text-amber-400" size={16} />
              <Star className="text-amber-400" size={16} />
              <Star className="text-amber-400" size={16} />
              <Star className="text-amber-400" size={16} />
            </div>
            <span>Rated 5.0 by our guests</span>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -right-24 top-10 hidden h-[520px] w-[520px] rounded-full bg-amber-500/20 blur-3xl md:block" />
    </section>
  );
}
