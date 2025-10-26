import express from "express";
import {
  addNote,
  getNotes,
  updateNote,
  deleteNote,
} from "../controllers/notes.controllers.js";
import protect from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/").post(protect, addNote).get(protect, getNotes);

router.route("/:id").put(protect, updateNote).delete(protect, deleteNote);

export default router;
