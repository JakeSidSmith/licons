(function () {
  'use strict';

  var React = require('react');

  var Licon = React.createClass({
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
        <span className={this.state.className}>
          <span></span>
        </span>
      );
    }
  });

  module.exports = Licon;
})();
