const WishModel=require('../models/WishModel')
const mongoose = require("mongoose");

const ObjectID = mongoose.Types.ObjectId

const WishListServices=async (req)=>{
    try {
const user_id =new ObjectID(req.headers.user_id)
        const matchState={ $match: {userID: user_id}}

        const JoinProductStage={
            // from product collection we are matching this documents productID
            // with product collection's _id getting them as product fields
    $lookup:{from:"products",localField:"productID",foreignField:"_id",as:"product"} }
            // unwind/objectifying product field from array
        const unwindProductStage={$unwind:"$product"}

        const JoinBrandStage={
            // from brands collection we are matching this documents product.brandID
            // with brands collection's _id getting them as brand fields
    $lookup:{from:"brands",localField:"product.brandID",foreignField:"_id",as:"brand"} }
            // unwind/objectifying brand field from array
        const unwindBrandStage={$unwind:"$brand"}

        const JoinCategoryStage={
            // from brands collection we are matching this documents product.brandID
            // with brands collection's _id getting them as brand fields
    $lookup:{from:"categories",localField:"product.categoryID",foreignField:"_id",as:"category"} }
            // unwind/objectifying brand field from array
        const unwindCategoryStage={$unwind:"$category"}
 const projectionStage={$project: {'_id': 0, 'userID':0,'createdAt':0,'updatedAt':0,'product._id':0,'product.categoryID':0,'product.brandID':0,'brandID':0,'category._id':0}}

        const data = await WishModel.aggregate([
            matchState,
            JoinProductStage,
            JoinBrandStage,
            JoinCategoryStage,
            unwindProductStage,
            unwindBrandStage,
            unwindCategoryStage,
            projectionStage,

        ])

        return {status:'success',data:data}
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