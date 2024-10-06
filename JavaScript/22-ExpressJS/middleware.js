const accessControl = (req,res,next) => {
    const access = true;
    if(!access){
        res.status(401).json({
            succes : false,
            message : "Yetkisiz erişim..."
        });
    }
    next();
}

module.exports = accessControl;