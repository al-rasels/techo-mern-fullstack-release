const jwt=require('jsonwebtoken')

const KEY="RM-SHANTO-786"

exports.EncodeToken=(email,user_id)=>{
    const EXPIRE={
        expiresIn: '24h'  // token will expire after 1 hour
    }
    const PAYLOAD={
        email:email,
        user_id:user_id
    }
    return jwt.sign(PAYLOAD,KEY,{expiresIn:EXPIRE})
}

exports.DecodeToken=(token)=>{
try{
return jwt.verify(token,KEY)
}catch(e){
    return null
}
}