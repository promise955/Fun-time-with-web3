const Web3 = require('web3')
const url = process.env.INFURA_URL
const HDWallet = require('@truffle/hdwallet-provider')
const bip39 = require('bip39')
let mnemonics = bip39.generateMnemonic()
class Wallet {
    constructor(url){
        let provider = new HDWallet(mnemonics,url)
        this.Wallet = new Web3(provider)
    }

    async createAccount(){
        try {
            const account = await this.Wallet.eth.accounts.create()
            return account
        } catch (error) {
            console.log(error); 
        }
    }

    async getAllAccount(){
        try {
            const accounts = await this.Wallet.eth.getAccounts()
            return accounts
        } catch (error) {
            console.log(error);
            
        }
    }
    async getBalances(address){
        try {
            const balance = await this.Wallet.eth.getBalance(address)
            return balance
        } catch (error) {
            console.log(error);
            
        }
    }
    async sendTransactions(address,amount){
        try {
            const account = await this.getAllAccount()
            const transaction ={
                from:  account[0],
                to: address,
                value: amount
            }
            const receipt = await this.Wallet.eth.sendTransaction(transaction)
            return  receipt
        } catch (error) {
            console.log(error);
            
        }
    }


}

const wallet = new Wallet(url)

module.exports = wallet