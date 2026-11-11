import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { BrowserFrame, EntrarButton, Page, PhoneFrame } from "@/components/site";
import grupoL from "@/assets/celu-2-grupo-claro.webp.asset.json";
import grupoD from "@/assets/celu-2-grupo-oscuro.webp.asset.json";
const grupo = { light: grupoL.url, dark: grupoD.url };
import gastoL from "@/assets/celu-5-gasto-claro.webp.asset.json";
import gastoD from "@/assets/celu-5-gasto-oscuro.webp.asset.json";
const gasto = { light: gastoL.url, dark: gastoD.url };
import dividirL from "@/assets/celu-6-dividir-claro.webp.asset.json";
import dividirD from "@/assets/celu-6-dividir-oscuro.webp.asset.json";
const dividir = { light: dividirL.url, dark: dividirD.url };
import grupoCompuL from "@/assets/compu-2-grupo-claro.webp.asset.json";
import grupoCompuD from "@/assets/compu-2-grupo-oscuro.webp.asset.json";
const grupoCompu = { light: grupoCompuL.url, dark: grupoCompuD.url };
import totalesL from "@/assets/compu-4-totales-claro.webp.asset.json";
import totalesD from "@/assets/compu-4-totales-oscuro.webp.asset.json";
const totales = { light: totalesL.url, dark: totalesD.url };
import saldarL from "@/assets/celu-3-saldar-claro.webp.asset.json";
import saldarD from "@/assets/celu-3-saldar-oscuro.webp.asset.json";
const saldar = { light: saldarL.url, dark: saldarD.url };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kachingga" },
      { name: "description", content: "Dividí gastos con tu grupo" },
      { property: "og:title", content: "Kachingga" },
      { property: "og:description", content: "Dividí gastos con tu grupo" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kachingga.com/" },
      { property: "og:image", content: "https://kachingga.com/og-kachingga.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://kachingga.com/og-kachingga.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kachingga.com/" }],
  }),
  component: Index,
});

function Feature({ n, title, children, image, reverse }: { n: string; title: string; children: ReactNode; image?: ReactNode; reverse?: boolean }) {
  return (
    <section className={`border-t border-border ${reverse ? "bg-secondary/60" : ""}`}>
      <div className={`mx-auto flex max-w-6xl flex-col gap-10 px-5 py-16 md:flex-row md:items-center md:gap-16 md:py-24 ${reverse ? "md:flex-row-reverse" : ""}`}>
        <div className="md:w-1/2">
          <span className="font-display text-sm font-bold tracking-widest text-accent">{n}</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-primary sm:text-4xl">{title}</h2>
          <div className="mt-4 space-y-3 text-lg leading-relaxed text-muted-foreground">{children}</div>
        </div>
        {image && <div className="md:w-1/2">{image}</div>}
      </div>
    </section>
  );
}

function Index() {
  return (
    <Page>
      <section className="relative overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-peach" aria-hidden />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-5 py-16 md:flex-row md:items-center md:py-24">
          <div className="md:w-1/2">
            <p className="font-display font-bold text-accent">Cuentas claras. Amistades intactas.</p>
            <h1 className="mt-3 font-display text-5xl font-extrabold leading-[1.05] text-primary sm:text-6xl">
              Dividí gastos con tu grupo
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Cargá lo que gastó cada uno, mirá quién le debe a quién y saldá con un alias. En el celu o en la compu.
            </p>
            <EntrarButton className="mt-8 px-8 py-3.5 text-lg" />
          </div>
          <div className="md:w-3/5">
            <div className="md:hidden">
              <PhoneFrame src={grupo} alt="Pantalla de un grupo en Kachingga" />
            </div>
            <div className="hidden md:block">
              <BrowserFrame src={grupoCompu} alt="Pantalla de un grupo en Kachingga" />
            </div>
          </div>
        </div>
      </section>

      <Feature n="01" title="Cargá los gastos" reverse image={<PhoneFrame src={gasto} alt="Cargar un gasto" />}>
        <p>Anotá quién pagó y en qué moneda: pesos, dólares y otras, con el dólar blue o el oficial.</p>
        <p>La categoría se sugiere sola.</p>
      </Feature>
      <Feature n="02" title="Dividí como quieras" image={<PhoneFrame src={dividir} alt="Dividir un gasto" />}>
        <p>En partes iguales, por monto o por porcentaje.</p>
      </Feature>
      <Feature n="03" title="Mirá los saldos" reverse image={<PhoneFrame src={grupo} alt="Saldos del grupo" />}>
        <p>Quién le debe a quién, separado por moneda.</p>
        <p>Y la menor cantidad de transferencias para quedar a mano.</p>
      </Feature>
      <Feature n="04" title="Saldá con el alias" image={<PhoneFrame src={saldar} alt="Saldar una deuda" />}>
        <p>Copiás el alias y el monto, transferís desde tu banco o Mercado Pago y lo marcás como pagado.</p>
        <p>Sin comisiones: la plata no pasa por la app.</p>
      </Feature>
      <Feature n="05" title="Totales y export" reverse image={<BrowserFrame src={totales} alt="Totales por categoría y por mes" />}>
        <p>Cuánto gastaron por categoría o por mes, y exportá todo a CSV o JSON.</p>
      </Feature>
    </Page>
  );
}
