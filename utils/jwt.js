const jwt = require("jsonwebtoken");
const generateToken = (user) =>{
    const expirationToken = new Date();

    expirationToken.setHours(expirationToken.getHours()+1);

    const payload = {
        id: user._id,
        email: user.email,
        exp: parseInt(expirationToken.getTime()/1000),

    };    
    const access = jwt.sign(JSON.stringify(payload),process.env.SECRET_KEY);
    console.log(token);
    return access;
}

const refreshToken = (user) =>{
    console.log(user);
    const expirationToken = new Date();
    expirationToken.setMonth(expirationToken.getMonth()+1);
    const payload = {
        id: user._id,
        email: user.email,
        iat: Date.now(),
        exp : expirationToken.getTime(),
    };
    const refresh= jwt.sign(JSON.stringify(payload),process.env.SECRET_KEY);
    return refresh;
}

const decodeAccessToken = (token)=>{
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    return verifyToken;
}

module.exports = {
    generateToken,
    refreshToken,
    decodeAccessToken,
}