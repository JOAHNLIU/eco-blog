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
const users = stryMutAct_9fa48("52") ? [] : (stryCov_9fa48("52"), [stryMutAct_9fa48("53") ? {} : (stryCov_9fa48("53"), {
  id: 1,
  name: stryMutAct_9fa48("54") ? "" : (stryCov_9fa48("54"), 'Іоанн Любченко'),
  email: stryMutAct_9fa48("55") ? "" : (stryCov_9fa48("55"), 'liubchenko18@gmail.com')
}), stryMutAct_9fa48("56") ? {} : (stryCov_9fa48("56"), {
  id: 2,
  name: stryMutAct_9fa48("57") ? "" : (stryCov_9fa48("57"), 'Шкарніков Дмитро'),
  email: stryMutAct_9fa48("58") ? "" : (stryCov_9fa48("58"), 'dimakashiroff@gmail.com')
})]);
const posts = stryMutAct_9fa48("59") ? [] : (stryCov_9fa48("59"), [stryMutAct_9fa48("60") ? {} : (stryCov_9fa48("60"), {
  id: 1,
  title: stryMutAct_9fa48("61") ? "" : (stryCov_9fa48("61"), 'Будь Eco-friendly'),
  content: stryMutAct_9fa48("62") ? "" : (stryCov_9fa48("62"), 'Контент поста'),
  userId: 1
}), stryMutAct_9fa48("63") ? {} : (stryCov_9fa48("63"), {
  id: 2,
  title: stryMutAct_9fa48("64") ? "" : (stryCov_9fa48("64"), 'Життя із дотриманням правил Eco-friendly'),
  content: stryMutAct_9fa48("65") ? "" : (stryCov_9fa48("65"), 'Контент поста'),
  userId: 2
})]);
const comments = stryMutAct_9fa48("66") ? [] : (stryCov_9fa48("66"), [stryMutAct_9fa48("67") ? {} : (stryCov_9fa48("67"), {
  id: 1,
  content: stryMutAct_9fa48("68") ? "" : (stryCov_9fa48("68"), 'Чудовий пост'),
  postId: 1,
  userId: 2
}), stryMutAct_9fa48("69") ? {} : (stryCov_9fa48("69"), {
  id: 2,
  content: stryMutAct_9fa48("70") ? "" : (stryCov_9fa48("70"), 'Дуже інформативно'),
  postId: 2,
  userId: 1
})]);
export { users, posts, comments };