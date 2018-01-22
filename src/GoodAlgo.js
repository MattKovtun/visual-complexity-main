import {sleepFor} from "./utils";
import {K, NUMBEROFNUMBERS} from './consts';
import Algo from "./Algo";
import AlgoSVG from './AlgoSVG';

class GoodAlgo extends AlgoSVG {
    constructor(algoDOMNode,resDOMNode, modifier) {
        super(algoDOMNode, resDOMNode, modifier);
    }

    async perform(numbers, visualiser) {
        let missingNumbers = [];
        const countNumbers = new Array(NUMBEROFNUMBERS + 1).fill(0);
        const indexNumbers = new Array(NUMBEROFNUMBERS + 1).fill().map(() => new Array(NUMBEROFNUMBERS + 1));
        for (let i = 0; i < numbers.length; ++i) {
            await sleepFor(K);
            countNumbers[numbers[i].number]++;
            indexNumbers[numbers[i].number].push(i);
        }
        for (let i = 1; i < countNumbers.length; ++i) {
            await sleepFor(K);
            if (countNumbers[i] === 0) {
                missingNumbers.push(i);
            }
            else {
                indexNumbers[i].map((el) => {
                    visualiser.undraw(this.context, numbers[el]);
                });
            }
        }
        return missingNumbers;
    };

}


export default GoodAlgo;