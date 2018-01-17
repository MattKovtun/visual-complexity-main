import * as d3 from "d3";

class AlgoSVG {
    constructor(algoDOMNode, resDOMNode, modifier) {
        this.modifier = modifier;
        this.height = 400;
        this.width = 400;
        this.context = d3
            .select(algoDOMNode) // ".page__content"
            .append("svg")
            .attr("class", "content__algo content__algo_" + this.modifier)
            .attr("preserveAspectRatio", "xMidYMid")
            .attr("viewBox", `0 0 ${this.height} ${this.width}`)
            .attr("height", "100%")
            .attr("width", "100%");


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