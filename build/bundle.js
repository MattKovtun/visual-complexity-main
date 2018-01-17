/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getRandom;



const sleepFor = (sleepDuration) => new Promise((res, rej) => setTimeout(res, sleepDuration));
/* harmony export (immutable) */ __webpack_exports__["b"] = sleepFor;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const NUMBEROFNUMBERS = 50;
/* harmony export (immutable) */ __webpack_exports__["c"] = NUMBEROFNUMBERS;

const K = 0.5;
/* harmony export (immutable) */ __webpack_exports__["a"] = K;

const MARGINFROMSIDES = 10;
/* harmony export (immutable) */ __webpack_exports__["b"] = MARGINFROMSIDES;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Algo {
    constructor(algoDOMNode,resDOMNode, modifier) {
        this.modifier = modifier;
        this.rect = document.createElement("canvas");
        this.rect.classList.add("content__algo");
        this.rect.classList.add("content__algo_" + modifier);
        algoDOMNode.appendChild(this.rect);
        this.context = this.rect.getContext('2d');
        this.height = this.rect.getBoundingClientRect().height;
        this.width = this.rect.getBoundingClientRect().width;
        this.rect.height = this.height;
        this.rect.width = this.width;
        this.resultArea = document.createElement("div");
        this.resultArea.classList.add("result__" + modifier);
        resDOMNode.appendChild(this.resultArea);

    }

    prepareAreas() {
        document.querySelector(".content__algo_" + this.modifier).getContext('2d').clearRect(0, 0, this.width, this.height);
        document.querySelector(".result__" + this.modifier).innerHTML = "";
    }


    async perform(numbers) {

    }


    createResultingArea(domNode) {

    }
}


/* harmony default export */ __webpack_exports__["a"] = (Algo);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__World__ = __webpack_require__(4);



const gameOrder = () => {
    let resetButton = document.querySelector(".start-button");
    let world = new __WEBPACK_IMPORTED_MODULE_0__World__["a" /* default */](document);
    resetButton.addEventListener("click", () => {
        resetButton.classList.add("start-button_disabled");
        world.clearArea()
            .generatePoints()
            .action()
            .then(() => resetButton.classList.remove("start-button_disabled"));
    }, false);

};


gameOrder();

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Number__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GoodAlgo__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__consts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BadAlgo__ = __webpack_require__(7);
//TODO: rename entry point








class World {
    // TODO: rename Complexity
    // TODO: pass DOM node, instead of selector
    constructor(document) {
        this.algorithms = [
            new __WEBPACK_IMPORTED_MODULE_2__GoodAlgo__["a" /* default */](document.querySelector(".page__content"), document.querySelector(".result"), "good"),
            new __WEBPACK_IMPORTED_MODULE_4__BadAlgo__["a" /* default */](document.querySelector(".page__content"), document.querySelector(".result"), "bad"),
        ];
    }

    clearArea() {
        this.algorithms.map((el) => {
            el.prepareAreas();
        });
        return this;

    }

