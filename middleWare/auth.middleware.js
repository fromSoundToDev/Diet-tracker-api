import jwt from 'jsonwebtoken';
const protect = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"unauthorized"});
    }
    try{
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch(err){
        console.log(err);
        return res.status(500).json({message:"internal server error"});
    }
}

export {protect};