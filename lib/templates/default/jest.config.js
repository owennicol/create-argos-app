module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/testUtils/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/testUtils/__mocks__/styleMock.js'
  },
  modulePaths: ['v2/app'],
  moduleFileExtensions: ['', 'json', 'js', 'jsx']
}
