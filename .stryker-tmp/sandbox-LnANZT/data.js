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
const users = stryMutAct_9fa48("30") ? [] : (stryCov_9fa48("30"), [stryMutAct_9fa48("31") ? {} : (stryCov_9fa48("31"), {
  id: 1,
  name: stryMutAct_9fa48("32") ? "" : (stryCov_9fa48("32"), 'Іоанн Любченко'),
  email: stryMutAct_9fa48("33") ? "" : (stryCov_9fa48("33"), 'liubchenko18@gmail.com')
}), stryMutAct_9fa48("34") ? {} : (stryCov_9fa48("34"), {
  id: 2,
  name: stryMutAct_9fa48("35") ? "" : (stryCov_9fa48("35"), 'Шкарніков Дмитро'),
  email: stryMutAct_9fa48("36") ? "" : (stryCov_9fa48("36"), 'dimakashiroff@gmail.com')
})]);
const posts = stryMutAct_9fa48("37") ? [] : (stryCov_9fa48("37"), [stryMutAct_9fa48("38") ? {} : (stryCov_9fa48("38"), {
  id: 1,
  title: stryMutAct_9fa48("39") ? "" : (stryCov_9fa48("39"), 'Будь Eco-friendly'),
  content: stryMutAct_9fa48("40") ? "" : (stryCov_9fa48("40"), 'Контент поста'),
  userId: 1
}), stryMutAct_9fa48("41") ? {} : (stryCov_9fa48("41"), {
  id: 2,
  title: stryMutAct_9fa48("42") ? "" : (stryCov_9fa48("42"), 'Життя із дотриманням правил Eco-friendly'),
  content: stryMutAct_9fa48("43") ? "" : (stryCov_9fa48("43"), 'Контент поста'),
  userId: 2
})]);
const comments = stryMutAct_9fa48("44") ? [] : (stryCov_9fa48("44"), [stryMutAct_9fa48("45") ? {} : (stryCov_9fa48("45"), {
  id: 1,
  content: stryMutAct_9fa48("46") ? "" : (stryCov_9fa48("46"), 'Чудовий пост'),
  postId: 1,
  userId: 2
}), stryMutAct_9fa48("47") ? {} : (stryCov_9fa48("47"), {
  id: 2,
  content: stryMutAct_9fa48("48") ? "" : (stryCov_9fa48("48"), 'Дуже інформативно'),
  postId: 2,
  userId: 1
})]);
export { users, posts, comments };