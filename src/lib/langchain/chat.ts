import { getChain } from "./config";
import { ChatService } from "../../services/app";

type ChatParams = {
	question: string;
	phone: string;
};
type ChatResponse = {
	text: string;
};
export const chat = async ({ question, phone }: ChatParams) => {
	// FInd the chat history
	const history = await ChatService.getHistory(phone);
	const chat_history = history?.map(({ question, answer }) => {
		return `${question ?? ""}${answer ?? ""}`;
	});
	console.log(chat_history);
	/* Ask it a question */
	const res = await (await getChain()).call({ question, chat_history: [] });
	console.log(res);
	/* Ask it a follow up question */
	// const chatHistory = question + res.text;
	// const followUpRes = await chain.call({
	//   question: "Was that nice?",
	//   chat_history: chatHistory,
	// });
	// console.log(followUpRes);
	return res as ChatResponse;
};
