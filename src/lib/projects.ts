export interface Project {
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
  developmentTime?: string
  status?: string
  location?: string
  context?: string
  objective?: string
  scope?: {
    infrastructure?: string[]
    automation?: string[]
    marketing?: string[]
    consulting?: string[]
  }
  team?: {
    generalManager?: string
    marketingDirector?: string
    techLead?: string
  }
  responsibilities?: string
  projectLinks?: {
    name: string
    url: string
    description: string
  }[]
  visualStyleImage?: string
}

// Función para cargar todos los proyectos
export async function getAllProjects(): Promise<Project[]> {
  try {
    const fs = await import('fs/promises')
    const path = await import('path')
    
    const projectsDir = path.join(process.cwd(), 'src/data/projects')
    const files = await fs.readdir(projectsDir)
    
    const jsonFiles = files.filter(file => file.endsWith('.json'))
    
    const projects = await Promise.all(
      jsonFiles.map(async (file) => {
        const filePath = path.join(projectsDir, file)
        const fileContent = await fs.readFile(filePath, 'utf-8')
        return JSON.parse(fileContent) as Project
      })
    )
    
    // Ordenar por fecha (más recientes primero)
    return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error loading projects:', error)
    return []
  }
}

// Función para cargar un proyecto específico por ID
export async function getProjectById(id: string): Promise<Project | null> {
  try {
    const fs = await import('fs/promises')
    const path = await import('path')
    
    const filePath = path.join(process.cwd(), 'src/data/projects', `${id}.json`)
    const fileContent = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(fileContent) as Project
  } catch (error) {
    console.error(`Error loading project ${id}:`, error)
    return null
  }
}

// Función para obtener todos los IDs de proyectos (útil para generar rutas estáticas)
export async function getAllProjectIds(): Promise<string[]> {
  try {
    const fs = await import('fs/promises')
    const path = await import('path')
    
    const projectsDir = path.join(process.cwd(), 'src/data/projects')
    const files = await fs.readdir(projectsDir)
    
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''))
  } catch (error) {
    console.error('Error loading project IDs:', error)
    return []
  }
}
