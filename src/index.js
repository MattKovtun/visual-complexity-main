import World from './World';


const gameOrder = () => {
    let resetButton = document.querySelector(".page__start-button");
    let world = new World(document);
    resetButton.addEventListener("click", () => {
        resetButton.classList.add("page__start-button_disabled");
        world.clearArea()
            .generatePoints()
            .action()
            .then(() => resetButton.classList.remove("page__start-button_disabled"));
    }, false);

};


gameOrder();