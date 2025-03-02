const {WishListService, SaveWishListService, RemoveWishListService} = require('../services/WishListServices')

exports.WishList = async (req, res) => {
    const result = await WishListService(req)
    return res.status(200).json(result)
}
exports.SaveWishList = async (req, res) => {
    const result = await SaveWishListService(req)
    return res.status(200).json(result)
}
exports.RemoveWishList = async (req, res) => {
    const result = await RemoveWishListService(req)
    return res.status(200).json(result)
}
