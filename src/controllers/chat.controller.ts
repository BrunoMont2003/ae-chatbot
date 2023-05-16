import { Request, Response } from "express";
import { handleAxiosError } from "../utils/handleError";
import { isAxiosError } from "axios";
import { chat } from "../lib/openai/chat"; // openai
import { ChatService } from "../services/app";
import { sendMessageToWhatsapp } from "../services/external/whatsapp.service";

const sendMessage = async (req: Request, res: Response) => {
	try {
		const { question, phone } = req.body;
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
		else
			await ChatService.addMessageToChat(phone, {
				question,
				answer,
				createdAt: new Date(),
			});
		// Send message to whatsapp number
		const wsp_res = await sendMessageToWhatsapp({ phone, text: answer })
		if (wsp_res.status !== 200) throw wsp_res;
		return res.status(200).json({ answer });
	} catch (error: unknown) {
		console.log(error);
		if (isAxiosError(error)) return handleAxiosError(error, res);
		return res.status(500).json({ error: "Something went wrong" });
	}
};

const getChats = async (_: Request, res: Response) => {
	try {
		const chats = await ChatService.getChats();
		return res.status(200).json(chats);
	} catch (error: unknown) {
		console.log(error);
		if (isAxiosError(error)) return handleAxiosError(error, res);
		return res.status(500).json({ error: "Something went wrong" });
	}
}

export default {
	sendMessage,
	getChats
};
