import { School } from "../../models/school/school.model";

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
            },
            {
                year: "2023",
                semester: 2,
                start: new Date("2023-08-28"),
                end: new Date("2023-12-15"),
                cycles: [
                    {
                        number: 2,
                        subjects: [
                            {
                                name: "Análisis Matemático",
                                credits: 4,
                                type: "obligatorio",
                            },
                            {
                                name: "Cultura Investigativa y Pensamiento Crítico",
                                credits: 3,
                                type: "obligatorio",
                            },
                            {
                                name: "Ética, Convivencia Humana y Ciudadanía",
                                credits: 3,
                                type: "obligatorio",
                            },
                            {
                                name: "Física General",
                                credits: 4,
                                type: "optativo",
                            },
                            {
                                name: "Programación Orientada a Objetos I",
                                credits: 4,
                                type: "especialidad",
                                professor: {
                                    name: "Zoraida Vidal Melgarejo"
                                }
                            },
                            {
                                name: "Sociedad Cultura y Ecología",
                                credits: 3,
                                type: "obligatorio",
                            },
                            {
                                name: "Taller de Deporte",
                                credits: 1,
                                type: "optativo",
                            },
                        ]
                    },
                    {
                        number: 4,
                        subjects: [
                            {
                                name: 'Computación Gráfica Y Visual',
                                credits: 3,
                                type: 'optativo'
                            },
                            {
                                name: 'Plataformas Tecnológicas',
                                credits: 3,
                                type: 'optativo'
                            },
                            {
                                name: 'Diseño Web',
                                credits: 3,
                                type: 'especialidad',
                                professor: {
                                    name: 'Juan Obando Roldán'
                                }
                            },
                            {
                                name: 'Economia General',
                                credits: 3,
                                type: 'especialidad'
                            },
                            {
                                name: 'Estructura De Datos Orientado A Objetos',
                                credits: 4,
                                type: 'especialidad'
                            },
                            {
                                name: 'Gestión De Procesos',
                                credits: 3,
                                type: 'especialidad',
                                professor: {
                                    name: "David Agreda Gamboa"
                                }
                            },
                            {
                                name: 'Pensamiento De Diseño',
                                credits: 3,
                                type: 'especialidad'
                            },
                            {
                                name: 'Sistemas Digitales',
                                credits: 3,
                                type: 'especialidad',
                                professor: {
                                    name: 'César Arellano Salazar'
                                }
                            }
                        ]
                    },
                    {
                        number: 6,
                        subjects: [
                            {
                                name: "Finanzas Corporativas",
                                credits: 3,
                                type: "especialidad",
                            },
                            {
                                name: "Gestión del Talento Humano",
                                credits: 3,
                                type: "optativo",
                            },
                            {
                                name: "Ingeniería de Datos II",
                                credits: 4,
                                type: "especialidad",
                            },
                            {
                                name: "Ingeniería de Requerimientos",
                                credits: 3,
                                type: "especialidad",
                            },
                            {
                                name: "Ingeniería Económica",
                                credits: 3,
                                type: "especialidad",
                            },
                            {
                                name: "Sistemas Inteligentes",
                                credits: 3,
                                type: "especialidad",
                            },
                            {
                                name: "Sistemas Operativos",
                                credits: 3,
                                type: "especialidad",
                            }
                        ]
                    },
                    {
                        number: 8,
                        subjects: [
                            {
                                name: "Marketing y Medios Sociales",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "Oscar Alcántara Moreno"
                                }
                            },
                            {
                                name: "Seguridad de la Información",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "Alberto Mendoza De los Santos"
                                }
                            },
                            {
                                name: "Internet de las Cosas",
                                credits: 3,
                                type: "especialidad",

                            },
                            {
                                name: "Inteligencia de Negocios",
                                credits: 3,
                                type: "especialidad",
                            },
                            {
                                name: "Ingeniería de Software II",
                                credits: 4,
                                type: "especialidad",
                                professor: {
                                    name: "Juan Santos Fernandez"
                                }
                            },
                            {
                                name: "Redes y Comunicaciones II",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "David Agreda Gamboa"
                                }
                            },
                            {
                                name: "Deontología y Derecho Informático",
                                credits: 3,
                                type: "optativo",
                            },
                            {
                                name: "Arquitectura basada en Microservicios",
                                credits: 3,
                                type: "optativo",
                            }
                        ]
                    },
                    {
                        number: 10,
                        subjects: [
                            {
                                name: "Sistemas de Información Empresarial",
                                credits: 3,
                                type: "especialidad",
                            },
                            {
                                name: "Gobierno de TI",
                                credits: 3,
                                type: "especialidad",
                                professor: {
                                    name: "Alberto Mendoza De los Santos"
                                },
                            },
                            {
                                name: "Tesis II",
                                credits: 4,
                                type: "especialidad",
                                professor: {
                                    name: "Juan Santos Fernandez"
                                }
                            },
                            {
                                name: "Arquitectura Empresarial",
                                credits: 3,
                                type: "especialidad",
                            },
                            {
                                name: "Responsabilidad Social Corporativa",
                                credits: 3,
                                type: "especialidad",
                            },
                            {
                                name: "Aplicaciones Móviles",
                                credits: 3,
                                type: "especialidad",
                            }
                        ]
                    }
                ]
            }
        ],
        information: `La escuela académica de ingeniería de sistemas tiene 10 ciclos académicos. El director de escuela de ing de sistemas es el Dr. Everson Agreda, pero algunos docentes que tambien pasarón por dicho puesto son Dr. Luis Boy y Ing. Luis Tenorio. Se ofrece programas de pregrado en Ingeniería de Sistemas y en Ingeniería de Sistemas y Computación. El programa de maestría en Ingeniería de Sistemas y Computación tiene una duración de dos años.`,
        name: "Ingeniería de Sistemas",
        slug: "ing-sistemas",
        faqs: [
            {
                question: "¿Cuál es el horario de atención y el numero de contacto de la secretaría de Ingenería de Sistemas?",
                answer: "El horario de atención de la secretaría de Ingenería de Sistemas es desde las 8:00 am hasta las 2:00 pm. Puedes comunicarte con la secretaria de tu escuela al número 970 025 212"
            },
            {
                question: "¿Cómo es el proceso de matrícula?",
                answer: "El proceso de matrícula es el siguiente: 1: Ingresar al Sistema Universitario Virtual (SUV) (http://suv2.unitru.edu.pe/portal/).  2. Elegir cursos a matricular. 3. Generar orden de pago. 4. Pagar en un agente interbank. 5. Entregar orden de pago y voucher en la secretaría de tu escuela."
            },
            {
                question: "¿Cúal es el codigo de servicio para pagar en un agente interbank?",
                answer: "El codigo de servicio para pagar en un agente interbank es 123456789"
            },
            {
                question: "¿Cómo es el proceso de regularización de matrícula?",
                answer: 'Para el proceso de regularización de matrícula siga el siguiente procedimiento: 1. Llene la ficha de matrícula manual con los datos correspondientes de todos los cursos que desea llevar en el ciclo académico correspondiente. 2. Registre sus datos personales en el Formato Único de Trámite (FUT) y en el mismo marque con una "X" la opción "regularización de matrícula". 3. Realice el pago de S/. 20  4. Adjunte el voucher en la parte inferior del FUT 5. Diríjase a la oficina de registro técnico con los documentos impresos (ficha de matrícula manual y FUT con voucher adjunto)  6. Proporcione la ficha a su secretaria de escuela. Recordar que las fechas de regularización son comunicadas a través de la página oficial de la escuela de Ingeniería de Sistemas de Facebook :https://www.facebook.com/ingenieriadesistemasunt'
            },
            {
                question: "¿Cuáles son los requisitos para solicitar obtener bachiller y título?",
                answer: ""
            },
            {
                question: "¿Cuándo puedo obtener mi carnet universitario?",
                answer: "Si ya has solicitado tu carnet universitario, puedes recogerlo el 22 de Mayo del 2023. Si aun no lo solicitas puedes hacerlo entrando al sistema de gestión de trámites de la UNT. Si no tiene cuenta, se puede crear una en la página."
            },
            {
                question: "¿Dónde puedo obtener información de la Ficha de matrícula manual, o del Formato Único de Trámite (FUT), o del Procedimiento y requisitos de prácticas, o del Procedimiento de ingreso de carpetas trabajo suficiencia profesional?",

                answer: "Lo puedes encontrar ingresando a la biblioteca virtual en el apartado de trámites: https://drive.google.com/drive/u/1/folders/1pgRlV4dVxYFQcEefkEV97jaCqOf60rqC "

            },
            {
                question: "¿Qué es un sustitutorio?",
                answer: "Es una prueba que se toma por lo general en las últimas dos semanas que viene el contenido de las tres unidades y reemplaza la nota de unidad más baja de forma automática (sí hubiese dos, sería al primero). Si hay 30% de desaprobados en el curso, es obligatorio para el docente tomarlo"
            },
            {
                question: "¿Qué es un aplazado?",
                answer: "es una prueba que se toma en la última semana de clase (después de los exámenes de tercera unidad), que viene los temas de las tres unidades y se promedia con peso uno al promedio del curso."
            },
            {
                question: "¿Cómo puedo solicitar un sustitorio o aplazado?",
                answer: ". Para solicitarlo, rellenar un FUT (Formato único de trámite) y coordinar con el docente. El FUT se encuentra publicado en el fanpage de ingeniería de sistemas de la UNT. Tanto para sustitutorio y aplazado, si el promedio del curso es menor a 8, no puede rendir el aplazado/sustitutorio"
            },
            {
                question: "¿Cómo accedo al comedor universitario?",
                answer: "Para poder acceder del comedor univeristario deberás dirigirte al segundo piso de bienestar universitario para consultar sobre información, requisitos y plazos para ir o acceder a la beca."
            },
            {
                question: "¿Cuál es la nota mínima aprobatoria?",
                answer: "La nota mínima aprobatoria es 14"
            },
            {
                question: "¿Dónde son las clases de laboratorio?",
                answer: "Las clases de laboratorio son en el segundo piso de registro técnico"
            },
            {
                question: "¿Dónde se encuentra registro técnico?",
                answer: "Registro técnico se encuentra ingresando por la tercera puerta de la universidad, frente al pabellón de enfermería"
            },
            {
                question: "¿Dónde se encuentra bienestar universitario?",
                answer: "Bienestar universitario se encuentra ingresando por la tercera puerta de la universidad, pasando registro técnico."
            },
            {
                question: "¿Dónde son las clases de teoría?",
                answer: "La mayoría de las clases de teoría son en el tercer piso del pabellón de posgrado, que se encuentra ingresando por la segunda puerta de la universidad."
            },
            {
                question: "¿Hay gimnasio en la universidad?",
                answer: "Sí, el gimnasio se encuentra en Jirón Independencia 186, Trujillo 13001, en el antiguo Comedor Universitario. Para poder acceder al gym necesitar estar atento a la convocatoria que se publica en la página de facebook de la escuela de la universidad. Si necesitas más información, dirígete a la oficina de bienestar universitario (3er piso)."
            },
            {
                question: "¿Qué talleres hay en la universidad?",
                answer: "Hay danzas folclóricas, orfeón universitario, banda de musicos, grupo de música, teatro. Más información se encuentra en la página de facebook del centro cultural universitario."
            },
            {
                question: "¿Qué tallers de deporte hay en la universidad?",
                answer: "Hay futbol, basket, voley, ajedrez, karate. Para más información dirígete a la oficina de bienestar universitario (3er piso)."
            }
        ]

    }
]

export default schools;

