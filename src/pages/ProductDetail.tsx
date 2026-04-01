import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, ShoppingBag, Minus, Plus, Check } from "lucide-react";
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle });
        const p = data?.data?.productByHandle;
        setProduct(p);
        if (p?.options) {
          const defaults: Record<string, string> = {};
          p.options.forEach((opt: { name: string; values: string[] }) => {
            defaults[opt.name] = opt.values[0];
          });
          setSelectedOptions(defaults);
        }
      } catch (err) {
        console.error("Failed to fetch product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [handle]);

  const getSelectedVariant = () => {
    if (!product) return null;
    return product.variants.edges.find(
      (v: any) =>
        v.node.selectedOptions.every(
          (opt: { name: string; value: string }) => selectedOptions[opt.name] === opt.value
        )
    )?.node;
  };

  const handleAddToCart = async () => {
    const variant = getSelectedVariant();
    if (!variant) return;
    await addItem({
      product: { node: product },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity,
      selectedOptions: variant.selectedOptions,
    });
    toast.success("Añadido al carrito", { description: `${product.title} x${quantity}` });
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <p className="mb-4 font-heading text-2xl text-foreground">Producto no encontrado</p>
        <Link to="/" className="font-body text-sm text-primary hover:underline">Volver al inicio</Link>
      </div>
    );
  }

  const images = product.images.edges;
  const selectedVariant = getSelectedVariant();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-16">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            VOLVER
          </Link>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square overflow-hidden rounded-sm bg-secondary">
                {images[selectedImage] && (
                  <img
                    src={images[selectedImage].node.url}
                    alt={images[selectedImage].node.altText || product.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                )}
              </div>
              {images.length > 1 && (
                <div className="mt-3 flex gap-2 overflow-x-auto">
                  {images.map((img: any, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-sm border-2 transition-all ${
                        idx === selectedImage ? "border-primary glow-amber-sm" : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      <img src={img.node.url} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <span className="mb-3 font-body text-[10px] tracking-[0.4em] text-primary">SUMMIT WEAR</span>
              <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">{product.title}</h1>
              <p className="mb-8 text-3xl font-bold text-gradient">
                {selectedVariant
                  ? `${parseFloat(selectedVariant.price.amount).toFixed(2)} ${selectedVariant.price.currencyCode}`
                  : `${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)} ${product.priceRange.minVariantPrice.currencyCode}`}
              </p>

              <div className="section-divider mb-8 w-full" />

              <p className="mb-8 font-body text-sm font-light leading-[1.8] text-muted-foreground">
                {product.description}
              </p>

              {/* Options */}
              {product.options
                .filter((opt: { name: string; values: string[] }) => !(opt.name === "Title" && opt.values.length === 1 && opt.values[0] === "Default Title"))
                .map((option: { name: string; values: string[] }) => (
                  <div key={option.name} className="mb-6">
                    <label className="mb-3 block font-heading text-[11px] tracking-[0.2em] text-foreground">
                      {option.name.toUpperCase()}
                      <span className="ml-2 font-body text-muted-foreground">{selectedOptions[option.name]}</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {option.values.map((value) => (
                        <button
                          key={value}
                          onClick={() => setSelectedOptions((prev) => ({ ...prev, [option.name]: value }))}
                          className={`rounded-sm border px-5 py-2.5 font-body text-xs tracking-wider transition-all ${
                            selectedOptions[option.name] === value
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border text-foreground hover:border-primary/50"
                          }`}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

              {/* Quantity */}
              <div className="mb-8">
                <label className="mb-3 block font-heading text-[11px] tracking-[0.2em] text-foreground">
                  CANTIDAD
                </label>
                <div className="inline-flex items-center rounded-sm border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2.5 text-foreground transition-colors hover:text-primary"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-heading text-sm text-foreground">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2.5 text-foreground transition-colors hover:text-primary"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={isLoading || !selectedVariant?.availableForSale}
                className="glow-amber flex w-full items-center justify-center gap-3 rounded-sm bg-primary px-8 py-4 font-heading text-sm font-semibold tracking-[0.2em] text-primary-foreground transition-all hover:scale-[1.02] disabled:opacity-50"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <ShoppingBag className="h-5 w-5" />
                    {selectedVariant?.availableForSale ? "AÑADIR AL CARRITO" : "AGOTADO"}
                  </>
                )}
              </button>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap gap-4">
                {["Envío 24/48h", "Gratis +130€", "Devolución 14 días"].map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 font-body text-[10px] tracking-wider text-muted-foreground">
                    <Check className="h-3 w-3 text-primary" />
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
