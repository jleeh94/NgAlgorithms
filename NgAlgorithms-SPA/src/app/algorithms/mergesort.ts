import { delay } from '../helpers/delay';

export async function mergeSort(numbers: Array<number>, left: number, right: number, speed: number) {

    if (left < right) {

        let middle = Math.floor(left + (right - left) / 2);

        await mergeSort(numbers, left, middle, speed); // Call for left half

        await mergeSort(numbers, middle + 1, right, speed); // Call for right half

        await mergeHalves(numbers, left, middle, right, speed);
    }
}

async function mergeHalves(numbers: Array<number>, left: number, middle: number, right: number, speed: number) {

    let i: number;
    let j: number;
    let k: number;

    const n1 = middle - left + 1;
    const n2 = right - middle;


    // Create two temp arrays, one for left one right
    let leftTemp: number[] = [];
    let rightTemp: number[] = [];

    // Populate left array
    for (i = 0; i < n1; i++) {
        leftTemp[i] = numbers[left + i];
    }

    // Populate right array
    for (j = 0; j < n2; j++) {
        rightTemp[j] = numbers[middle + 1 + j];
    }

    i = 0;
    j = 0;
    k = left;

    // Merge and sort the 2 arrays
    while (i < n1 && j < n2) {
        if (leftTemp[i] <= rightTemp[j]) {
            numbers[k] = leftTemp[i];
            i++;
        } else {
            numbers[k] = rightTemp[j];
            j++;
        }
        if (speed > 0) {
            await delay(speed);
        }

        k++;
    }

    // Copy over remaining numbers from left
    while (i < n1) {
        numbers[k] = leftTemp[i];
        i++;
        k++;
    }

    // Copy over remaining numbers from right
    while (j < n2) {
        numbers[k] = rightTemp[j];
        j++;
        k++;
    }

}
