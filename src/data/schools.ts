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
                    {
                        number: 5,
                        subjects: [
                            {
                                name: "Arquitectura Y Organización De Computadoras",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "César Arellano Salazar"
                                }
                            },
                            {
                                name: "Contabilidad Gerencial",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "Yoni Valiente Saldaña"
                                }
                            },
                            {
                                name: "Ingenieria De Datos",
                                credits: 4,
                                type: "especialidad",
                                professor: {
                                    name: "Luis Boy Chavil"
                                }
                            },
                            {
                                name: "Investigación De Operaciones",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: ""
                                }
                            },
                            {
                                name: "Sistemas De Información",
                                credits: 4,
                                type: "especialidad",
                                professor: {
                                    name: "Robert Sanchez Ticona"
                                }
                            },
                            {
                                name: "Tecnologias Web",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "Juan Obando Roldán"
                                }
                            },
                            {
                                name: "Teleinformática",
                                credits: 3,
                                type: "optativo",
                                professor: {
                                    name: "Camilo Suarez Rebaza"
                                }
                            },
                            {
                                name: "Transformación Digital",
                                credits: 3,
                                type: "optativo",
                                professor: {
                                    name: "David Agreda Gamboa"
                                }
                            }
                        ]

                    },
                    {
                        number: 7,
                        subjects: [
                            {
                                name: "Cadena de Suministros",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "Joe González Vasquez"
                                }
                            },
                            {
                                name: "Gestión de Servicios TI",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "Alberto Mendoza De los Santos"
                                }
                            },
                            {
                                name: "Ingeniería de Software I",
                                credits: 4,
                                type: "especialidad",
                                professor: {
                                    name: "Juan Santos Fernandez"
                                }
                            },
                            {
                                name: "Metodología de la Invest. Científica",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "Luis Tenorio Cabrera"
                                }
                            },
                            {
                                name: "Negocios Electrónicos",
                                credits: 3,
                                type: "optativo",
                                professor: {
                                    name: "David Agreda Gamboa"
                                }
                            },
                            {
                                name: "Planeamiento Estratégico",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "Oscar Alcántara Moreno"
                                }
                            },
                            {
                                name: "Redes y Comunicaciones I",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "César Arellano Salazar"
                                }
                            },
                            {
                                name: "Administración de Base de Datos",
                                credits: 3,
                                type: "optativo",
                                professor: {
                                    name: "Ricardo Mendoza Rivera"
                                }
                            }
                        ]
                    },
                    {
                        number: 9,
                        subjects: [
                            {
                                name: "Gestión de Proyectos de TI",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "José Gómez Ávila"
                                }
                            },
                            {
                                name: "Computación en la Nube",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "José Gómez Ávila"
                                }
                            },
                            {
                                name: "Tesis I",
                                credits: 4,
                                type: "especialidad",
                                professor: {
                                    name: "Juan Santos Fernandez"
                                }
                            },
                            {
                                name: "Hackeo Ético",
                                credits: 3,
                                type: "optativo",
                                professor: {
                                    name: "Camilo Suarez Rebaza"
                                }
                            },
                            {
                                name: "Ingeniería Web",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "Marcelino Torres Villanueva"
                                }
                            },
                            {
                                name: "Analítica de Negocios",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "Ricardo Mendoza Rivera"
                                }
                            },
                            {
                                name: "Auditoria Informática",
                                credits: 3,
                                type: "optativo",
                                professor: {
                                    name: "Alberto Mendoza De los Santos"
                                }
                            },
                            {
                                name: "Empredimiento Tecnológico",
                                credits: 3,
                                type: "optativo",
                                professor: {
                                    name: "Oscar Alcántara Moreno"
                                }
                            },
                        ]
                    }
                ]
            }
        ], information: `La escuela académica de ingeniería de sistemas tiene 10 ciclos académicos. El director de escuela de ing de sistemas es el Dr. Everson Agreda, pero algunos docentes que tambien pasarón por dicho puesto son Dr. Luis Boy y Ing. Luis Tenorio. Se ofrece programas de pregrado en Ingeniería de Sistemas y en Ingeniería de Sistemas y Computación. El programa de maestría en Ingeniería de Sistemas y Computación tiene una duración de dos años.`,
        name: "Ingeniería de Sistemas",
        slug: "ing-sistemas",
        faqs: [
            {
                question: "¿Cuál es el horario de atención y el numero de contacto de la secretaría de Ingenería de Sistemas?",
                answer: "El horario de atención de la secretaría de Ingenería de Sistemas es desde las 8:00 am hasta las 2:00 pm. Puedes comunicarte con la secretaria de tu escuela al número 970 025 212"
            },
            {
                question: "¿Cómo es el proceso de matrícula?",
                answer: "El proceso de matrícula es el siguiente: 1: Ingresar al Sistema Universitario Virtual (SUV).  2. Elegir cursos a matricular. 3. Generar orden de pago. 4. Pagar en un agente interbank. 5. Entregar orden de pago y voucher en la secretaría de tu escuela."
            },
            {
                question: "¿Cúal es el codigo de servicio para pagar en un agente interbank?",
                answer: "El codigo de servicio para pagar en un agente interbank es 123456789"
            },
            {
                question: "¿Cómo es el proceso de regularización de matrícula?",
                answer: ""
            },
            {
                question: "¿Cuáles son los requisitos para solicitar obtener bachiller y título?",
                answer: ""
            }
        ]

    }
]

export default schools;