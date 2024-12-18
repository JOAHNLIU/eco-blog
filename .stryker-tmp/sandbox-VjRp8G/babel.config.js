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
module.exports = stryMutAct_9fa48("13") ? {} : (stryCov_9fa48("13"), {
  presets: stryMutAct_9fa48("14") ? [] : (stryCov_9fa48("14"), [stryMutAct_9fa48("15") ? "" : (stryCov_9fa48("15"), '@babel/preset-env'), stryMutAct_9fa48("16") ? "" : (stryCov_9fa48("16"), '@babel/preset-react')]),
  ignore: stryMutAct_9fa48("17") ? [] : (stryCov_9fa48("17"), [// Ігноруємо всі файли в node_modules за виключенням axios
  stryMutAct_9fa48("19") ? /node_modules\/(?!axios\/)./ : stryMutAct_9fa48("18") ? /node_modules\/(?=axios\/).*/ : (stryCov_9fa48("18", "19"), /node_modules\/(?!axios\/).*/)])
});