import { Response, Router } from "express";

const router: Router = Router();

router.get("/", (_, res: Response) => {
	res.status(200).json({
		msg: "Access from WhatsApp API routes",
	});
});

export { router };
