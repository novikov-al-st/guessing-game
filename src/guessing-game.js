class GuessingGame {
    constructor() {
    }



    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return  this.min + Math.round((this.max - this.min) / 2);
    }

    lower() {
        this.max = this.min + Math.round((this.max - this.min) / 2);
    }

    greater() {
        this.min = this.min + Math.round((this.max - this.min) / 2);
    }
}

module.exports = GuessingGame;
