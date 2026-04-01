import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://www.summit-wear.com/cdn/shop/files/IMG_3357.jpg?v=1774863577&width=2400"
          alt="Summit Wear - Believe in yourself"
          className="h-full w-full object-cover scale-105"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/30" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/5 px-5 py-1.5 font-body text-[10px] tracking-[0.4em] text-primary backdrop-blur-sm">
            ENTRENA · SUPERA · REPITE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-6 max-w-4xl text-5xl font-bold leading-[0.9] text-foreground md:text-7xl lg:text-9xl"
        >
          BELIEVE IN{" "}
          <span className="text-gradient">YOURSELF</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10 max-w-md font-body text-sm font-light leading-relaxed text-muted-foreground md:text-base"
        >
          Ropa técnica y streetwear diseñada para fighters que no se rinden.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#productos"
            className="glow-amber group rounded-sm bg-primary px-10 py-3.5 font-heading text-sm font-semibold tracking-[0.2em] text-primary-foreground transition-all hover:scale-105"
          >
            COMPRAR AHORA
          </a>
          <a
            href="#colecciones"
            className="rounded-sm border border-foreground/20 px-10 py-3.5 font-heading text-sm font-semibold tracking-[0.2em] text-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            EXPLORAR
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
