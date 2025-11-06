import { motion } from "framer-motion";

const menuData = [
  {
    category: "Appetizers",
    items: [
      {
        name: "Oysters à la Mignonette",
        desc: "East Coast oysters, shallot vinegar, lemon",
        price: 24,
        img:
          "https://images.unsplash.com/photo-1528831721552-1d6a2d5b46f4?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Burrata & Heirloom Tomatoes",
        desc: "Basil oil, aged balsamic, sea salt",
        price: 18,
        img:
          "https://images.unsplash.com/photo-1566843972140-33a9e20f7d16?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Steak Tartare",
        desc: "Hand-cut beef, cornichons, capers, quail egg",
        price: 22,
        img:
          "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    category: "Mains",
    items: [
      {
        name: "Pan-Seared Scallops",
        desc: "Cauliflower purée, brown butter, hazelnut",
        price: 38,
        img:
          "https://images.unsplash.com/photo-1546549039-49dcd4f7cf8a?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Filet Mignon",
        desc: "Truffle pomme purée, bordelaise, charred leek",
        price: 46,
        img:
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Wild Mushroom Risotto (v)",
        desc: "Aged parmesan, thyme, white wine",
        price: 32,
        img:
          "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Chocolate Fondant",
        desc: "Molten center, vanilla bean ice cream",
        price: 14,
        img:
          "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Lemon Tart",
        desc: "Toasted meringue, berries",
        price: 12,
        img:
          "https://images.unsplash.com/photo-1514910007657-3098f5bdf5b8?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Cheese Selection",
        desc: "Artisan cheeses, condiments",
        price: 18,
        img:
          "https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    category: "Beverages",
    items: [
      {
        name: "Sommelier Wine Pairing",
        desc: "Curated flight to accompany your meal",
        price: 38,
        img:
          "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Classic Negroni",
        desc: "Gin, Campari, sweet vermouth",
        price: 16,
        img:
          "https://images.unsplash.com/photo-1546177461-79dfec0b0928?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Sparkling Water",
        desc: "San Pellegrino 750ml",
        price: 8,
        img:
          "https://images.unsplash.com/photo-1588861891920-9a3cdc02174d?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
];

function MenuCard({ item }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:bg-white/10 transition">
      <div className="flex items-start gap-4">
        <img
          src={item.img}
          alt={item.name}
          className="h-24 w-24 rounded-md object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-white">{item.name}</h4>
            <span className="font-semibold text-amber-400">${item.price}</span>
          </div>
          <p className="mt-1 text-sm text-white/70">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="bg-neutral-950 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Our Menu</h2>
          <p className="mt-3 text-white/80">
            A curated selection that changes with the seasons. All prices in USD.
          </p>
        </div>

        <div className="grid gap-10">
          {menuData.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <h3 className="mb-4 font-serif text-2xl text-amber-400">
                {section.category}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
