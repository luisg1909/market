// jest.config.js
module.exports = {
 
    clearMocks: true,
  
   
    coverageDirectory: "coverage",
  
   
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],  
   
    testEnvironment: "jsdom",
  
    
    testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  
    // A map from regular expressions to paths to transformers
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
  
    // Setup file to enable extra matchers from @testing-library/jest-dom
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  };