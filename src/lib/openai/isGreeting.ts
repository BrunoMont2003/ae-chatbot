import { GREETING } from "../../constants/prompts";
import { openai } from "./config";

type ChatParams = {
    message: string;
}

type isGreetingResponse = {
    isGreeting: boolean;
    response?: string;
}

export const isGreeting = async ({ message }: ChatParams): Promise<isGreetingResponse> => {
    // if the message is a greeting, return true
    const { data } = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Este es un mensaje para verificar si el mensaje es un saludo. Si el mensaje contiene "hola", "hola, que tal?", "buenos dias/tardes/noches" u otra expresión de saludo, la respuesta será "true". De lo contrario, la respuesta será "false".\n\nMensaje: ${message}\nRespuesta`,
        temperature: 0.7,
        max_tokens: 1,
    });

    const response = data.choices[0].text?.trim().toLocaleLowerCase();
    console.log("response: ", response);
    console.log("Total of tokens used: ", data.usage?.total_tokens ?? 0);
    const obj = {
        isGreeting: response !== "false",
        response: response !== "false" ? GREETING : undefined
    }
    return obj;
}