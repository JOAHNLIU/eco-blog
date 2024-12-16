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
import React, { useState, useEffect } from 'react';
import { fetchUsers, fetchPosts, fetchComments } from '../api';
const App = () => {
  if (stryMutAct_9fa48("13")) {
    {}
  } else {
    stryCov_9fa48("13");
    const [users, setUsers] = useState(stryMutAct_9fa48("14") ? ["Stryker was here"] : (stryCov_9fa48("14"), []));
    const [posts, setPosts] = useState(stryMutAct_9fa48("15") ? ["Stryker was here"] : (stryCov_9fa48("15"), []));
    const [comments, setComments] = useState(stryMutAct_9fa48("16") ? ["Stryker was here"] : (stryCov_9fa48("16"), []));
    useEffect(() => {
      if (stryMutAct_9fa48("17")) {
        {}
      } else {
        stryCov_9fa48("17");
        let isMounted = stryMutAct_9fa48("18") ? false : (stryCov_9fa48("18"), true);
        const fetchData = async () => {
          if (stryMutAct_9fa48("19")) {
            {}
          } else {
            stryCov_9fa48("19");
            const usersResponse = await fetchUsers();
            const postsResponse = await fetchPosts();
            const commentsResponse = await fetchComments();
            if (stryMutAct_9fa48("21") ? false : stryMutAct_9fa48("20") ? true : (stryCov_9fa48("20", "21"), isMounted)) {
              if (stryMutAct_9fa48("22")) {
                {}
              } else {
                stryCov_9fa48("22");
                setUsers(usersResponse);
                setPosts(postsResponse);
                setComments(commentsResponse);
              }
            }
          }
        };
        fetchData();
        return () => {
          if (stryMutAct_9fa48("23")) {
            {}
          } else {
            stryCov_9fa48("23");
            isMounted = stryMutAct_9fa48("24") ? true : (stryCov_9fa48("24"), false);
          }
        };
      }
    }, stryMutAct_9fa48("25") ? ["Stryker was here"] : (stryCov_9fa48("25"), []));
    return <div>
      <h1>Eco-Blog</h1>
      {/* Рендеринг компонентів */}
    </div>;
  }
};
export default App;