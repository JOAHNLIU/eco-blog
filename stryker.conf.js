module.exports = function(config) {
  config.set({
    mutate: ['**/*.js', '!**/__tests__/**', '!cypress/**'], // Виключення Cypress тестів
    testRunner: 'jest',
    jest: {
      projectType: 'custom',
      configFile: 'jest.config.js',
      enableFindRelatedTests: true,
    },
    reporters: ['html', 'clear-text', 'progress'],
    packageManager: 'npm',
    coverageAnalysis: 'off',
    thresholds: {
      high: 50,
      low: 30,
      break: null
    }
  });
};
