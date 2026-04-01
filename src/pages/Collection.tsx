import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import SiteFooter from "@/components/SiteFooter";

const COLLECTIONS: Record<string, { title: string; subtitle: string; query: string; image: string }> = {
  "street-wear": {
    title: "STREET WEAR",
    subtitle: "Del tatami a la calle",
    query: "product_type:streetwear OR tag:street-wear OR tag:streetwear",
    image: "https://www.summit-wear.com/cdn/shop/files/SUDADERA_WEB.png?v=1770303347&width=2400",
  },
  kids: {
    title: "KIDS",
    subtitle: "Pequeños fighters, grandes sueños",
    query: "product_type:kids OR tag:kids",
    image: "https://www.summit-wear.com/cdn/shop/files/IMG_2866.jpg?v=1770296037&width=2400",
  },
  kimonos: {
    title: "KIMONOS",
    subtitle: "Domina el tatami con estilo",
    query: "product_type:gi OR tag:kimono OR tag:bjj-gi OR tag:gi",
    image: "https://www.summit-wear.com/cdn/shop/files/Gemini_Generated_Image_2gqfwg2gqfwg2gqf.png?v=1770323440&width=2400",
  },
  "no-gi": {
    title: "NO GI",
    subtitle: "Sin kimono, sin límites",
    query: "product_type:no-gi OR tag:no-gi OR tag:nogi",
    image: "https://www.summit-wear.com/cdn/shop/files/IMG_2339.jpg?v=1770571693&width=2400",
  },
};

const Collection = () => {
  const { slug } = useParams<{ slug: string }>();
  const collection = slug ? COLLECTIONS[slug] : null;

  if (!collection) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <p className="mb-4 font-heading text-2xl text-foreground">Colección no encontrada</p>
        <Link to="/" className="font-body text-sm text-primary hover:underline">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Collection Hero */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <img
          src={collection.image}
          alt={collection.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="mb-3 inline-block font-body text-[10px] tracking-[0.4em] text-primary">
              COLECCIÓN
            </span>
            <h1 className="text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
              {collection.title}
            </h1>
            <p className="mt-3 font-body text-sm text-muted-foreground">{collection.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 pt-8 lg:px-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          VOLVER AL INICIO
        </Link>
      </div>

      <ProductGrid query={collection.query} />
      <SiteFooter />
    </div>
  );
};

export default Collection;
