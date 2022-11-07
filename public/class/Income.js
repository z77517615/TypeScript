export class Income {
    constructor(d, e, f) {
        this.income = d;
        this.details = e;
        this.amount = f;
    }
    format() {
        return `${this.income} ; ${this.amount} from ${this.details}`;
    }
}
