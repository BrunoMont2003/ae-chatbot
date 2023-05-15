import { School } from "../models/school/school.model";

const schoolJsonToText = (school: School): string => {
    let textoFormateado = '';

    // Información de la escuela
    if (school.name) {
        textoFormateado += `Nombre de la escuela: ${school.name}\n`;
    }
    if (school.slug) {
        textoFormateado += `Slug: ${school.slug}\n`;
    }
    if (school.information) {
        textoFormateado += `Información: ${school.information}\n`;
    }

    // Periodos
    if (school.periods && school.periods.length > 0) {
        textoFormateado += '\nPeriodos:\n';
        for (const period of school.periods) {
            textoFormateado += `Año: ${period.year}\n`;
            textoFormateado += `Inicio: ${period.start.toLocaleDateString()}\n`;
            textoFormateado += `Fin: ${period.end.toLocaleDateString()}\n`;
            textoFormateado += `Semestre: ${period.semester}\n`;

            // Ciclos
            if (period.cycles && period.cycles.length > 0) {
                textoFormateado += '\nCiclos:\n';
                for (const cycle of period.cycles) {
                    textoFormateado += `Número: ${cycle.number}\n`;

                    // Materias
                    if (cycle.subjects && cycle.subjects.length > 0) {
                        textoFormateado += '\nMaterias:\n';
                        for (const subject of cycle.subjects) {
                            textoFormateado += `Nombre: ${subject.name}\n`;
                            textoFormateado += `Créditos: ${subject.credits}\n`;

                            if (subject.professor) {
                                textoFormateado += 'Profesor:\n';
                                textoFormateado += `Nombre: ${subject.professor.name}\n`;
                                if (subject.professor.profession) {
                                    textoFormateado += `Profesión: ${subject.professor.profession}\n`;
                                }
                            }

                            if (subject.summary) {
                                textoFormateado += `Resumen: ${subject.summary}\n`;
                            }

                            if (subject.type) {
                                textoFormateado += `Tipo: ${subject.type}\n`;
                            }

                            textoFormateado += '\n';
                        }
                    }
                }
            }
        }
    }

    // FAQs
    if (school.faqs && school.faqs.length > 0) {
        textoFormateado += '\nPreguntas frecuentes:\n';
        for (const faq of school.faqs) {
            if (faq.question) {
                textoFormateado += `Pregunta: ${faq.question}\n`;
            }
            if (faq.answer) {
                textoFormateado += `Respuesta: ${faq.answer}\n`;
            }
            textoFormateado += '\n';
        }
    }

    return textoFormateado;
}


export { schoolJsonToText };