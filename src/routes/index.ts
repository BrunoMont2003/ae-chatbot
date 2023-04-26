import { Express } from "express";
import { router as WebRouter } from "./web";
import { router as ApiRouter } from "./api";
import { router as OpenAIRouter } from "./openai_api";
import { router as WhatsappRouter } from "./whatsapp";

function loadRoutes(app: Express) {
	app.use("/api", ApiRouter);
	app.use("/", WebRouter);
	app.use("/openai", OpenAIRouter);
	app.use("/whatsapp", WhatsappRouter);
}

export { loadRoutes };
