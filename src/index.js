import World from './World';
import GoodAlgo from './GoodAlgo';
import BadAlgo from "./BadAlgo";
import {select} from "d3";
import NumberVisualiserSVG from './SVG/NumberVisualiserSVG';
import Modifiers, {K, OBJECTMEMORY} from './consts';


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
    let numberOfPointsText = document.querySelectorAll(".article__points");
    let resultBadText = document.querySelector(".article__result_bad");
    let resultGoodText = document.querySelector(".article__result_good");
    let KconstantsText = document.querySelectorAll(".article__k");
    let memory = document.querySelector(".article__memory");


    KconstantsText = Array.prototype.slice.call(KconstantsText);
    numberOfPointsText = Array.prototype.slice.call(numberOfPointsText);
    KconstantsText.map((el) => el.innerHTML = K / 1000);
    memory.innerHTML = (parseInt(numberOfPoints.value, 10) * OBJECTMEMORY / 1000000).toFixed(3);

    let world = new World(algorithms, new NumberVisualiserSVG()).generatePoints(parseInt(numberOfPoints.value, 10));

    resetButton.addEventListener("click", () => {
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
        numberOfPointsText.map((el) => el.innerHTML = numberOfPoints.value);
        resultBadText.innerHTML = K * parseInt(numberOfPoints.value, 10) * parseInt(numberOfPoints.value, 10) / 1000;
        resultGoodText.innerHTML = K * 2 * parseInt(numberOfPoints.value, 10) / 1000;
        memory.innerHTML = (parseInt(numberOfPoints.value, 10) * OBJECTMEMORY / 1000000).toFixed(3);
    }, false);


};

gameOrder();


