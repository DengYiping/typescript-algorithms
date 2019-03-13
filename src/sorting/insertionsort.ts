import { swap } from './quicksort'

// Insertion sort algorithm
export default function insertionSort<T>(
  array: Array<T>,
  comp: (a1: T, a2: T) => boolean,
  first: number = 0,
  last: number = array.length - 1
) {
  if (last - first <= 0) {
    return // don't need to sort
  }

  for (let i = first; i <= last; i++) {
    let j = i - 1 // start off from the previous and loop back

    // put i in the right order
    while (j >= first && array[j] > array[j + 1]) {
      // If bigger, we swap them
      swap(array, j, j + 1)
      j = j - 1
    }
  }
}
