const { TestEnvironment } = require("jest-environment-jsdom");

module.exports = {
  TestEnvironment,
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Transform Javascript and JSX files using Babel
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"], // Path to setup file
};
