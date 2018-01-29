//TODO: rename entry point
import MyNumber from "./MyNumber";
import {getRandom} from "./utils";
import {K, MARGINFROMSIDES} from './consts';

import "../style/result.less"

class World {
    constructor(algorithms, visualiser) {
        this.algorithms = algorithms;
        this.visualiser = visualiser;
    }

    clearArea() {
        this.algorithms.map((el) => {
            el.clearAlgoArea();
        });
        return this;
    }

    generatePoints(numberOfNumbers) {
        this.numbers = new Array(numberOfNumbers)
            .fill()
            .map((el, i) =>
                new MyNumber(getRandom(MARGINFROMSIDES, this.algorithms[0].width - MARGINFROMSIDES), getRandom(MARGINFROMSIDES, this.algorithms[0].height - MARGINFROMSIDES), getRandom(1, numberOfNumbers + 1)));

        this.numbers.map((el) => {
            this.algorithms.map((elem) => {
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
        this.algorithms.map((el) => el.clearResultArea());
        await Promise
            .all(this.algorithms.map(alg => alg.perform(this.numbers, this.visualiser)
                .then(value => {
                        return value
                            .map(el => this.renderNumber(el, "result__missing-numbers_" + alg.modifier))
                            .map(el => alg.resultArea.appendChild(el))
                    }
                )));
        return this;
    }
}



export default World;


