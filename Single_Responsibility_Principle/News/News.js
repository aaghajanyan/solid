class News {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.modified = false;
    }

    update(title, text) {
        this.title = title;
        this.text = text;
        this.modified = true;
    }
}

module.exports = { News };
