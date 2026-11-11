import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/logo.svg";

export const APP_URL = "https://app.kachingga.com";

export function EntrarButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_URL}
      className={`inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 ${className}`}
    >
      Entrar
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="" className="h-9 w-9" />
          <span className="font-display text-xl font-extrabold text-primary">Kachingga</span>
        </Link>
        <EntrarButton className="px-5 py-2 text-sm" />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <span>Kachingga · Cuentas claras. Amistades intactas.</span>
        <div className="flex gap-5">
          <Link to="/privacidad" className="hover:text-primary">Privacidad</Link>
          <a href="mailto:hola@kachingga.com" className="hover:text-primary">hola@kachingga.com</a>
        </div>
      </div>
    </footer>
  );
}

type Shot = { light: string; dark: string };

function Screenshot({ src, alt, w, h, className }: { src: Shot; alt: string; w: number; h: number; className: string }) {
  return (
    <picture>
      <source media="(prefers-color-scheme: dark)" srcSet={src.dark} />
      <img src={src.light} alt={alt} width={w} height={h} loading="lazy" className={className} />
    </picture>
  );
}

export function PhoneFrame({ src, alt }: { src: Shot; alt: string }) {
  return (
    <div className="mx-auto w-[240px] rounded-[2.6rem] bg-foreground p-2.5 dark:bg-card dark:ring-1 dark:ring-border shadow-2xl sm:w-[270px]">
      <Screenshot src={src} alt={alt} w={887} h={1920} className="w-full rounded-[2.1rem]" />
    </div>
  );
}

export function BrowserFrame({ src, alt }: { src: Shot; alt: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-border bg-muted px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="h-2.5 w-2.5 rounded-full bg-peach" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
        <span className="ml-3 flex-1 truncate rounded-md bg-background px-3 py-0.5 text-xs text-muted-foreground">app.kachingga.com</span>
      </div>
      <Screenshot src={src} alt={alt} w={1920} h={1200} className="block w-full" />
    </div>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
