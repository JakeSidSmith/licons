(function () {
  'use strict';

  var React = require('react');
  var icons = require('./icons.js');
  var SingleIcon = require('./single-icon');
  var IconList = require('./icon-list');

  React.render(<SingleIcon icons={icons} />, document.getElementById('single-icon'));
  React.render(<IconList icons={icons} />, document.getElementById('icon-list'));
})();
