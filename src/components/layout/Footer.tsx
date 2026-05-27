import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-sm font-black tracking-[-0.04em] text-white">
  FTE
</div>
              <div>
                <p className="font-black uppercase">{siteConfig.name}</p>
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-red-400">
                  {siteConfig.slogan}
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-300">
              Inglés práctico para aprender desde cero, mejorar conversación y
              prepararte para oportunidades reales en Cancún.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-wider">
              Navegación
            </h3>
            <div className="grid gap-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-wider">
              Contacto
            </h3>

            <div className="grid gap-3 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                {siteConfig.location}
              </p>

              <Link
                href={siteConfig.facebookUrl}
                target="_blank"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <ExternalLink size={16} />
                Facebook
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Fast Track English. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}