import { School } from "../models/school/school.model";

const schoolJsonToText = (school: School): string => {
    let textoFormateado = '';

    // Información de la escuela
    if (school.name) {
        textoFormateado += `A continuación, información sobre la escuela de ${school.name}\n`;
    }
    if (school.information) {
        textoFormateado += `${school.information}\n`;
    }

    // Periodos
    if (school.periods && school.periods.length > 0) {
        textoFormateado += '\nA continuación se muestran los ciclos de los ' + school.periods.length + '  periodos registrados e información relacionada a ello :\n';
        for (const period of school.periods) {
            textoFormateado += `Periodo ${period.year}-${period.semester}: Inicio: ${period.start.toLocaleDateString()} - Fin: ${period.end.toLocaleDateString()}\n`

            // Ciclos
            if (period.cycles && period.cycles.length > 0) {
                textoFormateado += `\nA continuación se listan los Ciclos del periodo ${period.year}-${period.semester}:\n`;
                for (const cycle of period.cycles) {
                    textoFormateado += `Ciclo ${cycle.number}:`;

                    // Materias
                    if (cycle.subjects && cycle.subjects.length > 0) {
                        textoFormateado += `\nLas Materias del ciclo ${cycle.number} son:\n`;
                        for (const subject of cycle.subjects) {
                            textoFormateado += `${subject.name}, vale ${subject.credits} créditos `;

                            if (subject.professor) {
                                textoFormateado += `y lo dicta el docente ${subject.professor.name}`;
                                if (subject.professor.profession) {
                                    textoFormateado += `quien es ${subject.professor.profession}\n`;
                                }
                            }

                            if (subject.type) {
                                textoFormateado += ` y es un curso ${subject.type == 'especialidad' ? 'de' : ''} ${subject.type}`;
                            }

                            textoFormateado += '\n';
                        }
                        textoFormateado += '\n';
                    }
                }
            }
            textoFormateado += '\n';

        }
    }

    // FAQs
    if (school.faqs && school.faqs.length > 0) {
        textoFormateado += '\nPreguntas frecuentes:\n';
        for (const faq of school.faqs) {
            if (faq.question && faq.answer) {
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