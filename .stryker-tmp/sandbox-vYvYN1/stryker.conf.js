/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
// @ts-nocheck

module.exports = {
    mutate: ['src/**/*.js'], 
    mutator: 'javascript',
    testRunner: 'jest',
    jest: {
      projectType: 'custom',
      configFile: 'jest.config.js'
    },
    reporters: ['html', 'clear-text', 'progress'],
    packageManager: 'npm',
    coverageAnalysis: 'off',
    thresholds: { 
      high: 80,
      low: 60,
      break: 50
    }
  };
  