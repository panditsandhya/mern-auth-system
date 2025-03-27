import express from "express";
import {signup, signin, googlein }  from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/googlein", googlein);

export default router;