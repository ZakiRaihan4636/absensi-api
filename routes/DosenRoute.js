import express from "express";
import {
  getDosens, store
} from "../controllers/DosenController.js";


const router = express.Router();


router.get('/dosens', getDosens);
router.post('/dosens', store)


export default router;