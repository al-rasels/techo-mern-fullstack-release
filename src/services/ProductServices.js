const mongoose = require("mongoose");

const BrandModel = require("../models/BrandModel");
const CategoryModel = require("../models/CategoryModel");
const ProductSliderModel = require("../models/ProductSliderModel");
const ProductModel = require("../models/ProductModel");
const DetailsModel = require("../models/ProductDetailsModel");
const ReviewModel = require("../models/ReviewModel");

const ObjectId = mongoose.Types.ObjectId;

const BrandListService = async () => {
    try {
        const data = await BrandModel.find();
        return {status: "success", data: data};
    } catch (err) {
        return {status: "fail", data: err}.toString();
    }
};
const CategoryListService = async () => {
    try {
        const data = await CategoryModel.find();
        return {status: "success", data: data};
    } catch (err) {
        return {status: "fail", data: err}.toString();
    }
};
const SliderListService = async () => {
    try {
        const data = await ProductSliderModel.find();
        return {status: "success", data: data};
    } catch (err) {
        return {status: "fail", data: err}.toString();
    }
};

const ListByBrandService = async (req) => {
    try {
        const BrandID = new ObjectId(req.params.BrandID);
        const MatchStage = {
            $match: {
                brandID: BrandID,
            },
        };
        const JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };
        const JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };
        const UnwindBrandStage = {$unwind: "$brand"};
        const UnwindCategoryStage = {$unwind: "$category"};
        const ProjectionStage = {
            $project: {brand_id: 0, category_id: 0, categoryID: 0, brandID: 0},
        };

        const data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage,
        ]);
        return {status: "success", data: data};
    } catch (err) {
        return {status: "fail", data: err}.toString();
    }
};
const ListByCategoryService = async (req) => {
    try {
        const CategoryID = new ObjectId(req.params.CategoryID);
        const MatchStage = {
            $match: {
                categoryID: CategoryID,
            },
        };
        const JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };
        const JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };
        const UnwindBrandStage = {$unwind: "$brand"};
        const UnwindCategoryStage = {$unwind: "$category"};
        const ProjectionStage = {
            $project: {brand_id: 0, category_id: 0, categoryID: 0, brandID: 0},
        };

        const data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage,
        ]);
        return {status: "success", data: data, MatchStage};
    } catch (err) {
        return {status: "fail", data: err}.toString();
    }
};
const ListByRemarkService = async (req) => {
    try {
        const Remark = req.params.Remark;

        const MatchStage = {
            $match: {
                remark: Remark,
            },
        };

        const JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };
        const JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };
        const UnwindBrandStage = {$unwind: "$brand"};
        const UnwindCategoryStage = {$unwind: "$category"};
        const ProjectionStage = {
            $project: {brand_id: 0, category_id: 0, categoryID: 0, brandID: 0},
        };

        const data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage,
        ]);
        return {status: "success", data: data};
    } catch (err) {
        return {status: "fail", data: err}.toString();
    }
};

const ListBySimilarService = async (req) => {
    try {
        const CategoryID = new ObjectId(req.params.CategoryID);
        const MatchStage = {
            $match: {
                categoryID: CategoryID,
            },
        };

        const limitStage = {$limit: 20};

        const JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };
        const JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };
        const UnwindBrandStage = {$unwind: "$brand"};
        const UnwindCategoryStage = {$unwind: "$category"};
        const ProjectionStage = {
            $project: {brand_id: 0, category_id: 0, categoryID: 0, brandID: 0},
        };

        const data = await ProductModel.aggregate([
            MatchStage,
            limitStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage,
        ]);
        return {status: "success", data: data};
    } catch (err) {
        return {status: "fail", data: err}.toString();
    }
};
const ListByKeywordService = async (req) => {
    try {
        // "i" is option for case insensitive enable
        const SearchRegex = {$regex: req.params.Keyword, $options: "i"};
        const SearchParams = [{title: SearchRegex}, {shortDes: SearchRegex}];
        const SearchQuery = {$or: SearchParams};

        const MatchStage = {
            $match: SearchQuery,
        };
        const JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };
        const JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };
        const UnwindBrandStage = {$unwind: "$brand"};
        const UnwindCategoryStage = {$unwind: "$category"};
        const ProjectionStage = {
            $project: {brand_id: 0, category_id: 0, categoryID: 0, brandID: 0},
        };

        const data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage,
        ]);
        return {status: "success", data: data};
    } catch (err) {
        return {status: "fail", data: err}.toString();
    }
};

