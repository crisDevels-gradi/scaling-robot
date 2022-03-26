# BOOTCAMP: Frontend Developer

Construcción de componentes para buenas prácticas frontend, las tecnologias usadas son:

- HTML
- SCSS
- Webpack
- JavaScript Modular

## Design System

Un **design system** es una lista de **componentes** y recursos reutilizables, guiados por unos claros **estándares** de uso.

Además usar un design system, nos permite tener un **horizonte** claro y camino concreto para trabajar junto con un gran **equipo de trabajo**.

## Beneficios

1. Maquetado rápido
2. Pre-testing de código
3. Consistencia de marca: UX cohesive
4. Mantenibilidad
5. Productos alineados
6. Comunicación estándar

## ¿Qué debe tener un design system?

- **Resumen:** Un gran sistema siempre está en evolución, por tanto debe existir un lugar que nos sirva para dar feedback sobre las últimas evoluciones.

- **Cimientos:** Claridad desde el principio sobre guias de color, tipográfias, layouts (grids), iconografia y otros recursos necesarios.

- **Componentes:** Una librería o biblioteca de componentes reutilizables.

- **Patrones:** Buena prácticas de soluciones simples a problemas complejos.

- **Guías de marca:** Algunas librerías profesionales, tienen estándares de marca muy limitados con valores de marca, personalidad y promesas de valor.

- **Recursos de instrucción:** Contar con herramientas de documentación, artículos, videos tutoriales.

## Ejemplos:

1. [Material Design](https://material.io/components/cards#usage)
2. [Microsoft Layout](https://developer.microsoft.com/en-us/fluentui#/styles/web/layout)
3. [Salesforce](https://www.lightningdesignsystem.com/components/badges/)
4. [Atlassian](https://atlassian.design/components/drawer/examples)
5. [Polaris](https://polaris.shopify.com/components/navigation/top-bar#navigation)

En conclusión, para construir un design system de manera profesional es necesario tener claridad de los **componentes que lo conforman:**

- Buttons (NONE, HOVER, ACTIVE)
- Color Palette
- Headings (H1, H2, H3, …) 
- Forms elements (INPUT, SELECT, ALERT)
- Paragraph (Variants)
- Radio-buttons
- Accordions
- Collapse-items
- Grid
- Wrapper
- Pagination
- Modal
- Tabs
- Quantity (+/-)

## ¿Por donde empezamos?

1. RESET: La forma de estandarizar los defaults en los distintos navegadores. Si la base no tiene reset, consultas alguna y añades al proyecto. EJ: [MEJERWEB](https://meyerweb.com/eric/tools/css/reset/)

2. WRAPPER: Máximos y mínimos. Algo estandar DESKTOP: 1440px, MOBILE: 320px.

3. GRID Y FLEXBOX: Clases en común para estructurar el layout

4. COLORS (clr): Variables en común en la paleta de color

5. FONT SIZE (fs): Variables en común de los tamaños de fuentes

6. FONT FAMILY (ff): Descargar tipografias al proyecto y variables de fuentes

7. Hn, P: Generar estandarización de elementos de texto

8. SPACINGS: Margenes entre elementos. Hacer lista y estandarizar

9. BUTTONS: 3 clases de botones mínimo. Dar estados NONE, HOVER, ACTIVE

10. FORM ELEMENTS: Estandar en INPUT, SELECT, ALERTS
