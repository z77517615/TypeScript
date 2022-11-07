import { Hasformatter } from '../interface/Hasformatter'


export class Income implements Hasformatter{
    income: string ;
    details: string;
    amount: number;

    constructor(d: string, e: string, f: number){
        this.income = d;
        this.details = e;
        this.amount = f
    }
    format(){
        return `${this.income} ; ${this.amount} from ${this.details}`;
    }
}

