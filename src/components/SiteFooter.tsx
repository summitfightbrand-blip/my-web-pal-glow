import { Instagram } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-foreground">SUMMIT</h3>
            <p className="font-body text-sm font-light text-muted-foreground">
              Entrena. Supera. Repite.
              <br />
              Ropa técnica para fighters.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm tracking-wider text-foreground">
              TIENDA
            </h4>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              {["Street Wear", "Kids", "Kimonos", "No Gi"].map((item) => (
                <li key={item}>
                  <a
                    href={`https://www.summit-wear.com/collections/${item.toLowerCase().replace(" ", "-")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm tracking-wider text-foreground">
              SÍGUENOS
            </h4>
            <a
              href="https://www.instagram.com/summitwear_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
              @summitwear_
            </a>
          </div>
        </div>

        <div className="section-divider mt-12 w-full" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Summit Wear. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Envíos gratis a partir de 130€
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
