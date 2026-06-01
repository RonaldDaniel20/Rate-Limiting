"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const health_1 = require("../Controllers/health");
const notes_1 = require("../Controllers/notes");
const router = (0, express_1.Router)();
router.get("/health", health_1.healthCheck);
router.get("/notes", notes_1.getNotesStudent);
exports.default = router;
