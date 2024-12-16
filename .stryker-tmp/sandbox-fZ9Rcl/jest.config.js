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
module.exports = stryMutAct_9fa48("71") ? {} : (stryCov_9fa48("71"), {
  testEnvironment: stryMutAct_9fa48("72") ? "" : (stryCov_9fa48("72"), 'node'),
  setupFilesAfterEnv: stryMutAct_9fa48("73") ? [] : (stryCov_9fa48("73"), [stryMutAct_9fa48("74") ? "" : (stryCov_9fa48("74"), '<rootDir>/jest.setup.js')]),
  transformIgnorePatterns: stryMutAct_9fa48("75") ? [] : (stryCov_9fa48("75"), [stryMutAct_9fa48("76") ? "" : (stryCov_9fa48("76"), '<rootDir>/node_modules/')]),
  transform: stryMutAct_9fa48("77") ? {} : (stryCov_9fa48("77"), {
    '^.+\\.(js|jsx)$': stryMutAct_9fa48("78") ? "" : (stryCov_9fa48("78"), 'babel-jest')
  }),
  testPathIgnorePatterns: stryMutAct_9fa48("79") ? [] : (stryCov_9fa48("79"), [stryMutAct_9fa48("80") ? "" : (stryCov_9fa48("80"), '<rootDir>/cypress/')])
});