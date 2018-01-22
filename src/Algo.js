class Algo {
    constructor(algoDOMNode,resDOMNode, modifier) {
        this.modifier = modifier;
        this.rect = document.createElement("canvas");
        this.rect.classList.add("content__algo");
        this.rect.classList.add("content__algo_" + modifier);
        algoDOMNode.appendChild(this.rect);
        this.context = this.rect.getContext('2d');
        this.height = this.rect.getBoundingClientRect().height;
        this.width = this.rect.getBoundingClientRect().width;
        this.rect.height = this.height;
        this.rect.width = this.width;
        this.resultArea = document.createElement("div");
        this.resultArea.classList.add("result__" + modifier);
        resDOMNode.appendChild(this.resultArea);

    }

    prepareAreas() {
        document.querySelector(".content__algo_" + this.modifier).getContext('2d').clearRect(0, 0, this.width, this.height);
        document.querySelector(".result__" + this.modifier).innerHTML = "";
    }


    async perform(numbers, visualiser) {

    }


    createResultingArea(domNode) {

    }
}


export default Algo;