import { ChatCompletionResponseMessageRoleEnum } from "openai";
import { ChatService, SchoolService } from "../../services/app";
import handleEscapeChars from "../../utils/handleEscapeChars";
import { openai } from "./config";
import { INSTRUCTIONS } from "../../constants/prompts";
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
	const jsonData = JSON.stringify((await SchoolService.getSchoolBySlug({ slug: "ing-sistemas" }))?.toJSON());
	const { data } = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [
			{
				content: INSTRUCTIONS,
				role: "system",
			},
			{
				content: jsonData,
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
