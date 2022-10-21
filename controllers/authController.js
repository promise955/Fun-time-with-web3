 const Auth  = async(req,res,next) => {
    try {
        res.status(200).json({})
    } catch (error) {
        res.status(400).json({
            msg : "An error ocurred"
        })
    }
}

module.exports = {
  Auth
}