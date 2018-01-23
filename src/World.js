//TODO: rename entry point
import MyNumber from "./MyNumber";
import {getRandom} from "./utils";
import {K, MARGINFROMSIDES, NUMBEROFNUMBERS} from './consts';



class World {
    // TODO: rename Complexity
    // TODO: pass DOM node, instead of selector
    constructor(algorithms, visualiser) {
        this.algorithms = algorithms;
        this.visualiser = visualiser;
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
                new MyNumber(getRandom(MARGINFROMSIDES, this.algorithms[0].width - MARGINFROMSIDES), getRandom(MARGINFROMSIDES, this.algorithms[0].height - MARGINFROMSIDES), getRandom(1, NUMBEROFNUMBERS + 1)));
                // new MyNumberSVG(getRandom(this.algorithms[0].left, this.algorithms[0].right), getRandom(this.algorithms[0].top, this.algorithms[0].bottom), getRandom(1, NUMBEROFNUMBERS + 1)));
        this.numbers.map((el) => {
            this.algorithms.map((elem) => {
                // console.log(elem.context);
                this.visualiser.draw(elem.context, el);
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
            .all(this.algorithms.map(alg => alg.perform(this.numbers, this.visualiser)
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


