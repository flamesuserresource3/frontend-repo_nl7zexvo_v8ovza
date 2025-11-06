import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-neutral-950 text-white">
      <div className="container mx-auto grid gap-10 px-6 py-20 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="font-serif text-3xl md:text-4xl">About Étoile</h2>
          <p className="text-white/80">
            Nestled in the heart of the city, Étoile celebrates contemporary
            cuisine with a devotion to seasonal produce, sustainable sourcing,
            and refined techniques. Our chefs craft each dish with artistry and
            precision, while our sommeliers curate pairings that elevate every
            bite.
          </p>
          <p className="text-white/80">
            Whether it's an intimate celebration or a business dinner, our
            dining room offers warm hospitality and understated elegance.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
            alt="Chef plating a dish"
            className="h-56 w-full rounded-lg object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=1200&auto=format&fit=crop"
            alt="Elegant dining room"
            className="h-56 w-full rounded-lg object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=1200&auto=format&fit=crop"
            alt="Wine pairing"
            className="h-56 w-full rounded-lg object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1526312426976-593c128eea49?q=80&w=1200&auto=format&fit=crop"
            alt="Dessert"
            className="h-56 w-full rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
