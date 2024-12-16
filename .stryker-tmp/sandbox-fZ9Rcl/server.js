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
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
mongoose.connect(stryMutAct_9fa48("81") ? "" : (stryCov_9fa48("81"), 'mongodb://localhost:27017/eco-blog'), stryMutAct_9fa48("82") ? {} : (stryCov_9fa48("82"), {
  useNewUrlParser: stryMutAct_9fa48("83") ? false : (stryCov_9fa48("83"), true),
  useUnifiedTopology: stryMutAct_9fa48("84") ? false : (stryCov_9fa48("84"), true)
}));
const postSchema = new mongoose.Schema(stryMutAct_9fa48("85") ? {} : (stryCov_9fa48("85"), {
  title: String,
  content: String
}));
const Post = mongoose.model(stryMutAct_9fa48("86") ? "" : (stryCov_9fa48("86"), 'Post'), postSchema);
app.get(stryMutAct_9fa48("87") ? "" : (stryCov_9fa48("87"), '/posts'), async (req, res) => {
  if (stryMutAct_9fa48("88")) {
    {}
  } else {
    stryCov_9fa48("88");
    const posts = await Post.find();
    res.json(posts);
  }
});
app.post(stryMutAct_9fa48("89") ? "" : (stryCov_9fa48("89"), '/posts'), async (req, res) => {
  if (stryMutAct_9fa48("90")) {
    {}
  } else {
    stryCov_9fa48("90");
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  }
});
app.listen(3000, () => {
  if (stryMutAct_9fa48("91")) {
    {}
  } else {
    stryCov_9fa48("91");
    console.log(stryMutAct_9fa48("92") ? "" : (stryCov_9fa48("92"), 'Server is running on port 3000'));
  }
});
module.exports = app;