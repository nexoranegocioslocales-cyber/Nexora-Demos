# Nexora Demo Lab

15 conceptos ficticios: cinco portales tipo GuestHub y diez webs comerciales. HTML, CSS y JavaScript estáticos, sin dependencias de ejecución. Cada demo tiene identidad, estructura de portada, contenido y funciones específicas.

## Abrir

Catálogo: https://nexoranegocioslocales-cyber.github.io/Nexora-Demos/

## Demos

- [Maré](guest-mare/) — GuestHub · Resort mediterráneo
- [Distrito 08](guest-distrito/) — GuestHub · Apartamentos urbanos
- [Casa Bosque](guest-bosque/) — GuestHub · Turismo rural
- [Maison Alba](guest-maison/) — GuestHub · Hotel boutique
- [Nomad Social](guest-nomad/) — GuestHub · Hostel & comunidad
- [Brasa & Sal](restaurante-brasa/) — Restaurante
- [Clara Dental](clinica-clara/) — Clínica dental
- [Ritual Studio](barberia-ritual/) — Barbería
- [PULSE Club](gimnasio-pulse/) — Gimnasio & entrenamiento
- [FORMA Estudio](reformas-forma/) — Reformas & interiorismo
- [Habita Studio](inmobiliaria-habita/) — Inmobiliaria
- [Luma Atelier](estetica-luma/) — Estética & bienestar
- [Nido Vet](veterinaria-nido/) — Veterinaria
- [TORQUE Garage](taller-torque/) — Taller mecánico
- [LEVEL Academy](academia-level/) — Academia de idiomas

## Funciones

- Catálogo con búsqueda, filtros, favoritos y vistas reales de 375 px, 768 px y escritorio en iframe.
- GuestHub: guía ES/EN, Wi-Fi de ejemplo, lista de llegada persistente, planes favoritos y concierge de demostración.
- Negocios: carta filtrable, tratamientos, profesionales, clases, planes mensual/anual, estimación de reforma, inmuebles con favoritos, servicios por especie, selección de vehículo y prueba orientativa de idioma.
- Solicitudes: validación, resumen local, copiar, descargar TXT y recordatorio ICS claramente marcado como DEMO / sin confirmar.
- Accesibilidad: navegación por teclado, diálogos nativos, foco visible, enlaces para saltar al contenido y movimiento reducido.

## Alcance

No hay backend, cobros, reservas confirmadas, disponibilidad real ni envío de datos. Marcas, equipos, servicios, horarios y precios ficticios. Las solicitudes no se guardan permanentemente. Solo preferencias no personales se guardan en localStorage. Antes de uso real, reemplazar los datos, validar condiciones y conectar el canal autorizado de cada negocio.

## Personalizar

`sites.json` contiene identidad y contenido. `python build.py --from-json` regenera las 15 demos con ese contenido; `build_catalog.py` genera el catálogo. `assets/site.js` contiene interacciones compartidas, cada carpeta incluye su `theme.css` y `data.js`. No necesita npm; para probar localmente: `python -m http.server 8080` en la raíz.

## Recursos

Fotografías de Unsplash descargadas como WebP; fuentes Manrope, DM Sans y Cormorant Garamond de Google Fonts alojadas localmente. Fuentes y sus licencias originales deben conservarse; las imágenes se documentan en `assets/photo-credits.json`. Las fotos son de stock y no muestran establecimientos identificados por estas marcas ficticias.

## Selección comercial

Los diez sectores son una propuesta de prospección, no un ranking estadístico de demanda: negocios con citas, menús, catálogos o presupuestos donde una demo puede mostrar utilidad de forma concreta. Contexto: INE DIRCE 2025 (comercio, hostelería, construcción y servicios profesionales).
Fuente: https://www.ine.es/dyngs/Prensa/es/DIRCE2025.htm
