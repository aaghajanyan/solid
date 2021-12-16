// dependency inversion principle

const {IDBankClient} = require('./IDBank/IDBankClient');
const {PayPalBankClient} = require('./PayPalBank/PayPalBankClient');
const {BankClient} = require('./Bank/BankClient');


const client1 = new BankClient(new PayPalBankClient());
const client2 = new BankClient(new IDBankClient());

client1.clientPay();
client1.clientRefund();
client2.clientPay();
client2.clientRefund();