const DetailsService = async (req) => {
    try {
        const ProductID = new ObjectId(req.params.ProductID);
        const MatchStage = {
            $match: {
                _id: ProductID,
            },
        };
        const JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };
        const JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };
        const JoinWithDetailsStage = {
            $lookup: {
                from: "productdetails",
                localField: "_id",
                foreignField: "productID",
                as: "details",
            },
        };
        const UnwindBrandStage = {$unwind: "$brand"};
        const UnwindCategoryStage = {$unwind: "$category"};
        const UnwindDetailsStage = {$unwind: "$details"};
        const ProjectionStage = {
            $project: {brand_id: 0, category_id: 0, categoryID: 0, brandID: 0},
        };

        const data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            JoinWithDetailsStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            UnwindDetailsStage,
            ProjectionStage,
        ]);

        return {status: "success", data: data};
    } catch (err) {
        return {status: "fail", data: err}.toString();
    }
};
const ReviewListService = async (req) => {
    try {
        const ProductID = new ObjectId(req.params.ProductID);
        const MatchStage = {
            $match: {
                productID: ProductID,
            },
        };

        const JoinWithProfileStage = {
            $lookup: {
                from: "profiles",
                localField: "userID",
                foreignField: "userID",
                as: "profile",
            },
        };
        const UnwindProfileStage = {$unwind: "$profile"};
        const ProjectionStage = {
            $project: {des: 1, rating: 1, "profile.cus_name": 1},
        };
        const data = await ReviewModel.aggregate([
            MatchStage,
            JoinWithProfileStage,
            UnwindProfileStage,
            ProjectionStage,
        ]);
        return {status: "success", data: data};
    } catch (err) {
        return {status: "fail", data: err}.toString();
    }
};

const CreateReviewService = async (req) => {
    try {
        const user_id = req.headers.user_id;
        const reqBody = req.body;
        const data = await ReviewModel.create({
            productID: reqBody["productID"],
            userID: user_id,
            des: reqBody["des"],
            rating: reqBody["rating"],
        });
        return {status: "success", data: data};
    } catch (err) {
        return {status: "fail", data: err}.toString();
    }
};

const ListByFilterService = async (req) => {
    try {
        let matchConditions = {};
        if (req.body["categoryID"]) {
            matchConditions.categoryID = new ObjectId(req.body["categoryID"]);
        }
        if (req.body["brandID"]) {
            matchConditions.brandID = new ObjectId(req.body["brandID"]);
        }
        let MatchStage = {$match: matchConditions};

        let AddFieldsStage = {
            $addFields: {numericPrice: {$toInt: "$price"}},
        };
        let priceMin = parseInt(req.body["priceMin"]);
        let priceMax = parseInt(req.body["priceMax"]);
        let PriceMatchConditions = {};
        if (!isNaN(priceMin)) {
            PriceMatchConditions["numericPrice"] = {$gte: priceMin};
        }
        if (!isNaN(priceMax)) {
            PriceMatchConditions["numericPrice"] = {
                ...(PriceMatchConditions["numericPrice"] || {}),
                $lte: priceMax,
            };
        }
        let PriceMatchStage = {$match: PriceMatchConditions};

        let JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };
        let JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };
        let UnwindBrandStage = {$unwind: "$brand"};
        let UnwindCategoryStage = {$unwind: "$category"};
        let ProjectionStage = {
            $project: {
                "brand._id": 0,
                "category._id": 0,
                categoryID: 0,
                brandID: 0,
            },
        };

        let data = await ProductModel.aggregate([
            MatchStage,
            AddFieldsStage,
            PriceMatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage,
        ]);
        return {status: "success", data: data};
    } catch (e) {
        return {status: "fail", data: e}.toString();
    }
};

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
    CreateReviewService,
    ListByFilterService,
};
