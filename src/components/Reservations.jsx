import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Clock } from "lucide-react";

export default function Reservations() {
  const [form, setForm] = useState({ name: "", email: "", date: "", time: "", guests: 2, notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reservations" className="bg-neutral-950 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Reservations</h2>
          <p className="mt-3 text-white/80">
            Reserve your table for an unforgettable evening. We look forward to hosting you.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 grid max-w-3xl gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-white/80">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 outline-none ring-amber-500/30 focus:ring"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/80">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 outline-none ring-amber-500/30 focus:ring"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-1 flex items-center gap-2 text-sm text-white/80"><Calendar size={16}/> Date</label>
              <input
                type="date"
                name="date"
                required
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 outline-none ring-amber-500/30 focus:ring"
              />
            </div>
            <div>
              <label className="mb-1 flex items-center gap-2 text-sm text-white/80"><Clock size={16}/> Time</label>
              <input
                type="time"
                name="time"
                required
                value={form.time}
                onChange={handleChange}
                className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 outline-none ring-amber-500/30 focus:ring"
              />
            </div>
            <div>
              <label className="mb-1 flex items-center gap-2 text-sm text-white/80"><Users size={16}/> Guests</label>
              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 outline-none ring-amber-500/30 focus:ring"
              >
                {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm text-white/80">Notes (optional)</label>
            <textarea
              name="notes"
              rows={4}
              value={form.notes}
              onChange={handleChange}
              className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 outline-none ring-amber-500/30 focus:ring"
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-white/60">By reserving, you agree to our 24-hour cancellation policy.</p>
            <button
              type="submit"
              className="rounded-md bg-amber-500 px-6 py-2.5 font-medium text-neutral-900 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
            >
              Reserve Now
            </button>
          </div>

          {submitted && (
            <div className="rounded-md border border-emerald-500/30 bg-emerald-500/10 p-3 text-emerald-300">
              Thank you, {form.name.split(" ")[0] || "guest"}! We'll confirm your reservation via email shortly.
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
