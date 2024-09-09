module.exports = {
    preset: 'ts-jest', // or 'jest-puppeteer' if you're using TypeScript
    setupFilesAfterEnv: ['./src/setupTests.js'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    // testEnvironment: 'jest-environment-jsdom',
    // testEnvironmentOptions: {
    //     url: 'https://localhost',
    //     tls: {
    //       rejectUnauthorized: false,
    //     },
    // },
    globals: {
        Response: require('response'),
    },
  };