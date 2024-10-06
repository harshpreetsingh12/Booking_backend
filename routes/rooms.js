import express from 'express'
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from '../controllers/roomController.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router= express.Router();


//Create
router.post("/:hotelid", verifyAdmin, createRoom)

//Update
router.put("/:id",verifyAdmin, updateRoom)

//Delete
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom)

//get
router.get("/:id",getRoom)

//get All
router.get("/",getAllRoom)

export default router;