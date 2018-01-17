//TODO: rename entry point

import MyNumber from "./Number";
import {getRandom} from "./utils";
import GoodAlgo from './GoodAlgo';
import {K, MARGINFROMSIDES, NUMBEROFNUMBERS} from './consts';
import BadAlgo from "./BadAlgo";


class World {
    // TODO: rename Complexity
    // TODO: pass DOM node, instead of selector
    constructor(document) {
        this.algorithms = [
            new GoodAlgo(document.querySelector(".page__content"), document.querySelector(".result"), "good"),
            new BadAlgo(document.querySelector(".page__content"), document.querySelector(".result"), "bad"),
        ];
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
