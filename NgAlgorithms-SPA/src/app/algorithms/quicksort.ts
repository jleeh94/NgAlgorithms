import { delay } from '../helpers/delay';

export async function quickSort(numbers: Array<number>) {
    numbers.reverse();
    await delay(2000);
    numbers.reverse();

}