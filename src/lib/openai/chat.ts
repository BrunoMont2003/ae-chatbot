import { ChatCompletionResponseMessageRoleEnum } from "openai";
import { ChatService } from "../../services";
import handleEscapeChars from "../../utils/handleEscapeChars";
import { openai } from "./config";
import fs from "fs";
const getTextFromFile = (path: string) => {
	return fs.readFileSync(path, "utf8");
};
type ChatParams = {
	question: string;
	phone: string;
};
export const chat = async ({ question, phone }: ChatParams) => {
	// FInd the chat history
	const history = await ChatService.getHistory(phone);
	const chat_history: {
		content: string;
		role: ChatCompletionResponseMessageRoleEnum;
	}[] = [];
	history?.map(({ question, answer }) => {
		chat_history.push({
			content: question ?? "",
			role: "user",
		});

		chat_history.push({
			content: answer ?? "",
			role: "assistant",
		});
	});
	console.log(chat_history);
	const informationData = getTextFromFile("text.txt");
	const { data } = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [
			{
				content: informationData,
				role: "system",
			},
			{
				content:
					"Tú eres el asistente virtual de cada una de las escuelas académicas de la universidad nacional de trujillo. Te encargas de responder las dudas o inquietudes de los estudiantes acerca de cosas de la universidad. Limita tus respuestas con solo la información que se te ha sido proporcionada.",
				role: "system",
			},
			// insert chat history here
			...(chat_history ?? []),
			{
				content: question,
				role: "user",
			},
		],
	});
	return handleEscapeChars(data.choices[0].message?.content || "");
};
