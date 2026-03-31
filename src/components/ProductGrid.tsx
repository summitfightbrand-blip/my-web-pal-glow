import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Loader2, ShoppingBag } from "lucide-react";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const ProductGrid = ({ query, title }: { query?: string; title?: string }) => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 50, query: query || null });
        setProducts(data?.data?.products?.edges || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [query]);

  const handleQuickAdd = async (e: React.MouseEvent, product: ShopifyProduct) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = product.node.variants.edges[0]?.node;
    if (!variant || !variant.availableForSale) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Añadido al carrito", { description: product.node.title });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="py-24 text-center">
        <ShoppingBag className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
        <p className="font-heading text-xl text-muted-foreground">No se encontraron productos</p>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-16">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">{title}</h2>
          </motion.div>
        )}

        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => {
            const image = product.node.images.edges[0]?.node;
            const price = product.node.priceRange.minVariantPrice;
            return (
              <motion.div
                key={product.node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={`/product/${product.node.handle}`}
                  className="group block overflow-hidden rounded-sm"
                >
                  <div className="relative aspect-square overflow-hidden bg-secondary">
                    {image && (
                      <img
                        src={image.url}
                        alt={image.altText || product.node.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <button
                      onClick={(e) => handleQuickAdd(e, product)}
                      disabled={isLoading}
                      className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all group-hover:opacity-100 hover:scale-110 disabled:opacity-50"
                    >
                      <ShoppingBag className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    <h3 className="font-heading text-sm font-semibold tracking-wider text-foreground transition-colors group-hover:text-primary">
                      {product.node.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {parseFloat(price.amount).toFixed(2)} {price.currencyCode}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
