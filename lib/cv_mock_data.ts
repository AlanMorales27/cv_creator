import { CvShape } from "./schemas";

export const CvData: CvShape = {
    personalInfo: {
        firstNames: "Alan Styllian",
        lastNames: "Morales Guevara",
        title: "Fullstack Developer",
        location: "Bogotá",
        postalCode: "110131",
        country: "Colombia",
        phoneNumber: "+57 3043658798",
        email: "alanmoralesg47@gmail.com",
        linkedIn: "www.linkedin.com/in/alanmoralesguevara",
        gitHub: "https://github.com/alanmoralesg47"
    },
    summary: "Fullstack Developer con más de 2 años de experiencia construyendo aplicaciones móviles y empresariales con Angular y React Native/Flutter, integrando capacidades de Inteligencia Artificial y LLMs en flujos de usuario reales. Experiencia entregando productos escalables en producción, colaborando con equipos multidisciplinarios bajo metodologías ágiles. Manejo de principios UX/UI en entornos mobile, Git, Docker y servicios cloud. Aprendo rápido y trabajo efectivamente tanto de forma autónoma como en equipo.",
    sections: [
        {
            id: 1,
            type: "work_experience",
            title: "EXPERIENCIA LABORAL",
            entries: [
                {
                    role: "Frontend | Fullstack Developer",
                    company: "Geotecnia Y Cimentaciones S.A.S",
                    location: "Bogotá, Colombia",
                    startDate: "03/2025",
                    endDate: "05/2026",
                    description: [
                        "Contribuí a la integración de modelos de Machine Learning y LLMs directamente dentro del flujo de usuario de la aplicación, mejorando la experiencia técnica con capacidades de IA.",
                        "Orquesté el mantenimiento y evolución de Geocore (aplicación técnica de gestión de pavimentos) con Angular y Django, entregando más de 40 funcionalidades sin tiempos de inactividad.",
                        "Modernicé módulos críticos del frontend en Angular, refactorizando componentes y servicios para mejorar el rendimiento, la mantenibilidad y la integración con los servicios backend."
                    ]
                },
                {
                    role: "Freelance Frontend Fullstack Developer",
                    company: "Independiente",
                    location: "Bogotá, Colombia",
                    startDate: "06/2024",
                    endDate: "Presente",
                    description: [
                        "Entregué proyectos Fullstack completos (web y móvil) de forma autónoma, desde el levantamiento de requerimientos hasta el despliegue en producción.",
                        "Desarrollé scripts de automatización con Python para optimizar tareas repetitivas en proyectos de clientes: procesamiento de archivos, integración de APIs y generación de reportes automáticos.",
                        "Gestioné comunicación directa con clientes no técnicos, traduciendo necesidades de negocio en soluciones técnicas concretas.",
                        "Desarrollé aplicaciones móviles multiplataforma con React Native y Flutter, cubriendo desde el diseño de interfaz hasta el despliegue en tiendas."
                    ]
                },
                {
                    role: "Practicante en Desarrollo y Análisis de datos",
                    company: "Wingo Colombia",
                    location: "Bogotá, Colombia",
                    startDate: "08/2024",
                    endDate: "02/2025",
                    description: [
                        "Diseñé y desarrollé plataformas interactivas para el entrenamiento del equipo ACDM utilizando React, Node.js, SQL Server y servicios en Google Cloud.",
                        "Desarrollé dashboards en Google Looker y prototipos con Power BI que optimizaban el monitoreo de indicadores clave del negocio y facilitaban la toma de decisiones tácticas.",
                        "Implementé un sistema de alertas vía correo electrónico para notificar eventos críticos en los procesos de la compañía.",
                        "Participé en la migración de datos a Google BigQuery, ejecutando procesos ETL que aseguraron la integridad y disponibilidad de la información."
                    ]
                }
            ]
        },
        {
            id: 2,
            type: "work_experience",
            title: "EXPERIENCIA EDUCACIONAL",
            entries: [
                {
                    role: "Semillero de Desarrollo",
                    company: "Universidad San Buenaventura",
                    location: "Bogotá, Colombia",
                    startDate: "01/2022",
                    endDate: "02/2025",
                    description: [
                        "Desarrollé soluciones web para clientes externos (personas naturales, comercios y startups) trabajando en equipo bajo la guía de un profesor.",
                        "Implementé proyectos con React, Next.js, WordPress/CMS y bases de datos SQL/NoSQL, complementados con diseño de interfaces en Figma.",
                        "Participé en proyectos académicos y pequeñas investigaciones aplicadas dentro del marco universitario.",
                        "Fortalecí habilidades de trabajo colaborativo, comunicación con clientes y entrega de productos funcionales en entornos reales."
                    ]
                }
            ]
        },
        {
            id: 3,
            type: "education",
            title: "EDUCACIÓN",
            entries: [
                {
                    institution: "Universidad San Buenaventura",
                    degree: "Profesional, Ingeniería Multimedia",
                    location: "Bogotá, Colombia",
                    startDate: "01/2020",
                    endDate: "03/2026",
                    description: [
                        "Ingeniero Multimedia titulado. Durante mi carrera elegí enfocarme en desarrollo web Frontend, motivado por una pasión genuina por la programación que me llevó a participar en múltiples semilleros de investigación en Frontend, realidad virtual/aumentada y computación gráfica. Esta dedicación se reflejó en un reconocimiento académico y en un proyecto de grado destacado, consolidando una base técnica sólida y una mentalidad orientada a la mejora continua."
                    ]
                },
                {
                    institution: "Alura Latam",
                    degree: "Oracle Next Education Frontend Specialist",
                    location: "Virtual",
                    startDate: "08/2022",
                    endDate: "12/2022",
                    description: [
                        "Programa de formación intensiva en desarrollo Frontend impartido por Oracle y Alura, completado y certificado. Profundicé en HTML, CSS, JavaScript y React, aplicando los conocimientos en proyectos prácticos bajo metodologías ágiles y dinámicas de trabajo en equipo. La formación reforzó mis fundamentos técnicos y mi capacidad para colaborar en entornos de desarrollo profesionales."
                    ]
                },
                {
                    institution: "Oracle Academy",
                    degree: "Java Fundamentals",
                    location: "Virtual",
                    startDate: "01/2022",
                    endDate: "07/2022",
                    description: [
                        "Adquirí dominio sobre la sintaxis y fundamentos de Java, desde versiones Legacy como Java 8 hasta cambios en versiones actuales como Java 21.",
                        "Dominio en Programación Orientada a Objetos (POO), estructuras de datos y colecciones y manejo de excepciones."
                    ]
                }
            ]
        },
        {
            id: 4,
            type: "skills",
            title: "HABILIDADES TÉCNICAS",
            displayFormat: "comma",
            categories: [
                {
                    name: "Frameworks",
                    items: [
                        { name: "Angular", level: "Avanzado" },
                        { name: "React.js", level: "Avanzado" },
                        { name: "Next.js", level: "Intermedio" },
                        { name: "Flutter" },
                        { name: "React Native" },
                        { name: "Nest.js", level: "Básico" }
                    ]
                },
                {
                    name: "Programming Languages",
                    items: [
                        "JavaScript & TypeScript",
                        "Python",
                        { name: "Java", level: "Avanzado" },
                        "PHP",
                        "HTML & CSS"
                    ]
                },
                {
                    name: "Tools & Technologies",
                    items: [
                        "AWS",
                        "Docker",
                        "Git & Github",
                        "MySQL",
                        "PostgreSQL",
                        "MongoDB",
                        "Jest"
                    ]
                },
            ]
        },
        {
            id: 5,
            type: "skills",
            title: "HABILIDADES BLANDAS",
            displayFormat: "list",
            categories: [
                {
                    name: "",
                    items: [
                        "Colaboración efectiva",
                        "Comunicación asertiva",
                        "Trabajo remoto"
                    ]
                }
            ]

        },
        {
            id: 6,
            type: "skills",
            title: "IDIOMAS",
            displayFormat: "list",
            categories: [
                {
                    name: "",
                    items: [
                        "Inglés: Avanzado (C1)",
                        "Portugués: Intermedio (B1)"
                    ]
                }
            ]
        }
    ]
}

