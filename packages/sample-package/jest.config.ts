// packages/package-a/jest.config.js
// Jest configuration for api
import type { Config } from '@jest/types'
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  }
}
export default config
