 const wallet = require('../services/web')


 const CreateAccount = async(req,res,next) => {
    try {
        const accountDetails = await  wallet.createAccount()
        res.status(200).json({
              accountDetails
        })
    } catch (error) {
        res.status(400).json({
            msg : "An error ocurred"
        })
    }
}
const getAllAccount = async(req,res,next) => {
    try {
         const accounts = await wallet.getAllAccount()
        res.status(200).json({
           accounts
        })
        
    } catch (error) {
        res.status(400).json({
            msg : "An error ocurred"
        })
    }
}
const getAccount = async(req,res,next) => {
    try {
        const address = req.params.walletKey
        const accountBalance = await wallet.getBalances(address)
        res.status(200).json({
            accountBalance
        })
    } catch (error) {
        res.status(400).json({
            msg : "An error ocurred"
        })
    }
}


module.exports = {
    CreateAccount,
    getAllAccount,
    getAccount

}