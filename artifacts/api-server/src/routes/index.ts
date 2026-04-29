import { Router, type IRouter } from "express";
import healthRouter from "./health";
import authRouter from "./auth";
import quizRouter from "./quiz";
import adminRouter from "./admin";

const router: IRouter = Router();

router.use(healthRouter);
router.use(authRouter);
router.use("/quiz", quizRouter);    // ← ПРОМЕНА
router.use("/admin", adminRouter);  // ← провери да ли admin već ima prefiks

export default router;
