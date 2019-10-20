import { delay } from '../helpers/delay';

export async function bubbleSort(numbers: Array<number>, speed: number) {

    let swapMade = true;

    while (swapMade) {
        swapMade = false;

        for (let i = 0; i < numbers.length - 1; i++) {

            if (numbers[i + 1] < numbers[i]) {
                [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]];
                swapMade = true;

                if (speed > 0) {
                    await delay(speed);
                }
            }


        }
    }

}