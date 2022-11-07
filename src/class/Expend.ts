import { Hasformatter } from '../interface/Hasformatter.js'


export class Expend implements Hasformatter{
    expend : string ;
    details : string;
    amount : number;

    constructor(a: string,b: string, c:number){
        this.expend =a;
        this.details=b;
        this.amount=c
    }
    format(){
        return `${this.expend} : ${this.amount} for ${this.details}`;
    }
}
