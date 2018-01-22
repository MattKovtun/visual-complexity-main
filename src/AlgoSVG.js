class AlgoSVG {
    // TODO : fix points spawned to in center
    constructor(algoDOMNode, resDOMNode, modifier) {
        this.modifier = modifier;
        this.height = 500;
        this.width = 500;
        this.context = algoDOMNode// ".page__content"
            .append("svg")
            .attr("class", "content__algo content__algo_" + this.modifier)
            .attr("preserveAspectRatio", "xMinYMin")
            .attr("viewBox", `0 0 ${this.height} ${this.width}`);

        this.resultArea = document.createElement("div");
        this.resultArea.classList.add("result__" + modifier);
        resDOMNode.appendChild(this.resultArea);

    }

    prepareAreas() {

        document.querySelector(".result__" + this.modifier).innerHTML = "";
    }


    async perform(numbers) {

    }


    createResultingArea(domNode) {

    }
}


export default AlgoSVG;