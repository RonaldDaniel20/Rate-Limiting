import { Router } from "express";
import { healthCheck } from "../Controllers/health";
import { getNotesStudent } from "../Controllers/notes";


const router = Router();

router.get("/health", healthCheck);
router.post("/notes", getNotesStudent);

export default router;
