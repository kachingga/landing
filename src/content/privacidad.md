# Política de privacidad

*Última actualización: 11 de noviembre de 2026*

Kachingga es una app para dividir gastos en grupo, hecha por un grupo de amigos (no es una empresa). Acá contamos qué datos guarda, para qué, quién los ve y cómo borrarlos. Describe lo que la app hace hoy, y su código es público: cualquiera puede revisarlo en [github.com/kachingga/kachingga](https://github.com/kachingga/kachingga).

## Quién es el responsable

El responsable de los datos de Kachingga es **Galo Benjamin Bello Ponce** (persona física). Para cualquier cosa sobre tus datos: [hola@kachingga.com](mailto:hola@kachingga.com).

## Qué datos guardamos

Para usar la app hace falta una cuenta (email y contraseña, o Google). El alias y los filtros son opcionales.

**Tu cuenta**
- Tu **email** y tu **contraseña**. La contraseña se guarda cifrada: nadie la puede ver, ni nosotros.
- Si entrás con **Google**, Google nos pasa tu nombre, tu email y el link a tu foto de perfil. Usamos el nombre para saludarte; la foto no la usamos.
- Tu **alias o CVU/CBU** para cobrar, si lo cargás.
- Tus **filtros guardados**.

**Lo que se carga en los grupos**
- El nombre del grupo, su moneda y su código de invitación.
- El **nombre** con el que figura cada persona. Puede incluir gente que no usa la app: la agrega otro miembro del grupo.
- Los **gastos**: descripción, categoría, fecha, monto, moneda, tipo de cambio, quién pagó, cómo se dividió y qué cuenta lo cargó.
- Los **pagos** entre personas ("ya te pagué"): quién le pagó a quién, cuánto, cuándo y una nota opcional.
- Tu alias para cobrar en un grupo en particular, si cargás uno distinto al de tu cuenta.

**Datos técnicos**
- Mientras tenés una sesión abierta, el servicio de login (Supabase) guarda la dirección IP y el navegador desde los que entraste.
- Como cualquier sitio web, los servidores ven tu dirección IP cuando te conectás. La app no la guarda: solo la usa en el momento para limitar la cantidad de pedidos y frenar abusos.
- Si la app falla, se manda un reporte del error a Sentry con el navegador y el sistema operativo, identificado solo con un número interno de tu cuenta. No lleva tu email, tu nombre ni nada de tus grupos (montos, descripciones, alias).
- **Esta página (`kachingga.com`)** está alojada en Lovable, que lleva estadísticas de visitas: qué páginas se ven, de dónde llegan y cuánto tardan en cargar. No graba lo que hacés en la página. El hosting usa dos cookies técnicas (de Cloudflare y de Lovable) que duran como mucho un día; ninguna es de publicidad. La app (`app.kachingga.com`) no tiene analítica.

**En tu dispositivo**
- La app guarda en el navegador tu sesión (para no pedirte la contraseña cada vez), una copia de los datos de tus grupos para que los puedas ver sin conexión y tus preferencias de tema y color. Al cerrar sesión o borrar tu cuenta se borran la sesión y esa copia.

**Lo que no hacemos**
- No vendemos tus datos ni los usamos para publicidad.
- La app no usa herramientas de analítica ni cookies de seguimiento (las estadísticas de visitas de esta página, arriba, son de Lovable).
- No te mandamos mails de promociones: solo los de tu cuenta (confirmar el email, recuperar la contraseña y cambiar el email).
- No movemos plata ni pedimos datos de tu banco: los pagos entre ustedes se hacen fuera de la app.

## Quién ve qué

- **Lo de un grupo lo ven solo sus miembros.** Dentro del grupo todo es compartido: cada miembro ve todos los gastos, los pagos, los saldos, los nombres y los alias para cobrar de los demás. Para quien no es miembro, el grupo no existe.
- **Para entrar a un grupo hace falta su código de invitación**, y quien lo tenga puede unirse y ver todo. Compartilo solo con la gente del grupo. Si se filtra, se puede generar uno nuevo desde el grupo y el anterior deja de servir.
- **Tu email no lo ve nadie del grupo.**
- **Tus filtros guardados los ves solo vos.**
- Quienes mantenemos la app tenemos acceso técnico a la base de datos para que funcione y para arreglar problemas.

## Dónde se guardan y quién nos ayuda

Usamos estos servicios, y cada uno procesa los datos solo para que la app funcione:

- **Supabase:** la base de datos y el login. En Estados Unidos.
- **Railway:** donde corre la app. En Estados Unidos.
- **Resend:** manda los mails de tu cuenta.
- **Cloudflare Turnstile:** el captcha de las pantallas de entrar, registrarse y recuperar la contraseña. Analiza datos técnicos de tu navegador para distinguir personas de bots.
- **Sentry:** recibe los reportes de errores (ver "Datos técnicos").
- **Google:** solo si elegís entrar con Google.
- **Lovable:** donde está alojada esta página (`kachingga.com`).

**Copias de seguridad:** una por día, cifradas, que se guardan 90 días y después se borran solas.

**Tus datos se guardan en Estados Unidos.** La base de datos está en Supabase y Railway, en Estados Unidos, y Sentry y Resend también los procesan allá. La ley argentina pide tu consentimiento para guardarlos en un país que la Agencia de Acceso a la Información Pública no considera de protección adecuada, como Estados Unidos (Ley 25.326, art. 12): **al crear tu cuenta o entrar, aceptás que tus datos se guarden y se procesen allá.**

## Cómo borrar tu cuenta

Desde la app: **Mi cuenta → "Borrar mi cuenta"**. También podés pedirlo escribiendo a [hola@kachingga.com](mailto:hola@kachingga.com) desde el email de tu cuenta.

Qué pasa:
- **No podés volver a entrar con esa cuenta**, y las sesiones que tenías abiertas dejan de servir. No se puede deshacer.
- **Se borran** tu contraseña, tus alias para cobrar (el de la cuenta y los de cada grupo) y tus filtros guardados. **Tu email deja de guardarse**: queda reemplazado por un código, así que podés volver a registrarte con el mismo email.
- **No te saca de tus grupos.** Seguís figurando con tu nombre, como alguien sin cuenta, con tus gastos, tus pagos y tus saldos, porque son parte de las cuentas de los demás. **Tus deudas quedan en el grupo a tu nombre**; antes de confirmar, la app te muestra lo que tengas pendiente. Cualquier miembro del grupo puede cambiar el nombre con el que figurás.
- Si volvés, te registrás de nuevo y te podés "reclamar" en el grupo con su código.
- Las copias de seguridad anteriores al borrado se borran solas a los 90 días.

## Tus datos, a mano

- Tu alias y tu email los cambiás desde Mi cuenta.
- Los gastos de tus grupos los podés exportar (CSV o JSON) desde la lista de gastos.
- Para cualquier otra cosa (pedir una copia de tus datos, corregir algo o preguntar): [hola@kachingga.com](mailto:hola@kachingga.com).

## Tus derechos

Tenés derecho a **acceder** a tus datos, a **rectificarlos**, a **actualizarlos** y a pedir que se **supriman** (Ley 25.326, arts. 14 a 16). Para hacerlo, escribinos a [hola@kachingga.com](mailto:hola@kachingga.com) desde el email de tu cuenta y contanos qué querés.

- **El acceso es gratis** si lo pedís con intervalos de al menos seis meses, salvo que tengas un interés legítimo para pedirlo antes (art. 14). Rectificar, actualizar o suprimir es siempre gratis.
- Te respondemos un pedido de acceso dentro de los **10 días corridos**, y uno de rectificación, actualización o supresión dentro de los **5 días hábiles**.
- Lo que figura en tus grupos (tu nombre, tus gastos y tus pagos) no se suprime, porque es parte de las cuentas de los demás: la ley no obliga a suprimir cuando eso perjudica a otros (art. 16). Sí se puede cambiar el nombre con el que figurás.

LA AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.

## Cambios

Si cambia lo que guarda la app, actualizamos esta página y la fecha de arriba.

## Contacto

[hola@kachingga.com](mailto:hola@kachingga.com)
