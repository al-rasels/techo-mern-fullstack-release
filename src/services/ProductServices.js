const BrandModel = require("../models/BrandModel");
const CategoryModel = require("../models/CategoryModel");
const ProductSliderModel = require("../models/ProductSliderModel");
const ProductModel = require("../models/ProductModel");
const ProductDetailsModel = require("../models/ProductDetailsModel");
const ProductReviewModel = require("../models/ProductReviewModel");

const BrandListService = async (req, res) => {};
const CategoryListService = async (req, res) => {};
const SliderListService = async (req, res) => {};

const ListByBrandService = async (req, res) => {};
const ListByCategoryService = async (req, res) => {};
const ListBySimilarService = async (req, res) => {};
const ListByKeywordService = async (req, res) => {};
const ListByRemarkService = async (req, res) => {};
const DetailsService = async (req, res) => {};
const ReviewListService = async (req, res) => {};

module.exports = {
  BrandListService,
  CategoryListService,
  SliderListService,
  ListByBrandService,
  ListByCategoryService,
  ListBySimilarService,
  ListByKeywordService,
  ListByRemarkService,
  DetailsService,
  ReviewListService,
};
