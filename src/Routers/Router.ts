import { Router } from "express";
import { BaseController } from "../Controllers/BaseController";
import { TestController } from "../Controllers/TestController";
import log from "../Logger/logger";

export const mainRouter : Router = Router();
const Controllers :BaseController[] = [TestController.instance];
for (const controller of Controllers) {
    mainRouter.use(`/${controller.name}`,controller.router);
}
