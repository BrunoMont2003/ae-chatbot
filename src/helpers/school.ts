import { FAQ_KEYWORDS, KEYWORDS } from "../constants/prompts";
import { School } from "../models/school/school.model";
const schoolJsonToText = (school: School): string => {
    let textoFormateado = '';

    // Información de la escuela
    if (school.name) {
        textoFormateado += `A continuación, información sobre la escuela de ${school.name}.`;
    }
    if (school.information) {
        textoFormateado += `${school.information}.`;
    }

    // Periodos
    if (school.periods && school.periods.length > 0) {
        textoFormateado += 'A continuación se muestran los ciclos de los ' + school.periods.length + '  periodos registrados e información relacionada a ello :.';
        for (const period of school.periods) {
            textoFormateado += `Periodo ${period.year}-${period.semester}: Inicio: ${period.start.toLocaleDateString()} - Fin: ${period.end.toLocaleDateString()}.`

            // Ciclos
            if (period.cycles && period.cycles.length > 0) {
                textoFormateado += `A continuación se listan los Ciclos del periodo ${period.year}-${period.semester}:.`;
                for (const cycle of period.cycles) {
                    textoFormateado += `Ciclo ${cycle.number}:`;

                    // Materias
                    if (cycle.subjects && cycle.subjects.length > 0) {
                        textoFormateado += `Las Materias del ciclo ${cycle.number} son:.`;
                        for (const subject of cycle.subjects) {
                            textoFormateado += `${subject.name}, vale ${subject.credits} créditos `;

                            if (subject.professor) {
                                textoFormateado += `y lo dicta el docente ${subject.professor.name}`;
                                if (subject.professor.profession) {
                                    textoFormateado += `quien es ${subject.professor.profession}.`;
                                }
                            }

                            if (subject.type) {
                                textoFormateado += ` y es un curso ${subject.type == 'especialidad' ? 'de' : ''} ${subject.type}`;
                            }

                            textoFormateado += '.';
                        }
                        textoFormateado += '.';
                    }
                }
            }
            textoFormateado += '.';

        }
    }

    // FAQs
    if (school.faqs && school.faqs.length > 0) {
        textoFormateado += '.Preguntas frecuentes:.';
        for (const faq of school.faqs) {
            if (faq.question && faq.answer) {
                textoFormateado += `Pregunta: ${faq.question}.`;
            }
            if (faq.answer) {
                textoFormateado += `Respuesta: ${faq.answer}.`;
            }
            textoFormateado += '.';
        }
    }

    return textoFormateado;
}

const needSchoolInfo = (message: string): boolean => {
    for (const keyword of KEYWORDS) {
        if (message.includes(keyword.toLocaleLowerCase())) {
            console.log('Si se necesita la data de escuela');
            return true;
        }
    }

    return false;
}

const needSchoolFaqs = (message: string): boolean => {
    for (const keyword of FAQ_KEYWORDS) {
        if (message.includes(keyword.toLocaleLowerCase())) {
            console.log('Si se necesitan las faqs');
            return true;
        }
    }

    return false;
}

// const needsCycleData = (message: string): {cycle: number, bool: boolean} => {

//     for (const cycle in CYCLES_EXPRESSIONS) {
//         if (message.includes(cycle)) {
//             console.log('Si se necesita la data de ciclo');
//             return {cycle: CYCLES_EXPRESSIONS.indexOf(cycle) + 1, bool: true};
//         }
//     }

//     return {cycle: 0, bool: false};

// }


export { schoolJsonToText, needSchoolInfo, needSchoolFaqs };