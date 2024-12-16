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
const users = stryMutAct_9fa48("62") ? [] : (stryCov_9fa48("62"), [stryMutAct_9fa48("63") ? {} : (stryCov_9fa48("63"), {
  id: 1,
  name: stryMutAct_9fa48("64") ? "" : (stryCov_9fa48("64"), 'Іоанн Любченко'),
  email: stryMutAct_9fa48("65") ? "" : (stryCov_9fa48("65"), 'liubchenko18@gmail.com')
}), stryMutAct_9fa48("66") ? {} : (stryCov_9fa48("66"), {
  id: 2,
  name: stryMutAct_9fa48("67") ? "" : (stryCov_9fa48("67"), 'Шкарніков Дмитро'),
  email: stryMutAct_9fa48("68") ? "" : (stryCov_9fa48("68"), 'dimakashiroff@gmail.com')
})]);
const posts = stryMutAct_9fa48("69") ? [] : (stryCov_9fa48("69"), [stryMutAct_9fa48("70") ? {} : (stryCov_9fa48("70"), {
  id: 1,
  title: stryMutAct_9fa48("71") ? "" : (stryCov_9fa48("71"), 'Будь Eco-friendly'),
  content: stryMutAct_9fa48("72") ? "" : (stryCov_9fa48("72"), 'Контент поста'),
  userId: 1
}), stryMutAct_9fa48("73") ? {} : (stryCov_9fa48("73"), {
  id: 2,
  title: stryMutAct_9fa48("74") ? "" : (stryCov_9fa48("74"), 'Життя із дотриманням правил Eco-friendly'),
  content: stryMutAct_9fa48("75") ? "" : (stryCov_9fa48("75"), 'Контент поста'),
  userId: 2
})]);
const comments = stryMutAct_9fa48("76") ? [] : (stryCov_9fa48("76"), [stryMutAct_9fa48("77") ? {} : (stryCov_9fa48("77"), {
  id: 1,
  content: stryMutAct_9fa48("78") ? "" : (stryCov_9fa48("78"), 'Чудовий пост'),
  postId: 1,
  userId: 2
}), stryMutAct_9fa48("79") ? {} : (stryCov_9fa48("79"), {
  id: 2,
  content: stryMutAct_9fa48("80") ? "" : (stryCov_9fa48("80"), 'Дуже інформативно'),
  postId: 2,
  userId: 1
})]);
export { users, posts, comments };