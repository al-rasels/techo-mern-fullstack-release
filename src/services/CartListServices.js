const CartModel=require('../models/CartModel')
const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId


const CartListService=async (req)=>{
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

        const data = await CartModel.aggregate([
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

const SaveCartListService=async (req)=>{
    try{
        const user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;

        await  CartModel.create(reqBody)
        return {status: "success",message: "Cart List Save Success"}
    }catch (err) {
        return {status:'fail',message:"Something Went Wrong with"+ err.message}
    }
}

const UpdateCartListService=async (req)=>{
    try{
        const user_id=req.headers.user_id;
        const cartID=req.params.cartID;
        let reqBody=req.body;

        await CartModel.updateOne({_id:cartID,userID:user_id}, {$set:reqBody})
return {status: "success",message: "Cart List Update Success"}
    }catch (err) {
        return {status:'fail',message:"Something Went Wrong with"+ err.message}
    }
}

const RemoveCartListService=async (req)=>{
    try{
        const user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
        await  CartModel.deleteOne(reqBody)

        return {status: "success",message: "Cart List Remove Success"}
    }catch (err) {
        return {status:'fail',message:"Something Went Wrong with"+ err.message}
    }
}


module.exports = {
CartListService,RemoveCartListService,SaveCartListService,UpdateCartListService
}