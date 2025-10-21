# Estructura de Datos de Proyectos

## Descripción

Los datos de proyectos han sido refactorizados para usar archivos JSON individuales en lugar de datos hardcodeados en el código. Esto mejora la mantenibilidad y facilita la gestión de contenido.

## Estructura de Archivos

```
src/
├── data/
│   └── projects/
│       ├── petluv-app.json
│       ├── greenserve.json
│       ├── research-bug-database.json
│       ├── cycle-rental-app.json
│       ├── architectural-visualization.json
│       └── neural-network-visualization.json
├── lib/
│   └── projects.ts          # Funciones para cargar datos
└── app/
    └── projects/
        ├── page.tsx         # Lista de proyectos
        └── [slug]/
            └── page.tsx     # Detalle de proyecto
```

## Interfaz de Proyecto

```typescript
interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  client: string
  year: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  date: string
  demoUrl?: string
  githubUrl?: string
}
```

## Funciones Disponibles

### `getAllProjects()`
Carga todos los proyectos desde los archivos JSON y los ordena por fecha (más recientes primero).

### `getProjectById(id: string)`
Carga un proyecto específico por su ID.

### `getAllProjectIds()`
Obtiene todos los IDs de proyectos disponibles (útil para generar rutas estáticas).

## Agregar un Nuevo Proyecto

1. Crear un nuevo archivo JSON en `src/data/projects/` con el nombre del proyecto (ej: `mi-proyecto.json`)
2. Seguir la estructura de la interfaz `Project`
3. El proyecto aparecerá automáticamente en la lista y será accesible en `/projects/mi-proyecto`

## Ventajas de esta Estructura

- ✅ **Separación de datos y código**: Los datos están separados del código de presentación
- ✅ **Fácil mantenimiento**: Agregar/editar proyectos solo requiere modificar archivos JSON
- ✅ **Generación estática**: Next.js genera páginas estáticas para mejor rendimiento
- ✅ **Escalabilidad**: Fácil agregar nuevos proyectos sin tocar código
- ✅ **Versionado**: Los cambios en proyectos se pueden trackear en Git
- ✅ **Reutilización**: Los datos pueden ser consumidos por otros componentes

## Migración Completada

- ✅ Datos hardcodeados movidos a archivos JSON individuales
- ✅ Interfaz unificada creada
- ✅ Funciones de carga implementadas
- ✅ Páginas actualizadas para usar los nuevos datos
- ✅ Generación estática configurada
- ✅ Compilación exitosa verificada
