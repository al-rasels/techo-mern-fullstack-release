const UserModel = require('../models/UserModel');
const EmailSend=require('../utility/EmailHelper')
const {EncodeToken} = require('../utility/TokenHelper')



const UserOTPService = async (req) => {
    try {
    const email = req.params.email;
    const code = Math.floor(100000+Math.random() *900000)
    const EmailText=`Your Verification Code is ${code}`
    const EmailSubject="Email Verification"
    await EmailSend(email, EmailText,EmailSubject)

  await UserModel.updateOne({email: email},{$set:{otp:code}},{upsert:true})
    return {status:'success',message:'6 Digit OTP has been sent successfully'}
    }catch (err) {
        return {status:'error',message:'An error has occurred, failed to send email verification'}
    }
    }

const VerifyLoginService = async (req) => {
    try {
    const email = req.params.email;
    const otp = req.params.otp;
    // user count
    const total=await UserModel.find({email: email,otp:otp}).countDocuments()
    if (total ===1) {
        // User id read
        const user_id = await UserModel.find({email: email,otp:otp}).select('_id')
// Token generated
        const token=EncodeToken(email,user_id[0]['_id'].toString())
        // update otp
        await UserModel.updateOne({email: email},{$set:{otp:'0'}},{upsert:true})
        return {status:'success',message:'User has been successfully verified',token:token}
    }else {
    return {status:'error',message:'User verification error verified'}
    }
    }catch (err) {
        return {status:'error',message:'Invalid verification code or Email Address'}
    }
    }

const CreateProfileService = async () => {
}
const UpdateProfileService = async () => {
}
const ReadProfileService = async () => {
}


module.exports ={
    UserOTPService,
    VerifyLoginService,

    CreateProfileService,
    UpdateProfileService,
    ReadProfileService
}