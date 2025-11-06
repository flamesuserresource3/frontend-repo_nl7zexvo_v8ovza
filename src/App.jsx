import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import ReviewsContact from "./components/ReviewsContact";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="font-serif text-xl">Étoile</a>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#menu" className="hover:text-white">Menu</a>
            <a href="#reservations" className="hover:text-white">Reservations</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#reservations"
            className="rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-amber-400"
          >
            Book a Table
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Menu />
        <Reservations />
        <ReviewsContact />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950 py-8 text-sm text-white/70">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div>© {new Date().getFullYear()} Étoile. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#menu" className="hover:text-white">Menu</a>
            <a href="#reservations" className="hover:text-white">Reservations</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
