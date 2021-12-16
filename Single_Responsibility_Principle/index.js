// single responsibility principle

const {News} = require('./News/News');
const {NewsPrinter} = require('./Printer/NewsPrinter');

const news = new News('Here should be a title', 'Here should be a text')
const printer = new NewsPrinter(news);

console.log("HTML => ", printer.html());
console.log("JSON => ",printer.json());