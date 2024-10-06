import express from 'express'
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/userController.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';
const router= express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) =>{
//     res.send("hello user you are logged in")
// })

// router.get("/checkUser/:id", verifyUser, (req, res, next) =>{
//     res.send("hello user you are logged in and you can delete your account")
// })
// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) =>{
//     res.send("hello Admin you are logged in and you can delete all account")
// })

//Update
router.put("/:id",verifyUser, updateUser)

//Delete
router.delete("/:id",verifyUser, deleteUser)

//get
router.get("/:id",verifyUser, getUser)

//get All
router.get("/",verifyAdmin, getAllUser)

export default router;