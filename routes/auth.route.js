import { Router } from "express";

const router = Router();

router.get('/register', register);
router.get('/login', login);

export default authRouter;