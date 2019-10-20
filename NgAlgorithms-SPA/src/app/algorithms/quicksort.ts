import { delay } from '../helpers/delay';

export async function quickSort(numbers: Array<number>, low: number, high: number, speed: number) {

    let leftWall;

    leftWall = await partition(numbers, low, high, speed); // Move smaller numbers before the pivot, greater numbers after

    if (low < leftWall - 1) {
        await quickSort(numbers, low, leftWall - 1, speed); // Sort the left (smaller) numbers
    }

    if (leftWall < high) {
        await quickSort(numbers, leftWall, high, speed); // Sort the right (higher) numbers
    }

}

async function partition(numbers: Array<number>, low: number, high: number, speed: number) {

    // Start with a pivot of the middle index
    const pivot = numbers[Math.floor((low + high) / 2)];

    let i = low;
    let j = high;


    while (i <= j) {

         // Scan array from the left. Find the furthest right index that is higher than the pivot
        while (numbers[i] < pivot) {
            i++;
        }
        // Scan array from the right. Find the furthest left index that is lower than the pivot
        while (numbers[j] > pivot) {
            j--;
        }

        if (i <= j) {
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
            i++;
            j--;
            if (speed > 0) {
                await delay(speed);
            }

        }
    }

    return i;
}
