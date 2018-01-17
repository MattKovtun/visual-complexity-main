import World from './World';


const gameOrder = () => {
    let resetButton = document.querySelector(".start-button");
    let world = new World(document);
    resetButton.addEventListener("click", () => {
        resetButton.classList.add("start-button_disabled");
        world.clearArea()
            .generatePoints()
            .action()
            .then(() => resetButton.classList.remove("start-button_disabled"));
    }, false);

};


gameOrder();