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
import axios from 'axios';
import { users, posts, comments } from './data';
const BASE_URL = stryMutAct_9fa48("0") ? "" : (stryCov_9fa48("0"), 'https://jsonplaceholder.typicode.com');
export const fetchUsers = () => {
  if (stryMutAct_9fa48("1")) {
    {}
  } else {
    stryCov_9fa48("1");
    return new Promise(resolve => {
      if (stryMutAct_9fa48("2")) {
        {}
      } else {
        stryCov_9fa48("2");
        setTimeout(() => {
          if (stryMutAct_9fa48("3")) {
            {}
          } else {
            stryCov_9fa48("3");
            resolve(stryMutAct_9fa48("4") ? {} : (stryCov_9fa48("4"), {
              data: users
            }));
          }
        }, 1000);
      }
    });
  }
};
export const fetchPosts = () => {
  if (stryMutAct_9fa48("5")) {
    {}
  } else {
    stryCov_9fa48("5");
    return new Promise(resolve => {
      if (stryMutAct_9fa48("6")) {
        {}
      } else {
        stryCov_9fa48("6");
        setTimeout(() => {
          if (stryMutAct_9fa48("7")) {
            {}
          } else {
            stryCov_9fa48("7");
            resolve(stryMutAct_9fa48("8") ? {} : (stryCov_9fa48("8"), {
              data: posts
            }));
          }
        }, 1000);
      }
    });
  }
};
export const fetchComments = () => {
  if (stryMutAct_9fa48("9")) {
    {}
  } else {
    stryCov_9fa48("9");
    return new Promise(resolve => {
      if (stryMutAct_9fa48("10")) {
        {}
      } else {
        stryCov_9fa48("10");
        setTimeout(() => {
          if (stryMutAct_9fa48("11")) {
            {}
          } else {
            stryCov_9fa48("11");
            resolve(stryMutAct_9fa48("12") ? {} : (stryCov_9fa48("12"), {
              data: comments
            }));
          }
        }, 1000);
      }
    });
  }
};