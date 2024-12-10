const WishModel=require('../models/WishModel')
const WishListServices=async (req)=>{
    try {


    } catch (error) {
        console.error(error);
    }
}

const SaveWishListService=async (req)=> {
    try{
    const user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id
    WishModel.updateOne(reqBody,{$set:reqBody},{upsert:true})
    return {status:'success',message:'Wishlist saved successfully'}
    }catch (err){
        return {status:'error',message:'Failed to save wishlist'}
    }
    }
const RemoveWishListService=async (req)=>{
    try{
        const user_id = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userID = user_id
        WishModel.deleteOne(reqBody)
        return {status:'success',message:'Wishlist deleted successfully'}
    }catch (err){
        return {status:'error',message:'Failed to delete wishlist'}
    }
}

module.exports ={SaveWishListService,WishListServices,RemoveWishListService}