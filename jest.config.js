module.exports = {
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js"
  ]
};
