(function () {
  'use strict';

  var React = require('react');
  var Licon = require('../../../../src/js/index.js');

  var SingleIcon = React.createClass({
    incrementIndex: function () {
      this.setState({
        iconIndex: (this.state.iconIndex += 1) % this.props.icons.length
      });
    },

    selectRandom: function () {
      var randomIconIndex = Math.floor((Math.random() * this.props.icons.length));

      while(this.props.icons.length > 1 && randomIconIndex === this.state.iconIndex) {
        randomIconIndex = Math.floor((Math.random() * this.props.icons.length));
      }

      this.setState({
        iconIndex: randomIconIndex
      });
    },

    componentDidMount: function () {
      setInterval(this.selectRandom, 2000);
    },

    getInitialState: function () {
      return {
        iconIndex: 0
      };
    },

    render: function () {
      return (
        <Licon icon={this.props.icons[this.state.iconIndex]} border rounded />
      );
    }
  });

  module.exports = SingleIcon;
})();
