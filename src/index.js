import World from './World';
import GoodAlgo from './GoodAlgo';
import BadAlgo from "./BadAlgo";
import * as d3 from "d3";
import NumberVisualiserSVG from './SVG/NumberVisualiserSVG';


const gameOrder = () => {
    // TODO : generate points before pressing start
    const algorithms = [
        new BadAlgo(d3.select(".page__content"), document.querySelector(".result"), "bad"),
        new GoodAlgo(d3.select(".page__content"), document.querySelector(".result"), "good"),
    ];
    let resetButton = document.querySelector(".page__start-button");
    let world = new World(algorithms, new NumberVisualiserSVG()).generatePoints();
    resetButton.addEventListener("click", () => {
        resetButton.classList.add("page__start-button_disabled");
        world
            .action()
            .then((el) => {
                resetButton.classList.remove("page__start-button_disabled");
                return el;
            })
            .then((el) => el.clearArea())
            .then((el) => el.generatePoints());
    }, false);

};


gameOrder();