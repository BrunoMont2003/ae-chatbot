import { AxiosError } from "axios";
import { Response } from "express";

const handleHttpError = (
	res: Response,
	message = "Algo salió mal",
	details: object = {},
	code = 400
) => {
	res.status(code);
	res.send({ error: message, details });
};

export const handleAxiosError = (error: unknown, res: Response) => {
	const { response } = error as AxiosError;
	res.status(response?.status || 500).json(response?.data);
};

export { handleHttpError };
