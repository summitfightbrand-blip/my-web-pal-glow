import { motion } from "framer-motion";

const FeaturedBanner = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <img
          src="https://www.summit-wear.com/cdn/shop/files/Gemini_Generated_Image_2i3p9w2i3p9w2i3p.png?v=1770571354&width=2400"
          alt="Nueva colección Summit Wear"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-lg"
        >
          <span className="mb-3 inline-block font-body text-xs tracking-[0.3em] text-primary">
            NUEVA TEMPORADA
          </span>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
            NUEVA <span className="text-gradient">COLECCIÓN</span>
          </h2>
          <p className="mb-8 font-body text-base font-light leading-relaxed text-muted-foreground">
            Descubre las nuevas piezas diseñadas para dominar el tatami y la calle. 
            Materiales premium, cortes técnicos y el estilo Summit que te define.
          </p>
          <a
            href="https://www.summit-wear.com/collections"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-amber inline-block rounded-sm bg-primary px-10 py-4 font-heading text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:scale-105"
          >
            DESCUBRIR AHORA
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
