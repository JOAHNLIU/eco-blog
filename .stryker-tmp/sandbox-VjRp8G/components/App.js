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
import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import { fetchUsers, fetchPosts, fetchComments } from '../api';
function App() {
  if (stryMutAct_9fa48("20")) {
    {}
  } else {
    stryCov_9fa48("20");
    const [users, setUsers] = useState(stryMutAct_9fa48("21") ? ["Stryker was here"] : (stryCov_9fa48("21"), []));
    const [posts, setPosts] = useState(stryMutAct_9fa48("22") ? ["Stryker was here"] : (stryCov_9fa48("22"), []));
    const [comments, setComments] = useState(stryMutAct_9fa48("23") ? ["Stryker was here"] : (stryCov_9fa48("23"), []));
    useEffect(() => {
      if (stryMutAct_9fa48("24")) {
        {}
      } else {
        stryCov_9fa48("24");
        let isMounted = stryMutAct_9fa48("25") ? false : (stryCov_9fa48("25"), true);
        const fetchData = async () => {
          if (stryMutAct_9fa48("26")) {
            {}
          } else {
            stryCov_9fa48("26");
            const usersResponse = await fetchUsers();
            const postsResponse = await fetchPosts();
            const commentsResponse = await fetchComments();
            if (stryMutAct_9fa48("28") ? false : stryMutAct_9fa48("27") ? true : (stryCov_9fa48("27", "28"), isMounted)) {
              if (stryMutAct_9fa48("29")) {
                {}
              } else {
                stryCov_9fa48("29");
                setUsers(usersResponse.data);
                setPosts(postsResponse.data);
                setComments(commentsResponse.data);
              }
            }
          }
        };
        fetchData();
        return () => {
          if (stryMutAct_9fa48("30")) {
            {}
          } else {
            stryCov_9fa48("30");
            isMounted = stryMutAct_9fa48("31") ? true : (stryCov_9fa48("31"), false);
          }
        };
      }
    }, stryMutAct_9fa48("32") ? ["Stryker was here"] : (stryCov_9fa48("32"), []));
    return <div>
      <h1>Eco-Blog</h1>
      <Posts posts={posts} comments={comments} users={users} />
    </div>;
  }
}
export default App;