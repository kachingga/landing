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

export function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto w-[240px] rounded-[2.6rem] bg-foreground p-2.5 shadow-2xl sm:w-[270px]">
      <img src={src} alt={alt} width={887} height={1920} loading="lazy" className="w-full rounded-[2.1rem]" />
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
