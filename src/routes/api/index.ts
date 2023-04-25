import ChatRoutes from "./chat.routes";

import { Router } from "express";

const router = Router();

router.use(ChatRoutes);

export { router };
