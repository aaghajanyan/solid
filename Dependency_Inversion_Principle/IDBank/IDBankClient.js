class IDBankClient {
    constructor() {
        this.payURL = "http://idbank.com/pay/test"
        this.refundURL = "http://idbank.com/refund/test"
    }

    clientPay() {
        console.log(`IDBank pay     -> ${this.payURL}`)
    }

    clientRefund() {
        console.log(`IDBank refund  -> ${this.refundURL}`)
    }
};

module.exports = { IDBankClient };
