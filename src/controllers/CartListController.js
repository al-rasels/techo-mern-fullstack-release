const {CartListService,RemoveCartListService,SaveCartListService,UpdateCartListService}=require('../services/CartListServices')

exports.CartList=async (req, res)=>{
    const result = await CartListService(req)
    return res.status(200).json(result);
}
exports.SaveCartList=async (req, res)=>{
    const result = await SaveCartListService(req)
    return res.status(200).json(result);
}
exports.UpdateCartList=async (req, res)=>{
    const result = await UpdateCartListService(req)
    return res.status(200).json(result);
}
exports.RemoveCartList=async (req, res)=>{
    const result = await RemoveCartListService(req)
    return res.status(200).json(result);
}
