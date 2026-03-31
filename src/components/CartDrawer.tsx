import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBag, Minus, Plus, Trash2, ExternalLink, Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, isLoading, isSyncing, updateQuantity, removeItem, getCheckoutUrl, syncCart } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + parseFloat(item.price.amount) * item.quantity, 0);

  useEffect(() => {
    if (isOpen) syncCart();
  }, [isOpen, syncCart]);

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
      setIsOpen(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="relative text-foreground transition-colors hover:text-primary">
          <ShoppingBag className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="flex h-full w-full flex-col border-border bg-background sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-heading tracking-wider text-foreground">
            CARRITO ({totalItems})
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-1 flex-col pt-4 min-h-0">
          {items.length === 0 ? (
            <div className="flex flex-1 items-center justify-center">
              <div className="text-center">
                <ShoppingBag className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <p className="font-body text-muted-foreground">Tu carrito está vacío</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 space-y-4 overflow-y-auto pr-2 min-h-0">
                {items.map((item) => (
                  <div key={item.variantId} className="flex gap-4 rounded-sm border border-border p-3">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-secondary">
                      {item.product.node.images?.edges?.[0]?.node && (
                        <img
                          src={item.product.node.images.edges[0].node.url}
                          alt={item.product.node.title}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col justify-between min-w-0">
                      <div>
                        <h4 className="truncate font-heading text-sm font-semibold text-foreground">
                          {item.product.node.title}
                        </h4>
                        <p className="font-body text-xs text-muted-foreground">
                          {item.selectedOptions.map((o) => o.value).join(" · ")}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-sm border border-border text-foreground hover:border-primary"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center font-body text-sm text-foreground">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-sm border border-border text-foreground hover:border-primary"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-heading text-sm font-bold text-primary">
                            {(parseFloat(item.price.amount) * item.quantity).toFixed(2)}€
                          </span>
                          <button onClick={() => removeItem(item.variantId)} className="text-muted-foreground hover:text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex-shrink-0 space-y-4 border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-lg tracking-wider text-foreground">TOTAL</span>
                  <span className="text-xl font-bold text-primary">{totalPrice.toFixed(2)}€</span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={isLoading || isSyncing}
                  className="glow-amber flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 font-heading text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:scale-[1.02] disabled:opacity-50"
                >
                  {isLoading || isSyncing ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      <ExternalLink className="h-4 w-4" />
                      FINALIZAR COMPRA
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
