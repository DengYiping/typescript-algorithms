import insertionSort from '../../src/sorting/insertionsort'

describe('Insertion sort', () => {
  it('should sort an array correctly', () => {
    let array = [3, 1, 2, 4]
    insertionSort(array, (n1, n2) => n1 < n2)
    expect(array).toEqual([1, 2, 3, 4])

    let arr = [1, 3, 1, 4, 1]
    insertionSort(arr, (n1, n2) => n1 < n2)
    expect(arr).toEqual([1, 1, 1, 3, 4])
  })

  it('should be able to handle negative inputs', () => {
    const array = [-1, -2, 1, 2, 5]
    insertionSort(array, (p, q) => p < q)
    expect(array).toEqual([-2, -1, 1, 2, 5])
  })

  it('should match the original sort function', () => {
    let arr1 = Array.from({ length: 1024 }, () => Math.random())
    let arr2 = Array.from(arr1)
    insertionSort(arr1, (p, q) => p < q)
    expect(arr1).toEqual(arr2.sort())
  })

  it('should leave along empty or single element array', () => {
    let arrSingle = [1]
    let arrSingleCopy = Array.from(arrSingle)
    let arrEmpty: Array<number> = []
    insertionSort(arrSingle, (p, q) => p < q)
    expect(arrSingle).toEqual(arrSingleCopy)

    insertionSort(arrEmpty, (p, q) => p < q)
    expect(arrEmpty.length).toBe(0)
  })
})
