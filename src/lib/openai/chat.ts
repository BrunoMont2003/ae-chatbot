import { ChatCompletionResponseMessageRoleEnum } from "openai";
import { ChatService } from "../../services/app";
import handleEscapeChars from "../../utils/handleEscapeChars";
import { openai } from "./config";
import fs from "fs";
import { INSTRUCTIONS } from "../../constants/prompts";
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
	const informationData = getTextFromFile("text.txt");
	const { data } = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [
			{
				content: informationData,
				role: "system",
			},
			{
				content:INSTRUCTIONS,
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
