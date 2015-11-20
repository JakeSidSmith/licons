(function () {
  'use strict';

  var React = require('react');

  var getLicon = function (React) {
    return React.createClass({
      genClassName: function (props) {
        var className = 'licon';

        // Icon type
        className = className.concat(props.icon ? ' licon-'.concat(props.icon) : '');

        // Size
        if (props.large) {
          className = className.concat(' licon-large');
        } else if (props.small) {
          className = className.concat(' licon-small');
        }

        // Border radius
        if (props.rounded) {
          className = className.concat(' licon-rounded');
        } else if (props.round) {
          className = className.concat(' licon-round');
        }

        // Border
        if (props.border) {
          className = className.concat(' licon-border');
        }

        return className;
      },

      componentWillReceiveProps: function (nextProps) {
        this.setState({
          className: this.genClassName(nextProps)
        });
      },

      getInitialState: function () {
        return {
          className: this.genClassName(this.props)
        };
      },

      render: function () {
        return (
          <span {...this.props}
            className={
              this.state.className +
              (this.props.className ? ' '.concat(this.props.className) : '')
            }>
            <span></span>
          </span>
        );
      }
    });
  };

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this || window;

  // Export for commonjs / browserify
  if (typeof exports !== 'undefined') {
    var React = require('react');
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = getLicon(React);
    }
    exports.Licon = getLicon(React);
  } else if (typeof root !== 'undefined' && typeof root.React !== 'undefined') {
    // Add to root object
    root.Licon = getLicon(root.React);
  }

  // Define for requirejs
  if (root && typeof root.define === 'function' && root.define.amd) {
    root.define(['react'], function(React) {
      return getLicon(React);
    });
  }

})();
