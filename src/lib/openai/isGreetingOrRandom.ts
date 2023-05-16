import { GREETING } from "../../constants/prompts";
import { openai } from "./config";

type ChatParams = {
    message: string;
}

type isGreetingOrRandomResponse = {
    isGreeting: boolean;
    response?: string;
}

export const isGreetingOrRandom = async ({ message }: ChatParams): Promise<isGreetingOrRandomResponse> => {
    // if the message is a greeting, return true
    const { data } = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `This is a prompt to check if the message is a greeting or not. If it is a greeting,no-sense comment, joke or an insult the response will be "true". If it is not a greeting, the response will be "false".\n\nMessage: ${message}\nResponse:`,
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