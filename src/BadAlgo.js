import {sleepFor} from "./utils";
import {K, NUMBEROFNUMBERS} from './consts';
import Algo from './Algo';

class BadAlgo extends Algo {
    constructor(algoDOMNode,resDOMNode, modifier) {
        super(algoDOMNode, resDOMNode, modifier);
    }

    async perform(numbers) {
        let missingNumbers = [];
        for (let i = 1; i <= NUMBEROFNUMBERS; ++i) {
            let exist = false;
            for (let j = 0; j < NUMBEROFNUMBERS; ++j) {
                await sleepFor(K);
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


export default BadAlgo;