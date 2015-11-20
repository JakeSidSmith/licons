(function () {
  'use strict';

  var getLicon = function (React, _) {
    return React.createClass({
      getClassName: function () {
        var className = 'licon';

        // Icon type
        if (this.props.icon) {
          className += ' licon-' + this.props.icon;
        }

        // Size
        if (this.props.large) {
          className += ' licon-large';
        } else if (this.props.small) {
          className += ' licon-small';
        }

        // Border radius
        if (this.props.rounded) {
          className += ' licon-rounded';
        } else if (this.props.round) {
          className += ' licon-round';
        }

        // Border
        if (this.props.border) {
          className += ' licon-border';
        }

        return className;
      },

      render: function () {
        var props = _.extend({}, this.props, { className: this.getClassName() });

        return (
          React.createElement(
            'span',
            props,
            React.createElement('span')
          )
        );
      }
    });
  };

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this || window;

  // Export for commonjs / browserify
  if (typeof exports !== 'undefined') {
    var React = require('react');
    var _ = require('underscore');
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = getLicon(React, _);
    }
    exports.Licon = getLicon(React, _);
  } else if (typeof root !== 'undefined') {
    if (typeof root.React !== 'undefined' && typeof root._ !== 'undefined') {
      // Add to root object
      root.Licon = getLicon(root.React, root._);
    }

    // Define for requirejs
    if (typeof root.define === 'function' && root.define.amd) {
      root.define(['react', 'underscore'], function(defineReact, define_) {
        return getLicon(defineReact, define_);
      });
    }
  }

})();
