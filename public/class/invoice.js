export class Invoice {
  constructor (d, e, f) {
    this.client = d;
    this.details = e;
    this.amount = f;
  }

  format () {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}
