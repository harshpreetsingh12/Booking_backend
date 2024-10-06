import Hotel from '../models/Hotel.js';
// import { createError } from '../utils/error.js';

export const createHotel = async (req,res,next)=>{
    const newHotel= new Hotel(req.body);
    try{
        const savedHotel= await newHotel.save()
        res.status(200).json(savedHotel);

    }catch(err){
        console.log(err)
        next(err)
    }
}

export const updateHotel = async (req,res,next)=>{
    try{
        const updateHotel= await Hotel.findByIdAndUpdate(req.params.id, { $set:req.body});
        res.status(200).json(updateHotel);

    }catch(err){
        console.log(err)
        next(err)
    }
}

export const deleteHotel = async (req,res,next)=>{
    try{
        const deleteHotel= await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");

    }catch(err){
        console.log(err)
        next(err)
    }
}

export const getHotel = async (req,res,next)=>{
    try{
        const HotelOne= await Hotel.findById(req.params.id);
        res.status(200).json(HotelOne);

    }catch(err){
        console.log(err)
        next(err)
    }
}

export const getAllHotel = async (req,res,next)=>{
    try{
        const HotelAll= await Hotel.find();
        res.status(200).json(HotelAll);

    }catch(err){
        console.log(err)
        next(err)
    }
}
export const countByCity = async (req,res,next)=>{
    try{
        const HotelAll= await Hotel.find();
        res.status(200).json(HotelAll);

    }catch(err){
        console.log(err)
        next(err)
    }
}