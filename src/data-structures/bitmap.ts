export default class Bitmap {
  // Create a bitmap with the following size
  private size: number
  private numberArray: number[]

  constructor(size: number) {
    // Numbers in Javascript are 32 bits
    const numberBitLength = 32
    this.size = size
    let lengthArray = Math.ceil(size / numberBitLength)

    // init the array and fill with 0
    this.numberArray = new Array(lengthArray).fill(0)
  }

  getSize() {
    return this.size
  }

  get(index: number) {
    // Boundary check
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bound')
    }

    let arrayOffset = Math.floor(index / 32)
    let bitOffset = index % 32

    let mask = 1 << bitOffset

    // Check the corresponding bit
    if (this.numberArray[arrayOffset] & mask) {
      return 1
    }
    return 0
  }

  set(index: number, value: number) {
    // Boundary check
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bound')
    }

    let arrayOffset = Math.floor(index / 32)
    let bitOffset = index % 32

    let mask = 1 << bitOffset

    if (value !== 0) {
      // Set the bit
      this.numberArray[arrayOffset] |= mask
    } else {
      // Clear the bit
      this.numberArray[arrayOffset] &= ~mask
    }
  }
}
