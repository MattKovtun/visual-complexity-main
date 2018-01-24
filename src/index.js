import World from './World';
import GoodAlgo from './GoodAlgo';
import BadAlgo from "./BadAlgo";
import {select} from "d3";
import NumberVisualiserSVG from './SVG/NumberVisualiserSVG';
import Modifiers from './consts';

import "../style/common.less";
import "../style/page.less"
import "../style/settings.less"
import "../style/result.less"
import "../style/article.less"

const gameOrder = () => {
    // TODO: change display, for gray numbers which are missing and colored which are present
    const algorithms = [
        new BadAlgo(select(".page__content"), document.querySelector(".result"), Modifiers.bad),
        new GoodAlgo(select(".page__content"), document.querySelector(".result"), Modifiers.good)
    ];
    let resetButton = document.querySelector(".page__start-button");
    let numberOfPoints = document.querySelector(".settings__points");

    let world = new World(algorithms, new NumberVisualiserSVG()).generatePoints(parseInt(numberOfPoints.value, 10));

    resetButton.addEventListener("click", () => {
        console.log(numberOfPoints.value);
        numberOfPoints.disabled = true;
        resetButton.classList.add("page__start-button_disabled");
        world
            .action()
            .then((el) => {
                resetButton.classList.remove("page__start-button_disabled");
                return el;
            })
            .then((el) => el.clearArea())
            .then((el) => el.generatePoints(parseInt(numberOfPoints.value, 10)))
            .then(() => numberOfPoints.disabled = false);
    }, false);

    numberOfPoints.addEventListener("input", () => {
        world
            .clearArea()
            .generatePoints(parseInt(numberOfPoints.value, 10));
    }, false);


};


gameOrder();