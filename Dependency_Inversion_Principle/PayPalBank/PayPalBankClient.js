class PayPalBankClient {
    constructor() {
        this.payURL = "http://paypal.com/pay/test"
        this.refundURL = "http://paypal.com/refund/test"
    }

    clientPay() {
        console.log(`PayPalBank pay     -> ${this.payURL}`)
    }

    clientRefund() {
        console.log(`PayPalBank refund  -> ${this.refundURL}`)
    }
};

module.exports = { PayPalBankClient };
