import { getChain } from "./config";

type ChatParams = {
	question: string;
};
type ChatResponse = {
	text: string;
};
export const chat = async ({ question }: ChatParams) => {
	/* Ask it a question */
	// const question = "Sabes qué profesor enseña el curso de ing. de datos II?";
	const res = await (await getChain()).call({ question, chat_history: [] });
	/* Ask it a follow up question */
	// const chatHistory = question + res.text;
	// const followUpRes = await chain.call({
	//   question: "Was that nice?",
	//   chat_history: chatHistory,
	// });
	// console.log(followUpRes);
	return res as ChatResponse;
};
