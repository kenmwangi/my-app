const nextJest = require('next/jest');
const createJestConfig = nextJest({
  // path for Next.js app to load next.config.js
  dir: './',
});

// Adding custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
