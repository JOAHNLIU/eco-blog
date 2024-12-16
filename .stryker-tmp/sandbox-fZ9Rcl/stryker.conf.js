/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
module.exports = stryMutAct_9fa48("93") ? {} : (stryCov_9fa48("93"), {
  mutate: stryMutAct_9fa48("94") ? [] : (stryCov_9fa48("94"), [stryMutAct_9fa48("95") ? "" : (stryCov_9fa48("95"), '**/*.js'), stryMutAct_9fa48("96") ? "" : (stryCov_9fa48("96"), '!**/__tests__/**'), stryMutAct_9fa48("97") ? "" : (stryCov_9fa48("97"), '!cypress/**')]),
  testRunner: stryMutAct_9fa48("98") ? "" : (stryCov_9fa48("98"), 'jest'),
  jest: stryMutAct_9fa48("99") ? {} : (stryCov_9fa48("99"), {
    projectType: stryMutAct_9fa48("100") ? "" : (stryCov_9fa48("100"), 'custom'),
    configFile: stryMutAct_9fa48("101") ? "" : (stryCov_9fa48("101"), 'jest.config.js'),
    enableFindRelatedTests: stryMutAct_9fa48("102") ? false : (stryCov_9fa48("102"), true)
  }),
  reporters: stryMutAct_9fa48("103") ? [] : (stryCov_9fa48("103"), [stryMutAct_9fa48("104") ? "" : (stryCov_9fa48("104"), 'html'), stryMutAct_9fa48("105") ? "" : (stryCov_9fa48("105"), 'clear-text'), stryMutAct_9fa48("106") ? "" : (stryCov_9fa48("106"), 'progress')]),
  packageManager: stryMutAct_9fa48("107") ? "" : (stryCov_9fa48("107"), 'npm'),
  coverageAnalysis: stryMutAct_9fa48("108") ? "" : (stryCov_9fa48("108"), 'off'),
  thresholds: stryMutAct_9fa48("109") ? {} : (stryCov_9fa48("109"), {
    high: 50,
    low: 30,
    break: null
  })
});