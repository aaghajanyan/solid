class NewsPrinter {
    constructor(news) {
        this.news = news;
    }

    html() {
        return `
            <div class="news">
                <h1>${this.news.title}</h1>
                <h6>${this.news.text}</h6>
            </div>
        `
    }

    json() {
        return JSON.stringify(this.news, null, 2)
    }
}

module.exports = { NewsPrinter };
