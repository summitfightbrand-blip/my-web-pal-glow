import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://www.summit-wear.com/cdn/shop/files/IMG_3357.jpg?v=1774863577&width=2400"
          alt="Summit Wear - Believe in yourself"
          className="h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-4 inline-block font-body text-sm tracking-[0.3em] text-primary">
            ENTRENA · SUPERA · REPITE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-6 max-w-4xl text-5xl font-bold leading-[0.95] text-foreground md:text-7xl lg:text-8xl"
        >
          BELIEVE IN{" "}
          <span className="text-gradient">YOURSELF</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 max-w-lg font-body text-base font-light text-muted-foreground md:text-lg"
        >
          Ropa técnica y streetwear diseñada para fighters que no se rinden.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4"
        >
          <a
            href="https://www.summit-wear.com/collections"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-amber rounded-sm bg-primary px-8 py-3 font-heading text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:scale-105"
          >
            COMPRAR AHORA
          </a>
          <a
            href="#colecciones"
            className="rounded-sm border border-foreground/30 px-8 py-3 font-heading text-sm font-semibold tracking-wider text-foreground transition-all hover:border-primary hover:text-primary"
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
        <div className="h-10 w-6 rounded-full border-2 border-foreground/30 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-2 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
