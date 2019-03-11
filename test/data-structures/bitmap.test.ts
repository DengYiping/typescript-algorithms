import Bitmap from '../../src/data-structures/bitmap'

describe('Bitmap', () => {
  it('should be able to set and get at arbitrary bit', () => {
    const bitmap = new Bitmap(1024)
    for (let i = 0; i < 1024; i++) {
      expect(bitmap.get(i)).toBe(0)
      bitmap.set(i, 1)
      expect(bitmap.get(i)).toBe(1)
      bitmap.set(i, 0)
      expect(bitmap.get(i)).toBe(0)
    }
  })

  it('should throw errors if access out of the bound', () => {
    const bitmap = new Bitmap(2048)
    expect(() => bitmap.get(2048)).toThrow(Error)
    expect(() => bitmap.set(2048, 1)).toThrow(Error)
    expect(() => bitmap.get(-1)).toThrow(Error)
  })

  it('should return the correct size', () => {
    const bitmap = new Bitmap(1020)
    expect(bitmap.getSize()).toBe(1020)
  })
})
