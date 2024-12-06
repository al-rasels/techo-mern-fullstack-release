const express = require("express");
const PrductController = require("../controllers/ProductController");
const router = express.Router();

//  Product routes

router.get("/ProductBrandList", PrductController.ProductBrandList);
router.get("/ProductCategoryList", PrductController.ProductCategoryList);
router.get("/ProductSliderList", PrductController.ProductSliderList);
router.get("/ProductListByBrand/:BrandID", PrductController.ProductListByBrand);
router.get(
  "/ProductListByCategory/:CategoryID",
  PrductController.ProductListByCategory
);
router.get(
  "/ProductListBySimilar/:CategoryID",
  PrductController.ProductListBySimilar
);
router.get(
  "/ProductListByKeyword/:Keyword",
  PrductController.ProductListByKeyword
);
router.get(
  "/ProductListByRemark/:Remark",
  PrductController.ProductListByRemark
);
router.get("/ProductDetails/:ProductID", PrductController.ProductDetails);
router.get("/ProductReviewList/:ProductID", PrductController.ProductReviewList);
router.get("/ProductReviewList/:ProductID", PrductController.ProductReviewList);

module.exports = router;
