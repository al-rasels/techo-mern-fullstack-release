const mongoose = require('mongoose');
const FormData = require('form-data');
const axios = require('axios');

const CartModel = require('../models/CartModel');
const ProfileModel = require('../models/ProfileModel');
const InvoiceModel = require('../models/InvoiceModel');
const InvoiceProductModel = require('../models/InvoiceProductModel');
const PaymentSettingModel = require('../models/PaymentSettingModel');


const ObjectID = mongoose.Types.ObjectId;

const CreateInvoiceService = async (req) => {
    try {
        const user_id = new ObjectID(req.headers.user_id);
        const cus_email = req.headers.email
        // Step-1: Calculate Total Payable & Vat
        const matchStage = {$match: {userID: user_id}}
        const JoinProductStage = {$lookup: {from: 'products', localField: 'productID', foreignField: '_id', as: 'product'}}
        const UnwindProductStage = {$unwind: '$product'}
        // Finding Product from user Cart
        const CartProducts = await CartModel.aggregate([matchStage, JoinProductStage, UnwindProductStage])

        let totalAmount = 0;
        CartProducts.forEach((element) => {
            let price;
            if (element.product.discount) {
                price = parseFloat(element.product.discountPrice)
            } else {
                price = parseFloat(element.product.price)
            }

            totalAmount = element.qty * price
        })

        const vat = totalAmount * 0.05;// 5% VAT
        const payable = totalAmount + vat;

        // Step-2: Prepare Customer Details & Shipping Details
        const profile = await ProfileModel.aggregate([matchStage])
        const cus_details = `Name:${profile[0]['cus_name']},Email:${cus_email},Address:${profile[0]['cus_add']},Phone:${profile[0]['cus_phone']}`
        const ship_details = `Name:${profile[0]['ship_name']},City:${profile[0]['ship_city']},Address:${profile[0]['ship_add']},Phone:${profile[0]['ship_phone']}`

        // Step-3: Transaction & Other's ID
        let transaction_id = Math.floor(10000000 + Math.random() * 90000000)
        let val_id = 0;
        let delivery_status = 'pending'
        let payment_status = 'pending'


        // Step-4: Create Invoice
        const CreateInvoice = await InvoiceModel.create({
            userID: user_id,
            payable: payable,
            cus_details: cus_details,
            ship_details: ship_details,
            trans_id: transaction_id,
            val_id: val_id,
            delivery_status: delivery_status,
            payment_status: payment_status,
            total: totalAmount,
            vat: vat
        })

        // Step-5: Create Invoice Product
        const invoice_id = CreateInvoice['_id']

        CartProducts.forEach(async (element) => {
            await InvoiceProductModel.create({
                    userID: user_id,
                    productID: element.productID,
                    invoiceID: invoice_id,
                    qty: element.qty,
                    price: element.product.discount ? parseFloat(element.product.discountPrice) : parseFloat(element.product.price),
                    color: element.color,
                    size: element.size,
                }
            )
        })
        // Step-6: Remove Carts
        await CartModel.deleteMany({userID: user_id})
        // Step-7: Prepare SSL Payment


        return {status: 'success', data: invoice_id}
    } catch (err) {
        return {status: 'fail', message: 'Something Went Wrong' + err.message}
    }
}
const PaymentFailedService = async (req) => {
    try {
        return {status: 'success', data: ''}
    } catch (err) {
        return {status: 'fail', message: 'Something Went Wrong' + err.message}
    }
}

const PaymentCanceledService = async (req) => {
    try {
        return {status: 'success', data: ''}
    } catch (err) {
        return {status: 'fail', message: 'Something Went Wrong' + err.message}
    }
}

const PaymentIPNService = async (req) => {
    try {
        return {status: 'success', data: ''}
    } catch (err) {
        return {status: 'fail', message: 'Something Went Wrong' + err.message}
    }
}


const PaymentSuccessService = async (req) => {
    try {
        return {status: 'success', data: ''}
    } catch (err) {
        return {status: 'fail', message: 'Something Went Wrong' + err.message}
    }
}
const InvoiceListService = async (req) => {
    try {
        return {status: 'success', data: ''}
    } catch (err) {
        return {status: 'fail', message: 'Something Went Wrong' + err.message}
    }
}
const InvoiceProductListService = async (req) => {
    try {
        return {status: 'success', data: ''}
    } catch (err) {
        return {status: 'fail', message: 'Something Went Wrong' + err.message}
    }
}

module.exports = {
    CreateInvoiceService,
    PaymentFailedService,
    PaymentCanceledService,
    PaymentIPNService,
    PaymentSuccessService,
    InvoiceListService,
    InvoiceProductListService
}