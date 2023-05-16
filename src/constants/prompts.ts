export const INSTRUCTIONS = `Eres un asistente virtual que ha sido diseñado para brindar información acerca de la escuela académica de Ingeniería de Sistemas de la Universidad Nacional de Trujillo. Proporcione únicamente información que se encuentre en los datos de la escuela académica proporcionados acontinuación. Si la respuesta no se encuentra en los datos de la escuela académica, responda con un mensaje indicando que no tiene información al respecto. Además no confundas los terminos ciclo con semestre, no son lo mismo. Algunos ciclos académicos de una misma carrera se imparten simultáneamente en un periodo o semestre académico.  Si la pregunta es ambigua o no está clara, solicite al usuario que proporcione más detalles para que pueda proporcionar una respuesta precisa. Si no está seguro de la respuesta, solicite al usuario que proporcione más información para que pueda investigar y brindar una respuesta precisa. Por cierto la fecha actual es ${new Date().toLocaleDateString()}. NO INVENTES NOMBRES, ENLACES, FECHAS, ETC.`;

export const GREETING = "Hola, soy un asistente virtual que ha sido diseñado para brindar información acerca de la escuela académica de Ingeniería de Sistemas de la Universidad Nacional de Trujillo. ¿En qué puedo ayudarte?"

export const THANKS = "¡De nada! Si tiene alguna otra pregunta, no dude en preguntar. Estoy aquí para ayudarlo."

export const THANKS_PHRASES = [
    'gracias',
    'cool',
    'genial',
    'asombroso',
    'muy util',
    'bien',
    'bueno',
    'excelente',
    'perfecto',
]

export const KEYWORDS = ["universidad", "asignaturas", "matrícula", "profesores",
    "docentes", "cursos", "ciclos", "semestres", "carrera", "escuela", "académica",
    "ingeniería", "sistemas", "trujillo", "perú", "peru", "peruana", "peruano",
    "peruanos", "peruanas", "universitaria", "universitario", "universitarios",
    "universitarias", "universidades", "universidad nacional de trujillo",
    "unt", "informacion", "información",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "primero", "segundo", "tercero", "cuarto", "quinto", "sexto",
    "primer", "segundo", "tercer", "cuarto", "quinto", "sexto",
    "septimo", "octavo", "noveno", "decimo",
    "ciclo",
    "semestre",
    "1er", "2do", "3er", "4to", "5to", "6to", "7mo", "8vo", "9no", "10mo","docente", "profesor", "enseña", "conoces a", "conoces de", "conoces",
    "curso", "dicta", "dictan", "imparte", "imparten", "director"
]

export const FAQ_KEYWORDS = [
    "Secretaría",
    "Ingeniería",
    "Sistemas",
    "Horario",
    "Atención",
    "Contacto",
    "Matrícula",
    "suv",
    "Sistema",
    "Universitario",
    "Virtual",
    "Orden",
    "Pago",
    "Agente",
    "Interbank",
    "Código",
    "Servicio",
    "Regularización",
    "Ficha",
    "Manual",
    "Formato",
    "Único",
    "Trámite",
    "FUT",
    "Prácticas",
    "Carnet",
    "Trabajo",
    "Suficiencia",
    "Profesional",
    "Biblioteca",
    "Trámites",
    "Enlace",
    "matricular",
    "registro",
    "inscripción",
    "inscribir",
    "inscribirme",
    "matricularme",
    "regularizar",
    "pagar",
    "pago",
]


export const CYCLES_EXPRESSIONS =
{
    1: [
        "primer ciclo",
        "primer ciclo académico",
        "ciclo 1",
        "1er ciclo",
        "1ero",
        "primero"
    ],
    2: [
        "segundo ciclo",
        "segundo ciclo académico",
        "ciclo 2",
        "2do ciclo",
        "2do",
        "segundo"
    ],
    3: [
        "tercer ciclo",
        "tercer ciclo académico",
        "ciclo 3",
        "3er ciclo",
        "3er",
        "tercero"
    ],
    4: [
        "cuarto ciclo",
        "cuarto ciclo académico",
        "ciclo 4",
        "4to ciclo",
        "4to",
        "cuarto"
    ],
    5: [
        "quinto ciclo",
        "quinto ciclo académico",
        "ciclo 5",
        "5to ciclo",
        "5to",
        "quinto"
    ],
    6: [
        "sexto ciclo",
        "sexto ciclo académico",
        "ciclo 6",
        "6to ciclo",
        "6to",
        "sexto"
    ],
    7: [
        "séptimo ciclo",
        "séptimo ciclo académico",
        "ciclo 7",
        "7mo ciclo",
        "7mo",
        "séptimo"
    ],
    8: [
        "octavo ciclo",
        "octavo ciclo académico",
        "ciclo 8",
        "8vo ciclo",
        "8vo",
        "octavo"
    ],
    9: [
        "noveno ciclo",
        "noveno ciclo académico",
        "ciclo 9",
        "9no ciclo",
        "9no",
        "noveno"
    ],
    10: [
        "décimo ciclo",
        "décimo ciclo académico",
        "ciclo 10",
        "10mo ciclo",
        "10mo",
        "décimo"
    ],
}