import { SchoolController } from "../../controllers";
import { Router } from "express";

const router: Router = Router();

router.get("/schools/:slug", SchoolController.getSchool);

export default router;
