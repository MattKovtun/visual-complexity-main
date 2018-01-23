import World from './World';
import GoodAlgo from './GoodAlgo';
import BadAlgo from "./BadAlgo";
import * as d3 from "d3";
import NumberVisualiserSVG from './SVG/NumberVisualiserSVG';
import Modifiers from './consts';


const gameOrder = () => {
    // TODO : generate points dynamically according to the input field
    const algorithms = [
        new BadAlgo(d3.select(".page__content"), document.querySelector(".result"), Modifiers.bad),
        new GoodAlgo(d3.select(".page__content"), document.querySelector(".result"), Modifiers.good)
    ];
    let resetButton = document.querySelector(".page__start-button");
    let world = new World(algorithms, new NumberVisualiserSVG()).generatePoints(parseInt(document.querySelector(".points__select").value, 10));
    resetButton.addEventListener("click", () => {
        console.log(document.querySelector(".points__select").value);
        resetButton.classList.add("page__start-button_disabled");
        world
            .action()
            .then((el) => {
                resetButton.classList.remove("page__start-button_disabled");
                return el;
            })
            .then((el) => el.clearArea())
            .then((el) => el.generatePoints(parseInt(document.querySelector(".points__select").value, 10)));
    }, false);

};


gameOrder();