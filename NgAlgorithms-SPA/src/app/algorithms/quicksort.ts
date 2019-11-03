import { delay } from '../helpers/delay';

export async function quickSort(numbers: Array<number>, left: number, right: number, speed: number) {

    let leftWall;

    leftWall = await partition(numbers, left, right, speed); // Move smaller numbers before the pivot, greater numbers after

    if (left < leftWall - 1) {
        await quickSort(numbers, left, leftWall - 1, speed); // Sort the left (smaller) numbers
    }

    if (leftWall < right) {
        await quickSort(numbers, leftWall, right, speed); // Sort the right (higher) numbers
    }

}

async function partition(numbers: Array<number>, left: number, right: number, speed: number) {

    // Start with a pivot of the middle index
    const pivot = numbers[Math.floor((left + right) / 2)];

    let i = left;
    let j = right;


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
