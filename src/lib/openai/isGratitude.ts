import { THANKS, THANKS_PHRASES } from "../../constants/prompts";
import { openai } from "./config";

type ChatParams = {
    message: string;
}

type isGratitudeResponse = {
    isGratitude: boolean;
    response?: string;
}

export const isGratitude = async ({ message }: ChatParams): Promise<isGratitudeResponse> => {
    const { data } = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Este es un mensaje para verificar si el mensaje es una expresión de agradecimiento. Si el mensaje contiene ${THANKS_PHRASES.join(',')} o alguna otra expresion positiva entonces la respuesta será "true". De lo contrario, la respuesta será "false".\n\nMensaje: ${message}\nRespuesta:`,
        temperature: 0.7,
        max_tokens: 1,
    });

    const response = data.choices[0].text?.trim().toLocaleLowerCase();
console.log(THANKS_PHRASES.join(','))
    
    
    const obj = {
        isGratitude: response === "true",
        response: response === "true" ? THANKS : undefined
    };
    console.log("es gratitud: ", obj);

    return obj;
}
