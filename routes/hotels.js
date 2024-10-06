import express from 'express'
import { countByCity, createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from '../controllers/hotelController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router= express.Router();

//Create
router.post("/", verifyAdmin, createHotel)

//Update
router.put("/:id",verifyAdmin, updateHotel)

//Delete
router.delete("/:id",verifyAdmin, deleteHotel)

//get
router.get("/:id",getHotel)

//get All
router.get("/",getAllHotel)
router.get("/countByCity",countByCity)
router.get("/countByType",getAllHotel)

export default router;