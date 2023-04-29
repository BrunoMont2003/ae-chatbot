import { Request, Response } from "express";
import { handleAxiosError } from "../utils/handleError";
import { isAxiosError } from "axios";
import { chat } from "../lib/openai/chat"; // openai
import { ChatService } from "../services";
import { validate } from "../validators/send-question.schema";
import {sendResponse, getTextMessageInput} from "../utils/sendResponse";

const sendMessage = async (req: Request, res: Response) => {
	try {
		const { question, phone } = req.body;
		if (!validate({ question, phone }))
			return res.status(400).json(validate.errors);
		const answer = await chat({ phone, question }); // openai
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
		
		// Send message to whatsapp number
		var data = getTextMessageInput(phone, answer);
		sendResponse(data);

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
