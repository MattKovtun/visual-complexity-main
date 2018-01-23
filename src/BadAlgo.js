import {sleepFor} from "./utils";
import {K, NUMBEROFNUMBERS} from './consts';
import AlgoSVG from './SVG/AlgoSVG';

class BadAlgo extends AlgoSVG {
    constructor(algoDOMNode,resDOMNode, modifier) {
        super(algoDOMNode, resDOMNode, modifier);
    }

    async perform(numbers, visualiser) {
        let missingNumbers = [];
        for (let i = 1; i <= NUMBEROFNUMBERS; ++i) {
            let exist = false;
            for (let j = 0; j < NUMBEROFNUMBERS; ++j) {
                await sleepFor(K);
                if (i === numbers[j].number) {
                    visualiser.undraw(this.context, numbers[j]);
                    exist = true;
                }
            }
            if (!exist) {
                missingNumbers.push(i);
            }
        }
        return missingNumbers;
    };

}


export default BadAlgo;