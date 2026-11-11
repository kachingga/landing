# Kachingga — landing

La página pública de **[Kachingga](https://kachingga.com)**, la app para dividir gastos en grupo: qué es, cómo funciona (con capturas de la app), la **[política de privacidad](https://kachingga.com/privacidad)** y los **[términos de uso](https://kachingga.com/terminos)**.

- **App:** [app.kachingga.com](https://app.kachingga.com). Su código está en [kachingga/kachingga](https://github.com/kachingga/kachingga).
- **Contacto:** [hola@kachingga.com](mailto:hola@kachingga.com).

## Cómo se edita

- Con **[Lovable](https://lovable.dev/projects/d61b97f9-a626-50c2-bcad-a25d591c7178)** (TanStack Start + Tailwind), conectado a este repo: cada cambio que hace Lovable se commitea directo a `main`, y lo que se pushea a `main` vuelve a Lovable.
- **Publicar:** en Lovable, **Publish → Update**. Los cambios no salen solos.
- **No reescribir el historial** (nada de force push ni rebase de lo que ya está pusheado): Lovable pierde el historial del proyecto.
- En local: `bun install` y `bun run dev`.

## Lo que no se puede romper

Está en [`AGENTS.md`](AGENTS.md) → "Kachingga" (lo leen Lovable y Claude): el `public/sw.js`, el script que limpia el `localStorage`, el nombre exacto "Kachingga", el botón "Entrar", nada de pedidos a otros dominios, los headers de seguridad de `src/server.ts`, y las políticas de privacidad y de seguridad y los términos tal cual.

## Seguridad

Si encontrás una vulnerabilidad, no abras un issue: avisanos por **Security → Report a vulnerability** o a [hola@kachingga.com](mailto:hola@kachingga.com). Qué cubre y cómo la manejamos: [kachingga.com/seguridad](https://kachingga.com/seguridad) (`src/content/seguridad.md`).

## Licencia

[AGPL-3.0](LICENSE): cualquiera puede usar, estudiar y modificar el código, y quien ofrezca una versión modificada por internet tiene que publicar la suya con la misma licencia. La licencia es para el código: el nombre y el logo de Kachingga no se pueden usar para presentar otra app como si fuera la nuestra.
