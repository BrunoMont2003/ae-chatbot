import { Request, Response } from "express";
import { handleAxiosError } from "../utils/handleError";
import { isAxiosError } from "axios";
import { chat } from "../services/langchain/chat";
const sendMessage = async (req: Request, res: Response) => {
	try {
		const { message } = req.body;
		const { text } = await chat({ question: message });
		res.status(200).json({ response: text });
	} catch (error: unknown) {
		if (isAxiosError(error)) return handleAxiosError(error, res);
		return res.status(500).json({ error: "Something went wrong" });
	}
};

export default {
	sendMessage,
};
