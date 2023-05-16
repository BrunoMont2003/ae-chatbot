import { Request, Response } from "express";
import { handleAxiosError } from "../utils/handleError";
import { isAxiosError } from "axios";
import { SchoolService } from "../services/app";

const getSchool = async (req: Request, res: Response) => {
	try {
		const { slug } = req.params;
		const school = await SchoolService.getSchoolFaqs({ slug });
		return res.status(200).json(school);
	} catch (error: unknown) {
		console.log(error);
		if (isAxiosError(error)) return handleAxiosError(error, res);
		return res.status(500).json({ error: "Something went wrong" });
	}
};

export default {
	getSchool,
};
