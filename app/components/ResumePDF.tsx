
export default function PDFDocument() {
    return (
        <article className="w-[210mm] h-[297mm] p-[15mm] bg-white border-1 border-black">
            <h1 className="text-[5.29mm] [font-family:Arial,sans-serif] font-semibold text-black text-center mb-[8px]">
                Alan Morales Guevara
            </h1>
            <div className="text-[14px] text-center mb-[16px]">
                <span className="after:content-[','] after:mr-[4px]">
                    Bogotá, 110131, Colombia
                </span>
                <a href="" className="underline after:content-[','] after:mr-[4px]">
                    +57 3043658798
                </a>
                <a href="" className="underline after:content-[','] after:mr-[4px]">
                    alanmoralesg47@gmail.com
                </a>
                <a href="" className="underline after:content-[','] after:mr-[4px]">
                    LinkedIn
                </a>
                <a href="" className="underline">
                    GitHub
                </a>
            </div>
            <section className="flex border-t-2 border-black pt-[12px] pb-[16px] text-[14px]">
                <div className="w-[25%]">RESUMEN</div>
                <div className="w-[75%]">
                    Desarrollador Frontend Mobile con más de 2 años de experiencia construyendo aplicaciones móviles y empresariales con Angular y React Native/Flutter, integrando capacidades de Inteligencia Artificial y LLMs en flujos de usuario reales. Experiencia entregando productos escalables en producción, colaborando con equipos multidisciplinarios bajo metodologías ágiles. Manejo de principios UX/UI en entornos mobile, Git, Docker y servicios cloud. Aprendo rápido y trabajo efectivamente tanto de forma autónoma como en equipo.
                </div>
            </section>

            <section className="border-t-2 border-black pt-[12px] pb-[16px] text-[14px]">
                <div className="uppercase mb-4">EXPERIENCIA LABORAL</div>
                <div className="flex flex-col gap-[16px]">
                    <div className="flex">
                        <div className="w-[25%]">03/2025 – 05/2026</div>
                        <div className="w-[75%]">
                            <div className="flex justify-between font-semibold">
                                <span>Frontend | Fullstack Developer</span>
                                <span className="font-normal">Bogotá, Colombia</span>
                            </div>
                            <div className="mb-1">Geotecnia Y Cimentaciones S.A.S</div>
                            <ul className="list-disc pl-5">
                                <li>Contribuí a la integración de modelos de Machine Learning y LLMs directamente dentro del flujo de usuario de la aplicación, mejorando la experiencia técnica con capacidades de IA.</li>
                                <li>Orquesté el mantenimiento y evolución de Geocore (aplicación técnica de gestión de pavimentos) con Angular y Django, entregando más de 40 funcionalidades sin tiempos de inactividad.</li>
                                <li>Modernicé módulos críticos del frontend en Angular, refactorizando componentes y servicios para mejorar el rendimiento, la mantenibilidad y la integración con los servicios backend.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-[25%]">06/2024 – Presente</div>
                        <div className="w-[75%]">
                            <div className="flex justify-between font-semibold">
                                <span>Freelance Frontend Fullstack Developer</span>
                                <span className="font-normal">Bogotá, Colombia</span>
                            </div>
                            <div className="mb-1">Independiente</div>
                            <ul className="list-disc pl-5">
                                <li>Entregué proyectos Fullstack completos (web y móvil) de forma autónoma, desde el levantamiento de requerimientos hasta el despliegue en producción.</li>
                                <li>Desarrollé scripts de automatización con Python para optimizar tareas repetitivas en proyectos de clientes: procesamiento de archivos, integración de APIs y generación de reportes automáticos.</li>
                                <li>Gestioné comunicación directa con clientes no técnicos, traduciendo necesidades de negocio en soluciones técnicas concretas.</li>
                                <li>Desarrollé aplicaciones móviles multiplataforma con React Native y Flutter, cubriendo desde el diseño de interfaz hasta el despliegue en tiendas.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-[25%]">08/2024 – 02/2025</div>
                        <div className="w-[75%]">
                            <div className="flex justify-between font-semibold">
                                <span>Practicante en Desarrollo y Análisis de datos</span>
                                <span className="font-normal">Bogotá, Colombia</span>
                            </div>
                            <div className="mb-1">Wingo Colombia</div>
                            <ul className="list-disc pl-5">
                                <li>Diseñé y desarrollé plataformas interactivas para el entrenamiento del equipo ACDM utilizando React, Node.js, SQL Server y servicios en Google Cloud.</li>
                                <li>Implementé dashboards de visualización de datos en tiempo real con PowerBI y Tableau, facilitando la toma de decisiones operativas.</li>
                                <li>Automaticé el análisis de datos usando Python (NumPy) y Visual Basic, reduciendo los tiempos de procesamiento manual.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </article>
    );
}