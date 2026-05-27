import Link from "next/link";
import { Menu } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-lg font-black text-white shadow-lg shadow-red-600/25">
              FT
            </div>

            <div className="leading-tight">
              <p className="text-sm font-black uppercase tracking-wide text-slate-950">
                {siteConfig.name}
              </p>
              <p className="text-[10px] font-black uppercase tracking-[0.32em] text-red-600">
                {siteConfig.slogan}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-red-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/contacto" variant="secondary">
              Agendar clase
            </Button>
            <Button href={siteConfig.facebookUrl} target="_blank">
              Facebook
            </Button>
          </div>

          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden">
            <Menu size={22} />
          </button>
        </div>
      </Container>
    </header>
  );
}