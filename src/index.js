import World from './World';
import GoodAlgo from './GoodAlgo';
import BadAlgo from "./BadAlgo";
import * as d3 from "d3";


const gameOrder = () => {
    // TODO : generate points before pressing start
    const algorithms = [
        new BadAlgo(d3.select(".page__content"), document.querySelector(".result"), "bad"),
        new GoodAlgo(d3.select(".page__content"), document.querySelector(".result"), "good"),
    ];
    let resetButton = document.querySelector(".page__start-button");
    let world = new World(algorithms);
    resetButton.addEventListener("click", () => {
        resetButton.classList.add("page__start-button_disabled");
        world
            .clearArea()
            .generatePoints()
            .action()
            .then(() => resetButton.classList.remove("page__start-button_disabled"));
    }, false);

};


gameOrder();