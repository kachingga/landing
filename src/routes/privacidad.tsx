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
      { property: "og:url", content: "https://kachingga.com/privacidad" },
      { property: "og:image", content: "https://kachingga.com/og-kachingga.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://kachingga.com/og-kachingga.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kachingga.com/privacidad" }],
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
