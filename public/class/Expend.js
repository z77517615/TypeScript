export class Expend {
    constructor(a, b, c) {
        this.expend = a;
        this.details = b;
        this.amount = c;
    }
    format() {
        return `${this.expend} : ${this.amount} for ${this.details}`;
    }
}
