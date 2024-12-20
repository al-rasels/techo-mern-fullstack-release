const FeaturesModel = require('../models/FeaturesModel')


const FeaturesListService = async (req) => {
    try {
        const data = await FeaturesModel.find()
        return {status: 'success', data: data}

    } catch (err) {
        return {status: 'error', message: 'Error reading features'}
    }

}

module.exports = {FeaturesListService}