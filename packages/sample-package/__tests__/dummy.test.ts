import { dummyFunction } from '../src/index'

describe('Dummy test', () => {
  it('Dummy test', () => {
    expect(dummyFunction).toBeDefined()
    const output = dummyFunction('test')
    expect(output).toBe('test')
  })
})
