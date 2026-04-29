import { Router, type IRouter } from "express";
import healthRouter from "./health";
import authRouter from "./auth";
import quizRouter from "./quiz";
import adminRouter from "./admin";

const router: IRouter = Router();

router.use(healthRouter);
router.use(authRouter);
router.use("/quiz", quizRouter);   // ← додај /quiz
router.use("/admin", adminRouter); // ← провери да ли admin већ има префикс

export default router;
