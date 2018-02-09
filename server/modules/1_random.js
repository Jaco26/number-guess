class Random {
    constructor(min, max) {
        this.min = Math.ceil(min);
        this.max = Math.floor(max);
    }

    genRandomNum() {
        return Math.floor(Math.random() * (1 + this.max - this.min) + this.min);
    }
}

module.exports = Random;