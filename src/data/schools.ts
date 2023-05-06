import { School } from "../models/school/school.model";

const schools: School[] = [
    {
        periods: [
            {
                year: "2023",
                semester: 1,
                start: new Date("2023-04-10"),
                end: new Date("2023-08-04"),
                cycles: [
                    {
                        number: 1,
                        subjects: [
                            {
                                name: "Desarrollo Personal",
                                credits: 3,
                                professor: {
                                    name: "Sheyla Escobedo Martínez",
                                },
                                summary: "El alumno identificará y aplicará los elementos que le permitan desarrollar su potencial humano, a través de la adquisición de conocimientos, habilidades y actitudes que le permitan mejorar su calidad de vida.",
                                type: "obligatorio",
                            },
                            {
                                name: "Desarrollo del Pensamiento Lógico Matemático",
                                credits: 3,
                                professor: {
                                    name: "Raúl Martinez Zocón",
                                },
                                summary: "",
                                type: "obligatorio",
                            },
                            {
                                name: "Lectura Crítica y Redacción de Textos Académicos",
                                credits: 3,
                                professor: {
                                    name: "",
                                },
                                summary: "",
                                type: "obligatorio",
                            },
                            {
                                name: "Introducción al Análisis Matemático",
                                credits: 4,
                                professor: {
                                    name: "José Ponte Bejarano",
                                },
                                summary: "",
                                type: "obligatorio",
                            },
                            {
                                name: "Estadística General",
                                credits: 4,
                                professor: {
                                    name: "Martha Solano Coello"
                                },
                                summary: "",
                                type: "obligatorio",

                            },
                            {
                                name: "Introducción a la Ingeniería de Sistemas",
                                credits: 2,
                                professor: {
                                    name: "Luis Tenorio Cabrera"
                                },
                                summary: "",
                                type: "especialidad",
                            },
                            {
                                name: "Introducción a la Programación",
                                credits: 3,
                                professor: {
                                    name: "Marcelino Torres Villanueva"
                                },
                                summary: "",
                                type: "especialidad",
                            },
                            {
                                name: "Taller de Liderazgo y Trabajo en Equipo",
                                credits: 1,
                                type: "optativo",
                            },
                            {
                                name: "Taller de Música",
                                credits: 1,
                                type: "optativo",
                            },
                            {
                                name: "Taller de Comunicación Eficaz",
                                credits: 1,
                                type: "optativo",
                            },
                            {
                                name: "Taller de Teatro",
                                credits: 1,
                                type: "optativo",
                            }
                        ],

                    },
                    {
                        number: 3,
                        subjects: [
                            {
                                name: "Administración General",
                                credits: 3,
                                type: "especialidad",
                            },
                            {
                                name: "Estadistica Aplicada",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "Carlos Tapia Sánchez"
                                }
                            },
                            {
                                name: "Fisica Electrónica",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "Vilma Méndez Gil"
                                }
                            },
                            {
                                name: "Ingeniería Gráfica",
                                credits: 3,
                                type: "optativo",
                                professor: {
                                    name: "Juan Obando Roldán"
                                }
                            },
                            {
                                name: "Sicología Organizacional",
                                credits: 3,
                                type: "optativo",
                                professor: {
                                    name: "Sheyla Escobedo Martínez"
                                }
                            },
                            {
                                name: "Matemática Aplicada",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "Rocío Rojas Jara"
                                }

                            },
                            {
                                name: "Programación Orientada a Objetos II",
                                credits: 4,
                                type: "especialidad",
                                professor: {
                                    name: "Zoraida Vidal Melgarejo"
                                }
                            },
                            {
                                name: "Sistémica",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "Luis Tenorio Cabrera"
                                }
                            },
                        ],

                    },
                ]
            }
        ], information: `La escuela académica de ingeniería de sistemas tiene 10 ciclos académicos. El presente ciclo forma parte del periodo 2023-I, y empieza el 10 de Abril de 2023. El director de escuela de ing de sistemas es el Dr. Everson Agreda, pero algunos docentes que tambien pasarón por dicho puesto son Dr. Luis Boy y Ing. Luis Tenorio.
        Preguntas frecuentes relacionadas a la Escuela de Ingeniería de Sistemas
School name: Ingeniería de Sistemas
Pregunta 1: ¿Qué programas de pregrado ofrece la Escuela de Ingeniería de Sistemas?
Respuesta 1: La Escuela de Ingeniería de Sistemas ofrece programas de pregrado en Ingeniería de Sistemas y en Ingeniería de Sistemas y Computación.

Pregunta 2: ¿Cuánto tiempo dura el programa de maestría en Ingeniería de Sistemas?
Respuesta 2: El programa de maestría en Ingeniería de Sistemas y Computación tiene una duración de dos años.

pregunta 3: ¿Cuál es el horario de atención de la secretaría de Ingeniería de Sistemas?
respuesta 3: El horario de atención de la secretaría de Ingenería de Sistemas es desde las 2:00 pm hasta las 7:00 pm

pregunta 4: ¿Cuál es el número de contacto de la secretaría de Ingenería de Sistemas?
respuesta 4: Puedes comunicarte con la secretaria de tu escuela al número *********
        `,
        name: "Ingeniería de Sistemas",

    }
]

export default schools;