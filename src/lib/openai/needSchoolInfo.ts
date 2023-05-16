import { openai } from "./config";

type ChatParams = {
    message: string;
}

type needSchoolInfoResponse = {
    response: boolean;
}

export const needSchoolInfo = async ({ message }: ChatParams): Promise<needSchoolInfoResponse> => {
    // if the message is a greeting, return true
    const { data } = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Mensaje: "Estoy buscando información específica sobre los cursos. Quisiera saber cómo matricularme y qué docentes enseñan cada curso en qué ciclo."\nRespuesta: "true"\nMensaje: "¡Hola! ¿Cómo estás? ¿Qué tal ha sido tu día?"\nRespuesta: "false"\nMensaje: ${message}\nRespuesta`,
        temperature: 0.7,
        max_tokens: 1,
    });

    const response = data.choices[0].text?.trim().toLocaleLowerCase();
    console.log("Total of tokens used: ", data.usage?.total_tokens ?? 0);
    const obj = {
        response: response === "true",
    }
    console.log("need school info: ", obj);
    return obj;
}