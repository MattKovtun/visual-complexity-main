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
        this.numberOfNumbers = numberOfNumbers;
        this.numbers = new Array(this.numberOfNumbers)
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

    renderAllNumbers() {
        this.algorithms.map((algo) => {
            algo.clearResultArea();
            new Array(this.numberOfNumbers)
                .fill()
                .map((el, i) => {
                    let nd = document.createElement("span");
                    nd.textContent = i + 1;
                    nd.classList.add("result__numbers");
                    nd.classList.add("result__numbers_" + algo.modifier);
                    algo.resultArea.appendChild(nd);
                })
        });
        return this;

    }


    async action() {
        await Promise
            .all(this.algorithms.map(alg => alg.perform(this.numbers, this.visualiser)
                .then(value => {
                        let nums = alg.resultArea.childNodes;
                        return value
                            .map(elem => nums[elem - 1].classList.add("result__numbers_missing"))
                    }
                )));
        return this;
    }
}


export default World;


