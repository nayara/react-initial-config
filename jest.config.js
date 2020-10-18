module.exports = {
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.js"
  ]
};
