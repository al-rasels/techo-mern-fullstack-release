const {
    UserOTPService,
    VerifyLoginService,
    CreateProfileService,
    UpdateProfileService,
    ReadProfileService, SaveProfileService,
}=require('../services/UserServices')



exports.UserOTP = async (req, res) => {
    const result=await UserOTPService(req)
    return res.status(200).json(result)
};
exports.VerifyLogin = async (req, res) => {
    const result=await VerifyLoginService(req)
    if (result.status ==='success'){

        // Cookie settings
        const cookieOption={
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            httpOnly: false,
        }
        // Set Cookie to the Browser
        res.cookie('token',result['token'],cookieOption)
    }
    return res.status(200).json(result)
};
exports.UserLogout = async (req, res) => {

    const cookieOption={
        expires: new Date(Date.now() - 1000 * 60 * 60 * 24),
        httpOnly: false,
    }
    res.cookie('token','',cookieOption)
    return res.status(200).json({status:'success'})
};
exports.CreateProfile = async (req, res) => {
    const result=await SaveProfileService(req)
    return res.status(200).json(result)
};

exports.UpdateProfile = async (req, res) => {
    const result=await SaveProfileService(req)
    return res.status(200).json(result)
};
exports.ReadProfile = async (req, res) => {
    const result=await ReadProfileService(req)
    return res.status(200).json(result)
};

