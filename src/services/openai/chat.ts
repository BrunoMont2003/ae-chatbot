import handleEscapeChars from "../../utils/handleEscapeChars";
import { openai } from "./config";
import fs from "fs";
const getTextFromFile = (path: string) => {
	return fs.readFileSync(path, "utf8");
};

export const chat = async (message: string) => {
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
			{
				content: message,
				role: "user",
			},
		],
	});
	return handleEscapeChars(data.choices[0].message?.content || "");
};
