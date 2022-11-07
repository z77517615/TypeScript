import { Hasformatter } from "../interface/Hasformatter";

export class List{
    constructor(private container:HTMLUListElement
        ){}
    render(item: Hasformatter , heading: string){
        const li = document.createElement('li')

        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4)

        const p = document.createElement('p')
        p.innerText = item.format();
        li.append(p)

        this.container.append(li)
    }
}