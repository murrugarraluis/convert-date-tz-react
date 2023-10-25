# Calendario Horario Semanal Timezone

Este es un proyecto de práctica que implementa un calendario tipo horario semanal en React utilizando Vite como bundler. La aplicación te permite visualizar un horario semanal y convertirlo de un timezone a otro, haciendo uso de bibliotecas populares como FullCalendar, Moment.js, Tailwind CSS y Daisy UI.
## Demo

Puedes ver una demo en vivo de este proyecto accediendo al siguiente enlace:

[Demo del Calendario](https://convert-timezone-react.onrender.com/)

## Funcionalidades

- Visualización de un horario semanal.
- Conversión de horario de un timezone a otro utilizando Moment.js y Moment Timezone.
- Interacción con eventos y edición de su duración.
- Diseño atractivo y responsivo gracias a Tailwind CSS y Daisy UI.
- Fácil configuración y gestión de eventos con FullCalendar.

## Requisitos Previos

- Node.js: Asegúrate de tener Node.js instalado en tu sistema.

## Cómo Ejecutar en Local

1. Clona este repositorio en tu máquina local.

2. Entra en el directorio del proyecto
3. Ejecuta para instalar las dependencias
```bash
npm install
```
4. Ejecuta para levantar el servidor local
```bash
npm run dev
```
5. Abre tu navegador y ve a http://localhost:3000 para ver la aplicación en funcionamiento.

## Uso

- Selecciona el timezone de origen en el menú desplegable "Timezone de Origen" en el primer componente de calendario.
- Luego, selecciona el timezone de destino en el menú desplegable "Timezone de Destino".
- Coloca los eventos en el bloque de horario en el primer componente de calendario de acuerdo con el timezone de origen.
- Haz clic en el botón "Convertir" para que los horarios se ajusten automáticamente al timezone de destino en el segundo componente de calendario.
- Para restablecer o limpiar los eventos en ambos componentes de calendario, puedes hacer clic en el botón "Limpiar".

Esto te permite visualizar y comparar horarios en diferentes timezones de manera efectiva.
