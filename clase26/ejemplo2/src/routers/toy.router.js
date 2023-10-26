import { Router } from "express";
import { create, getAll } from "../controllers/toy.controller.js";

const router = Router()

router.get('/', getAll)
router.post('/', create)

export default router