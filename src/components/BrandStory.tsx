import { motion } from "framer-motion";

const BrandStory = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="section-divider mx-auto mb-24 w-full max-w-xl" />

      <div className="container mx-auto grid gap-12 px-6 md:grid-cols-2 md:gap-16 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <span className="mb-3 font-body text-xs tracking-[0.3em] text-primary">
            NUESTRA HISTORIA
          </span>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            NACIDOS PARA <span className="text-gradient">COMPETIR</span>
          </h2>
          <p className="mb-4 font-body text-base font-light leading-relaxed text-muted-foreground">
            Summit nació en el tatami. Somos fighters, atletas y amantes del deporte
            que entendemos lo que significa darlo todo en cada entreno.
          </p>
          <p className="font-body text-base font-light leading-relaxed text-muted-foreground">
            Cada prenda está diseñada para resistir el ritmo más intenso sin perder
            estilo. Del gimnasio a la calle, Summit te acompaña.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-sm"
        >
          <img
            src="https://www.summit-wear.com/cdn/shop/files/IMG_2339.jpg?v=1770571693&width=1200"
            alt="Summit Wear - Entrena. Supera. Repite."
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
