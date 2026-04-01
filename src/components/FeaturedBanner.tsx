import { motion } from "framer-motion";

const FeaturedBanner = () => {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0">
        <img
          src="https://www.summit-wear.com/cdn/shop/files/Gemini_Generated_Image_2i3p9w2i3p9w2i3p.png?v=1770571354&width=2400"
          alt="Nueva colección Summit Wear"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-lg"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1 font-body text-[10px] tracking-[0.4em] text-primary">
            NUEVA TEMPORADA
          </span>
          <h2 className="mb-6 text-4xl font-bold leading-[0.95] text-foreground md:text-6xl lg:text-7xl">
            NUEVA{" "}
            <span className="text-gradient">COLECCIÓN</span>
          </h2>
          <p className="mb-10 font-body text-sm font-light leading-[1.8] text-muted-foreground">
            Descubre las nuevas piezas diseñadas para dominar el tatami y la calle.
            Materiales premium, cortes técnicos y el estilo Summit que te define.
          </p>
          <a
            href="https://www.summit-wear.com/collections"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-amber inline-block rounded-sm bg-primary px-10 py-4 font-heading text-sm font-semibold tracking-[0.2em] text-primary-foreground transition-all hover:scale-105"
          >
            DESCUBRIR AHORA
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
