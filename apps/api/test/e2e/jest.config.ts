import type { Config } from 'jest';

export default {
  displayName: 'api',
  preset: '../../../../jest.preset.js',
  globalSetup: '../.support/global-setup.ts',
  globalTeardown: '../.support/global-teardown.ts',
  setupFiles: ['../.support/test-setup.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html', 'json'],
  coverageDirectory: '../../../../coverage/apps/api/e2e',
} as Config;
