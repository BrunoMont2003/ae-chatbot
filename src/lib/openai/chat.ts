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
	const jsonData = JSON.stringify((await SchoolService.getSchoolBySlug({ slug: "ing-sistemas" }))?.toJSON());
	const { data,  } = await openai.createChatCompletion({
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
	console.log("Total of tokens used: ", data.usage?.total_tokens ?? 0);
	return handleEscapeChars(data.choices[0].message?.content || "");
};
