import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import CartDrawer from "@/components/CartDrawer";

const links = [
  { label: "Inicio", to: "/" },
  { label: "Colecciones", to: "/#colecciones" },
  { label: "Productos", to: "/#productos" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top announcement bar */}
      <div className="fixed left-0 right-0 top-0 z-[60] bg-primary px-4 py-1.5 text-center">
        <p className="font-body text-xs font-medium tracking-wider text-primary-foreground">
          ENVÍOS GRATIS A PARTIR DE 130€ · ENVÍOS EN 24/48H
        </p>
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-0 right-0 top-[28px] z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg shadow-background/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-16">
          <Link to="/" className="group font-heading text-2xl font-bold tracking-[0.15em] text-foreground">
            <span className="text-gradient">S</span>UMMIT
            <span className="ml-1 font-body text-[9px] font-light tracking-[0.4em] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
              WEAR
            </span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="relative font-heading text-[11px] tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </Link>
            ))}
            <CartDrawer />
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <CartDrawer />
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-foreground">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-border bg-background/98 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-1 px-6 py-4">
                {links.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-sm px-3 py-3 font-heading text-sm tracking-[0.15em] text-foreground transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
