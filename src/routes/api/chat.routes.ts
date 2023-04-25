import { ChatController } from "../../controllers";
import { Router } from "express";

const router: Router = Router();

router.post("/chat", ChatController.sendMessage);

export default router;
