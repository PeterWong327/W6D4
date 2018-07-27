const DNC = require('./dom_node_collection.js');

Window.prototype.$l = function(selector) {
  let NodeList;
  if (typeof selector === 'string') {
    NodeList = Array.from(document.querySelectorAll(selector));
    return new DNC(NodeList);
  } else if (selector instanceof HTMLElement) {
    return new DNC ([selector]);
  }
};




