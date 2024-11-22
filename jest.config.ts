// jest.config.js
module.exports = {
    // ... your existing configuration ...
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
      '^@app/(.*)$': '<rootDir>/app/$1',
      '^@pages/(.*)$': '<rootDir>/pages/$1',
      '^@components/(.*)$': '<rootDir>/components/$1',
      '^@utils/(.*)$': '<rootDir>/utils/$1',
      '^@styles/(.*)$': '<rootDir>/styles/$1',
      '^@lib/(.*)$': '<rootDir>/lib/$1',
      '^@public/(.*)$': '<rootDir>/public/$1',
    },
  };
  