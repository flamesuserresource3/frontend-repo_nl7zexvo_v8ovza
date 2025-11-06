import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Star } from "lucide-react";

const reviews = [
  {
    name: "Amelia R.",
    text:
      "Every course was a revelation. The scallops were the best I've ever had.",
    rating: 5,
  },
  {
    name: "Marcus L.",
    text:
      "Elegant ambiance, attentive staff, and an exceptional wine list.",
    rating: 5,
  },
  {
    name: "Priya K.",
    text:
      "A perfect anniversary dinner. Desserts were stunning.",
    rating: 5,
  },
];

export default function ReviewsContact() {
  return (
    <section id="contact" className="bg-neutral-950 text-white">
      <div className="container mx-auto grid gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl">What Guests Say</h2>
          <p className="mt-3 text-white/80">
            We are honored by the kind words of our guests.
          </p>
          <div className="mt-8 grid gap-4">
            {reviews.map((r, idx) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium">{r.name}</div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} size={16} />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-white/80">“{r.text}”</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif text-3xl md:text-4xl">Contact & Hours</h2>
          <p className="mt-3 text-white/80">
            Reach out for private events, special requests, or general inquiries.
          </p>
          <div className="mt-6 space-y-3 text-white/80">
            <div className="flex items-center gap-3"><MapPin size={18}/> 128 Crescent Ave, Suite 3, New York, NY</div>
            <div className="flex items-center gap-3"><Phone size={18}/> (212) 555-0199</div>
            <div className="flex items-center gap-3"><Mail size={18}/> reservations@etoile.fine</div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-white/70">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="font-medium text-white">Dinner</div>
              <div>Tue–Sun: 5:30pm – 10:30pm</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="font-medium text-white">Bar</div>
              <div>Tue–Sun: 5:00pm – Late</div>
            </div>
          </div>

          <div className="mt-8 h-56 w-full overflow-hidden rounded-xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1400&auto=format&fit=crop"
              alt="Map placeholder"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
