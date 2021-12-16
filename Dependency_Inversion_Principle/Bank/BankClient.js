class BankClient {
    constructor(client) {
        this.client = client;
    }

    clientPay() {
        this.client.clientPay();
    }

    clientRefund() {
        this.client.clientRefund();
    }
}

module.exports = { BankClient };
