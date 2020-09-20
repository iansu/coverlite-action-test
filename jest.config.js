module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/*.js'
  ],
  testEnvironment: 'node'
};
