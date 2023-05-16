import { ChatController } from "../../controllers";
import { Router } from "express";
import { validationPipe } from "../../middlewares/validation";
import { validate } from "../../validators/send-question.schema";
import { formatPhoneNumber } from "../../middlewares/app";

const router: Router = Router();

router.post("/chat", formatPhoneNumber, validationPipe(validate), ChatController.sendMessage);
router.get("/chats", ChatController.getChats);
export default router;
