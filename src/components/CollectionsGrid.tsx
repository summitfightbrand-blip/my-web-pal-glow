import { motion } from "framer-motion";

const collections = [
  {
    name: "Street Wear",
    image: "https://www.summit-wear.com/cdn/shop/files/SUDADERA_WEB.png?v=1770303347&width=800",
    url: "https://www.summit-wear.com/collections/street-wear",
  },
  {
    name: "Kids",
    image: "https://www.summit-wear.com/cdn/shop/files/IMG_2866.jpg?v=1770296037&width=800",
    url: "https://www.summit-wear.com/collections/kids",
  },
  {
    name: "Kimonos",
    image: "https://www.summit-wear.com/cdn/shop/files/Gemini_Generated_Image_2gqfwg2gqfwg2gqf.png?v=1770323440&width=800",
    url: "https://www.summit-wear.com/collections/bjj-gi",
  },
  {
    name: "No Gi",
    image: "https://www.summit-wear.com/cdn/shop/files/IMG_2339.jpg?v=1770571693&width=800",
    url: "https://www.summit-wear.com/collections/no-gi",
  },
];

const CollectionsGrid = () => {
  return (
    <section id="colecciones" className="py-28 md:py-36 noise-bg">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block font-body text-[10px] tracking-[0.4em] text-primary">
            EXPLORA
          </span>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            COLECCIONES
          </h2>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((col, i) => (
            <motion.a
              key={col.name}
              href={col.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                src={col.image}
                alt={col.name}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              
              {/* Amber accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold tracking-wider text-foreground transition-colors group-hover:text-primary md:text-2xl">
                  {col.name}
                </h3>
                <span className="mt-2 inline-flex items-center gap-1 font-body text-[10px] tracking-[0.3em] text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary">
                  VER COLECCIÓN →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsGrid;
