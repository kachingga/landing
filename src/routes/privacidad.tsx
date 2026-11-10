import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Privacidad · Kachingga" },
      { name: "description", content: "Política de privacidad de Kachingga" },
      { property: "og:title", content: "Privacidad · Kachingga" },
      { property: "og:description", content: "Política de privacidad de Kachingga" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <Page>
      <article className="mx-auto max-w-2xl px-5 py-16">
        <h1 className="font-display text-4xl font-extrabold text-primary">Privacidad</h1>
        {/* TODO: reemplazar por el texto de privacidad que mande el usuario, tal cual. */}
        <p className="mt-6 text-lg text-muted-foreground">
          Estamos preparando este texto. Si tenés dudas, escribinos a{" "}
          <a href="mailto:hola@kachingga.com" className="text-primary underline">hola@kachingga.com</a>.
        </p>
      </article>
    </Page>
  );
}
