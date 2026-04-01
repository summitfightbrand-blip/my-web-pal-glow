import { Link } from "react-router-dom";
import { Instagram, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Street Wear", to: "/collection/street-wear" },
  { label: "Kids", to: "/collection/kids" },
  { label: "Kimonos", to: "/collection/kimonos" },
  { label: "No Gi", to: "/collection/no-gi" },
];

const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-card noise-bg">
      <div className="container mx-auto px-6 py-20 lg:px-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="mb-2 inline-block text-3xl font-bold text-foreground">
              <span className="text-gradient">S</span>UMMIT
            </Link>
            <p className="mb-6 max-w-xs font-body text-sm font-light leading-relaxed text-muted-foreground">
              Entrena. Supera. Repite.
              <br />
              Ropa técnica para fighters que no se rinden.
            </p>
            <a
              href="https://www.instagram.com/summitwear_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-body text-xs text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
              @summitwear_
            </a>
          </div>

          <div>
            <h4 className="mb-5 font-heading text-[11px] tracking-[0.3em] text-foreground">
              COLECCIONES
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-1 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-heading text-[11px] tracking-[0.3em] text-foreground">
              INFORMACIÓN
            </h4>
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              <li>Envíos en 24/48h</li>
              <li>Gratis a partir de 130€</li>
              <li>Devoluciones 14 días</li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-16 w-full" />

        <div className="mt-8 flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="font-body text-[11px] tracking-wider text-muted-foreground">
            © {new Date().getFullYear()} SUMMIT WEAR. Todos los derechos reservados.
          </p>
          <p className="font-body text-[11px] tracking-wider text-muted-foreground">
            Diseñado para fighters.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
