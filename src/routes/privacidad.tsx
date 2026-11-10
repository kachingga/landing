import { createFileRoute } from "@tanstack/react-router";
import Markdown from "react-markdown";
import { Page } from "@/components/site";
import texto from "@/content/privacidad.md?raw";

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
        <div className="legal">
          <Markdown>{texto}</Markdown>
        </div>
      </article>
    </Page>
  );
}
