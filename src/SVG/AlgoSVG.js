import "../../style/content.less"
import "../../style/result.less"

class AlgoSVG {
    constructor(algoDOMNode, resDOMNode, modifier) {
        this.modifier = modifier;
        this.context = algoDOMNode// ".page__content"
            .append("svg")
            .attr("class", "content__algo content__algo_" + this.modifier)
            .attr("preserveAspectRatio", "xMinYMin");
        // .attr("viewBox", `0 0 ${this.height} ${this.width}`);


        const {height, width} = document.querySelector(".content__algo").getBoundingClientRect();
        this.height = height;
        this.width = width;

        this.resultArea = document.createElement("div");
        this.resultArea.classList.add("result");
        this.resultArea.classList.add("result__" + modifier);
        resDOMNode.appendChild(this.resultArea);

    }

    clearAlgoArea() {
        document.querySelector(".content__algo_" + this.modifier).innerHTML = "";

    }

    clearResultArea() {
        this.resultArea.innerHTML = "";
    }


    async perform(numbers, visualiser) {

    }

}


export default AlgoSVG;