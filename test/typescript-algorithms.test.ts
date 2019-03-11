import algo from '../src/typescript-algorithms'

/**
 * TypeScript Algo test
 */
describe('TypeScript Algo module', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('should have all the key value for all the module', () => {
    expect(algo).toBeTruthy()
    expect(algo.Bitmap).toBeTruthy()
  })
})
