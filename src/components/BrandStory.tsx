import { motion } from "framer-motion";

const BrandStory = () => {
  return (
    <section className="relative py-28 md:py-36 noise-bg">
      <div className="section-divider mx-auto mb-28 w-full max-w-xs" />

      <div className="container mx-auto grid gap-12 px-6 md:grid-cols-2 md:gap-20 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <span className="mb-4 font-body text-[10px] tracking-[0.4em] text-primary">
            NUESTRA HISTORIA
          </span>
          <h2 className="mb-8 text-4xl font-bold leading-[0.95] text-foreground md:text-5xl lg:text-6xl">
            NACIDOS PARA{" "}
            <span className="text-gradient">COMPETIR</span>
          </h2>
          <div className="space-y-4">
            <p className="font-body text-sm font-light leading-[1.8] text-muted-foreground">
              Summit nació en el tatami. Somos fighters, atletas y amantes del deporte
              que entendemos lo que significa darlo todo en cada entreno.
            </p>
            <p className="font-body text-sm font-light leading-[1.8] text-muted-foreground">
              Cada prenda está diseñada para resistir el ritmo más intenso sin perder
              estilo. Del gimnasio a la calle, Summit te acompaña.
            </p>
          </div>
          <div className="mt-8 flex gap-8">
            {[
              { num: "100%", label: "Premium" },
              { num: "24/48h", label: "Envío" },
              { num: "4+", label: "Colecciones" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl font-bold text-primary">{stat.num}</p>
                <p className="font-body text-[10px] tracking-[0.2em] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-sm"
        >
          <img
            src="https://www.summit-wear.com/cdn/shop/files/IMG_2339.jpg?v=1770571693&width=1200"
            alt="Summit Wear - Entrena. Supera. Repite."
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
