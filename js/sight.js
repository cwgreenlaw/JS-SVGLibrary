class SVGElement {
    constructor(type) {
        this.type = type;
        this.namespace = 'http://www.w3.org/2000/svg';
        this.node = document.createElementNS(this.namespace, this.type);

        return this;
    }

    attr(attrs){
        if (typeof attrs === 'object'){
            for (const [key, value] of Object.entries(attrs)){
                this.node.setAttributeNS(null, key, value);
            }
        } else {
            console.log('Error: Method requires an object');
        }
        return this;
    }

    append(element){
        if(typeof element === 'string'){
            const parent = document.querySelector(element);
        } else {
            const parent = element.node;
        }
        parent.appendChild(this.node);
        return this;
    }

}

class Sight {
    constructor(selector, width, height){
        let svg = new SVGElement('svg');
        svg.attr()
    }
}
