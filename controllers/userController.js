import User from '../models/User.js';
// import { createError } from '../utils/error.js';

export const updateUser = async (req,res,next)=>{
    try{
        const updateUser= await User.findByIdAndUpdate(req.params.id, { $set:req.body});
        res.status(200).json(updateUser);

    }catch(err){
        console.log(err)
        next(err)
    }
}

export const deleteUser = async (req,res,next)=>{
    try{
        const deleteUser= await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");

    }catch(err){
        console.log(err)
        next(err)
    }
}

export const getUser = async (req,res,next)=>{
    try{
        const UserOne= await User.findById(req.params.id);
        res.status(200).json(UserOne);

    }catch(err){
        console.log(err)
        next(err)
    }
}

export const getAllUser = async (req,res,next)=>{
    try{
        const UserAll= await User.find();
        res.status(200).json(UserAll);

    }catch(err){
        console.log(err)
        next(err)
    }
}