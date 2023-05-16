import { ChatCompletionResponseMessageRoleEnum } from "openai";
import { ChatService, SchoolService } from "../../services/app";
import handleEscapeChars from "../../utils/handleEscapeChars";
import { openai } from "./config";
import { INSTRUCTIONS } from "../../constants/prompts";
import { Message } from "../../models/chat/message.model";
import { needSchoolFaqs, needSchoolInfo, schoolJsonToText } from "../../helpers/school";
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
	// check if the question needs faq
	let schoolText = "";
	const nsf = needSchoolFaqs(question);
	if (nsf) {
		const schoolData = await SchoolService.getSchoolFaqs({ slug: "ing-sistemas" })
		schoolText = schoolJsonToText(schoolData?.toJSON() as School);
	}
	// check if the question needs school info
	const nsi = needSchoolInfo(question);
	if (nsi) {
		const schoolData = await SchoolService.getSchoolBySlug({ slug: "ing-sistemas" })
		schoolText += schoolJsonToText(schoolData?.toJSON() as School);
	}
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
		temperature: 0.1,
	},
	);
	console.log("Total of tokens used: ", data.usage?.total_tokens ?? 0);
	return handleEscapeChars(data.choices[0].message?.content || "");
};
