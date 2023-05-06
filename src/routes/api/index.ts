import ChatRoutes from "./chat.routes"
import SchoolRoutes from "./school.routes";
import WebhookRoutes from "./webhook.routes";

import { Router } from "express";

const router = Router();

router.use(ChatRoutes);
router.use(SchoolRoutes);
router.use(WebhookRoutes);

export { router };
