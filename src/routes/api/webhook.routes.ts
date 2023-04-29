import { Router } from "express";
import { WebhookController } from "../../controllers";
const router: Router = Router();

router.post("/webhook", WebhookController.post);
router.get("/webhook", WebhookController.get);

export default router;
