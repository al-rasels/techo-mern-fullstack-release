const FeaturesModel = require('../models/FeaturesModel')
const LegalModel = require('../models/LegalModel')

const FeaturesListService = async (req) => {
    try {
        const data = await FeaturesModel.find()
        return {status: 'success', data: data}

    } catch (err) {
        return {status: 'error', message: 'Error reading features'}
    }

}

const LegalDetailsService = async (req) => {
    try {
        let type = req.params.type
        let data = await LegalModel.find({type: type});
        return {status: "success", data: data}
    } catch (e) {
        return {status: "fail", data: e}.toString()
    }
}

module.exports = {FeaturesListService, LegalDetailsService}