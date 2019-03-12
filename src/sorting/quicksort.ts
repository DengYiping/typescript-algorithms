// Commonly used swap function
function swap<T>(array: Array<T>, idx1: number, idx2: number) {
  let tmp = array[idx1]
  array[idx1] = array[idx2]
  array[idx2] = tmp
}

function partition<T>(
  array: Array<T>,
  first: number,
  last: number,
  comp: (arg1: T, arg2: T) => boolean
) {
  const pivot = array[last]
  let smallerEnd = first - 1

  for (let i = first; i < last; i++) {
    if (comp(array[i], pivot)) {
      // smaller than case
      smallerEnd = smallerEnd + 1
      swap(array, smallerEnd, i) // swap in
    }
  }
  smallerEnd = smallerEnd + 1
  swap(array, smallerEnd, last)
  return smallerEnd
}
/**
 * Implementation of quick sort algorithms
 */
export default function quickSort<T>(
  array: Array<T>,
  comp: (arg1: T, arg2: T) => boolean,
  first: number = 0,
  last: number = array.length - 1
) {
  // Error cases
  if (first < last) {
    const mid = partition(array, first, last, comp)
    quickSort(array, comp, first, mid - 1)
    quickSort(array, comp, mid + 1, last)
  }
}
