import { Router, type IRouter } from "express";
import healthRouter from "./health";
import authRouter from "./auth";
import quizRouter from "./quiz";
import adminRouter from "./admin";

const router: IRouter = Router();

router.use(healthRouter);
router.use(authRouter);
router.use("/quiz", quizRouter);    // ← ДОДАЈ /quiz
router.use("/admin", adminRouter);

export default router;
