<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Kachingga: lo que no se puede romper

Reglas de este proyecto. Valen para Lovable, para Claude y para quien edite. Contexto: la app es [kachingga/kachingga](https://github.com/kachingga/kachingga) y está en `app.kachingga.com`; esto es solo la landing.

- **`public/sw.js` se queda tal cual, y nada lo registra.** `kachingga.com` antes era la app: este archivo reemplaza el service worker viejo en los navegadores que la abrieron. Si `/sw.js` deja de responder como JavaScript (por ejemplo, si devuelve una página), el service worker viejo no se va nunca.
- **El script inline del `head()` de `src/routes/__root.tsx` que borra del `localStorage` las claves `sb-*` y `kachingga-*` se queda.** La landing no guarda nada con esas claves.
- **El nombre es exactamente "Kachingga"**: en el título de la página principal (en el HTML que manda el servidor), en el encabezado y en `og:title`. Google lo compara con el de la pantalla de login.
- **El botón principal es "Entrar" y lleva a `https://app.kachingga.com`.** Nada de "Creá tu cuenta" ni "Registrate". UptimeRobot avisa si ese link desaparece de la página.
- **Sin pedidos a otros dominios:** nada de analítica (aparte de la de Lovable), cookies, píxeles, ni tipografías o scripts de terceros. Las tipografías van con `@fontsource`. Si algo nuevo manda datos a otro lado, la política de privacidad lo tiene que decir.
- **`src/content/privacidad.md` es la política de privacidad de la app** y dice lo que la app guarda de verdad. Se cambia solo cuando cambia la app o el hosting, nunca para resumirla o reescribirla.
- **Es estática, sin backend:** nada de Lovable Cloud, Supabase, login ni base de datos.
- **Textos en español de Argentina**, con voseo.
- **Seguridad:** una vulnerabilidad se avisa por Security → Report a vulnerability o a `hola@kachingga.com`, nunca en un issue público.
