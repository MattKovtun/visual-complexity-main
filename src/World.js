//TODO: rename entry point
import MyNumber from "./MyNumber";
import MyNumberSVG from "./MyNumberSVG";
import {getRandom} from "./utils";
import GoodAlgo from './GoodAlgo';
import BadAlgo from "./BadAlgo";
import {K, MARGINFROMSIDES, NUMBEROFNUMBERS} from './consts';



class World {
    // TODO: rename Complexity
    // TODO: pass DOM node, instead of selector
    constructor(algorithms) {
        this.algorithms = algorithms;
    }

    clearArea() {
        this.algorithms.map((el) => {
            el.prepareAreas();
        });
        return this;

    }

    generatePoints() {
        this.numbers = new Array(NUMBEROFNUMBERS)
            .fill()
            .map((el, i) =>
                new MyNumberSVG(getRandom(MARGINFROMSIDES, this.algorithms[0].width - MARGINFROMSIDES), getRandom(MARGINFROMSIDES, this.algorithms[0].height - MARGINFROMSIDES), getRandom(1, NUMBEROFNUMBERS + 1)));
                // new MyNumberSVG(getRandom(this.algorithms[0].left, this.algorithms[0].right), getRandom(this.algorithms[0].top, this.algorithms[0].bottom), getRandom(1, NUMBEROFNUMBERS + 1)));
        this.numbers.map((el) => {
            this.algorithms.map((elem) => {
                // console.log(elem.context);
                el.draw(elem.context);
            })
        });
        return this;
    };

    renderNumber(number, modifier) {
        let nd = document.createElement("span");
        nd.textContent = number;
        nd.classList.add("result__missing-numbers");
        nd.classList.add(modifier);
        return nd;
    }

    async action() {
        await Promise
            .all(this.algorithms.map(alg => alg.perform(this.numbers)
                .then(value => {
                        let elem = document.querySelector(".result__" + alg.modifier);
                        return value
                            .map(el => this.renderNumber(el, "result__missing-numbers_" + alg.modifier))
                            .map(el => elem.appendChild(el))
                    }
                )))
    }
}



export default World;


