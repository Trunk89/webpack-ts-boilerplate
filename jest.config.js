module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 90,
      functions: 0,
      lines: 0,
    },
  }
  //setupFiles: ['./jest.setup-file.ts'],
}