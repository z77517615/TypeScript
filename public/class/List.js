export class List {
    constructor(container) {
        this.container = container;
    }
    render(item, heading) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        this.container.append(li);
    }
}