    generatePoints() {
        this.numbers = new Array(__WEBPACK_IMPORTED_MODULE_3__consts__["c" /* NUMBEROFNUMBERS */])
            .fill()
            .map((el, i) =>
                new __WEBPACK_IMPORTED_MODULE_0__Number__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* getRandom */])(__WEBPACK_IMPORTED_MODULE_3__consts__["b" /* MARGINFROMSIDES */], this.algorithms[0].width - __WEBPACK_IMPORTED_MODULE_3__consts__["b" /* MARGINFROMSIDES */]), Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* getRandom */])(__WEBPACK_IMPORTED_MODULE_3__consts__["b" /* MARGINFROMSIDES */], this.algorithms[0].height - __WEBPACK_IMPORTED_MODULE_3__consts__["b" /* MARGINFROMSIDES */]), Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* getRandom */])(1, __WEBPACK_IMPORTED_MODULE_3__consts__["c" /* NUMBEROFNUMBERS */] + 1)));
        this.numbers.map((el) => {
            this.algorithms.map((elem) => {
                console.log(elem.context);
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



/* harmony default export */ __webpack_exports__["a"] = (World);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class MyNumber {
    // TODO: make good undraw function
    constructor(x, y, number) {
        this.x = x;
        this.y = y;
        this.number = number;
    }

    getPath() {
        const path = new Path2D();
        path.arc(this.x, this.y, 7.5*2, 0, Math.PI * 2, true); // Outer circle
        return path;
    }

    draw(ctx) {
        ctx.save();
        ctx.fillStyle = `rgba(39, 174, 96, 1.0)`;
        ctx.fill(this.getPath());
        ctx.fillStyle = "black";
        ctx.fillText(this.number, this.x - 6, this.y + 3);
        ctx.restore();
    }

    undraw(ctx) {
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = `black`;
        ctx.fill(this.getPath());
        ctx.fillText(this.number, this.x - 6, this.y + 3);
        ctx.restore();

    }
}


/* harmony default export */ __webpack_exports__["a"] = (MyNumber);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__consts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Algo__ = __webpack_require__(2);




class GoodAlgo extends __WEBPACK_IMPORTED_MODULE_2__Algo__["a" /* default */] {
    constructor(algoDOMNode,resDOMNode, modifier) {
        super(algoDOMNode, resDOMNode, modifier);
    }

    async perform(numbers) {
        let missingNumbers = [];
        const countNumbers = new Array(__WEBPACK_IMPORTED_MODULE_1__consts__["c" /* NUMBEROFNUMBERS */] + 1).fill(0);
        const indexNumbers = new Array(__WEBPACK_IMPORTED_MODULE_1__consts__["c" /* NUMBEROFNUMBERS */] + 1).fill().map(() => new Array(__WEBPACK_IMPORTED_MODULE_1__consts__["c" /* NUMBEROFNUMBERS */] + 1));
        for (let i = 0; i < numbers.length; ++i) {
            await Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* sleepFor */])(__WEBPACK_IMPORTED_MODULE_1__consts__["a" /* K */]);
            countNumbers[numbers[i].number]++;
            indexNumbers[numbers[i].number].push(i);
        }
        for (let i = 1; i < countNumbers.length; ++i) {
            await Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* sleepFor */])(__WEBPACK_IMPORTED_MODULE_1__consts__["a" /* K */]);
            if (countNumbers[i] === 0) {
                missingNumbers.push(i);
            }
            else {
                indexNumbers[i].map((el) => {
                    numbers[el].undraw(this.context);
                });
            }
        }
        return missingNumbers;
    };

}


/* harmony default export */ __webpack_exports__["a"] = (GoodAlgo);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__consts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Algo__ = __webpack_require__(2);




class BadAlgo extends __WEBPACK_IMPORTED_MODULE_2__Algo__["a" /* default */] {
    constructor(algoDOMNode,resDOMNode, modifier) {
        super(algoDOMNode, resDOMNode, modifier);
    }

    async perform(numbers) {
        let missingNumbers = [];
        for (let i = 1; i <= __WEBPACK_IMPORTED_MODULE_1__consts__["c" /* NUMBEROFNUMBERS */]; ++i) {
            let exist = false;
            for (let j = 0; j < __WEBPACK_IMPORTED_MODULE_1__consts__["c" /* NUMBEROFNUMBERS */]; ++j) {
                await Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* sleepFor */])(__WEBPACK_IMPORTED_MODULE_1__consts__["a" /* K */]);
                if (i === numbers[j].number) {
                    numbers[j].undraw(this.context);
                    exist = true;
                }
            }
            if (!exist) {
                missingNumbers.push(i);
                // console.log(i);
            }
        }
        return missingNumbers;
    };

}


/* harmony default export */ __webpack_exports__["a"] = (BadAlgo);

/***/ })
/******/ ]);