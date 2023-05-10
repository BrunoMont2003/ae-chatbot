import { ChatCompletionResponseMessageRoleEnum } from "openai";
import { ChatService, SchoolService } from "../../services/app";
import handleEscapeChars from "../../utils/handleEscapeChars";
import { openai } from "./config";
import { INSTRUCTIONS } from "../../constants/prompts";
import { Message } from "../../models/chat/message.model";
import schoolJsonToText from "../../utils/schoolJsonToText";
import { School } from "../../models/school/school.model";
type ChatParams = {
	question: string;
	phone: string;
};
export const chat = async ({ question, phone }: ChatParams) => {
	let history: Message[] | null = [];
	// find the last message
	const lastMessage = await ChatService.getLastMessage(phone);
	// if the last message was delivered at least 5 hours ago, set the history to a empty array
	if (lastMessage?.createdAt && lastMessage.createdAt.getTime() + 1000 * 60 * 60 * 5 < Date.now()) {
		history = [];
	}
	else {
		// FInd the chat history
		history = await ChatService.getHistory(phone);
	}
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
	const schoolData = await SchoolService.getSchoolBySlug({ slug: "ing-sistemas" })
	const schoolText = schoolJsonToText(schoolData?.toJSON() as School);
	const { data } = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [
			{
				content: INSTRUCTIONS,
				role: "system",
			},
			{
				content: schoolText,
				role: "system",
			},
			// insert chat history here
			...(chat_history ?? []),
			{
				content: question,
				role: "user",
			},
		],
		temperature: 0.2,
	},
	);
	console.log("Total of tokens used: ", data.usage?.total_tokens ?? 0);
	return handleEscapeChars(data.choices[0].message?.content || "");
};
