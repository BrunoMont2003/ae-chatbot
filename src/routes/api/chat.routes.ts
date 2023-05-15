import { ChatController } from "../../controllers";
import { Router } from "express";
import { validationPipe } from "../../middlewares/validation";
import { validate } from "../../validators/send-question.schema";

const router: Router = Router();

router.post("/chat", validationPipe(validate), ChatController.sendMessage);

export default router;
