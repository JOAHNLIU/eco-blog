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
import { fetchUsers, fetchPosts, fetchComments } from '../api';
const App = () => {
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
    if (stryMutAct_9fa48("35") ? (users.length === 0 || posts.length === 0) && comments.length === 0 : stryMutAct_9fa48("34") ? false : stryMutAct_9fa48("33") ? true : (stryCov_9fa48("33", "34", "35"), (stryMutAct_9fa48("37") ? users.length === 0 && posts.length === 0 : stryMutAct_9fa48("36") ? false : (stryCov_9fa48("36", "37"), (stryMutAct_9fa48("39") ? users.length !== 0 : stryMutAct_9fa48("38") ? false : (stryCov_9fa48("38", "39"), users.length === 0)) || (stryMutAct_9fa48("41") ? posts.length !== 0 : stryMutAct_9fa48("40") ? false : (stryCov_9fa48("40", "41"), posts.length === 0)))) || (stryMutAct_9fa48("43") ? comments.length !== 0 : stryMutAct_9fa48("42") ? false : (stryCov_9fa48("42", "43"), comments.length === 0)))) {
      if (stryMutAct_9fa48("44")) {
        {}
      } else {
        stryCov_9fa48("44");
        return <div>Loading...</div>;
      }
    }
    return <div>
      <h1>Eco-Blog</h1>
      <div>
        <h2>Users</h2>
        <ul>
          {users.map(stryMutAct_9fa48("45") ? () => undefined : (stryCov_9fa48("45"), user => <li key={user.id}>{user.name}</li>))}
        </ul>
      </div>
      <div>
        <h2>Posts</h2>
        <ul>
          {posts.map(stryMutAct_9fa48("46") ? () => undefined : (stryCov_9fa48("46"), post => <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>))}
        </ul>
      </div>
      <div>
        <h2>Comments</h2>
        <ul>
          {comments.map(stryMutAct_9fa48("47") ? () => undefined : (stryCov_9fa48("47"), comment => <li key={comment.id}>{comment.comment}</li>))}
        </ul>
      </div>
    </div>;
  }
};
export default App;