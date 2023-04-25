import { Request, Response } from "express";
import { chat } from "../services/openai/chat";
import { handleAxiosError } from "../utils/handleError";
import { isAxiosError } from "axios";
const sendMessage = async (req: Request, res: Response) => {
	try {
		const { message } = req.body;
		const response = await chat(message);
		res.status(200).json({ response });
	} catch (error: unknown) {
		if (isAxiosError(error)) return handleAxiosError(error, res);
		return res.status(500).json({ error: "Something went wrong" });
	}
};

export default {
	sendMessage,
};
