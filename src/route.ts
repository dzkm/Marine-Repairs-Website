import { Router } from "express";
import * as controller from "./controller";

const router = Router();

router.get("/", controller.getHomeController);
router.get("/gallery", controller.getGalleryController);
router.post("/send_contact", controller.postSendContactController);

export default router;
