module.exports = {
  rootDir: '../',
  setupFiles: ['<rootDir>/config/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/testUtils/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/config/testUtils/__mocks__/styleMock.js'
  },
  testMatch: [
    '<rootDir>/**/__tests__/**/*.js?(x)',
    '<rootDir>/**/?(*.)(spec|test).js?(x)'
  ],
  moduleFileExtensions: ['', 'json', 'js', 'jsx']
}
