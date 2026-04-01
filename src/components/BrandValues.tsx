import { motion } from "framer-motion";
import { Shield, Flame, Users, Award } from "lucide-react";

const values = [
  {
    icon: Flame,
    title: "INTENSIDAD",
    desc: "Cada prenda diseñada para aguantar el entreno más duro.",
  },
  {
    icon: Shield,
    title: "RESISTENCIA",
    desc: "Materiales premium que no se rinden, igual que tú.",
  },
  {
    icon: Users,
    title: "COMUNIDAD",
    desc: "Parte de una familia global de fighters y atletas.",
  },
  {
    icon: Award,
    title: "EXCELENCIA",
    desc: "Del tatami a la calle, siempre con el máximo nivel.",
  },
];

const BrandValues = () => {
  return (
    <section className="bg-secondary py-28 md:py-36 noise-bg">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block font-body text-[10px] tracking-[0.4em] text-primary">
            POR QUÉ SUMMIT
          </span>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            NUESTROS <span className="text-gradient">VALORES</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-sm border border-border bg-card p-8 text-center transition-all duration-500 hover:border-primary/30"
            >
              <div className="card-shine absolute inset-0" />
              <div className="relative z-10">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 text-primary transition-all duration-300 group-hover:border-primary/50 group-hover:glow-amber-sm">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-base font-bold tracking-[0.1em] text-foreground">{v.title}</h3>
                <p className="font-body text-xs font-light leading-relaxed text-muted-foreground">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;
