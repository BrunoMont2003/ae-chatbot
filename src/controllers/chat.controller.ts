import { Request, Response } from "express";
import { handleAxiosError } from "../utils/handleError";
import { isAxiosError } from "axios";
import { chat } from "../lib/langchain/chat";
// import { chat as c } from "../lib/openai/chat"; // openai
import { ChatService } from "../services";
import { validate } from "../validators/send-question.schema";
const sendMessage = async (req: Request, res: Response) => {
	try {
		const { question, phone } = req.body;
		if (!validate({ question, phone }))
			return res.status(400).json(validate.errors);
		const { text: answer } = await chat({ question });
		// const answer = await c(question); // openai
		// save to db
		// if the phone number is not in the db, create a new chat
		const chatFound = await ChatService.findChatByPhone(phone);
		if (!chatFound)
			await ChatService.createChat({
				phone,
				messages: [
					{
						question,
						answer,
						createdAt: new Date(),
					},
				],
			});
		await ChatService.addMessageToChat(phone, {
			question,
			answer,
			createdAt: new Date(),
		});
		return res.status(200).json({ answer });
	} catch (error: unknown) {
		console.log(error);
		if (isAxiosError(error)) return handleAxiosError(error, res);
		return res.status(500).json({ error: "Something went wrong" });
	}
};

export default {
	sendMessage,
};
