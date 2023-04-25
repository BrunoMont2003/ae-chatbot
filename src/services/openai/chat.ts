import { openai } from "./config";

export const chat = async (message: string) => {
	const { data, statusText } = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [
			{
				content: message,
				role: "user",
			},
		],
	});
	console.log(statusText);
	return data.choices[0].message;
};
