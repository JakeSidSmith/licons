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

    setBorder: function (value) {
      this.setState({
        border: value
      });
    },

    getInitialState: function () {
      return {
        iconIndex: 0,
        border: true
      };
    },

    render: function () {
      return (
        <div className='row single-icon'>
          <div className='col-xs-12 col-sm-6 col-md-4 col-sm-push-3 col-md-push-4'>
            <Licon icon='arrow-left' className='pull-left' />
            <Licon icon={this.props.icons[this.state.iconIndex]} border={this.state.border} round />
            <Licon icon='arrow-right' className='pull-right' />
            <p>
              {this.props.icons[this.state.iconIndex]}
            </p>
            <div className='form-inline'>
              <div className='form-group'>
                <label>Border:</label>
              </div>
              <div className='form-group'>
                <label>On</label>
                <input type='radio' checked={this.state.border} onChange={this.setBorder.bind(this, true)} />
              </div>
              <div className='form-group'>
                <label>Off</label>
                <input type='radio' checked={!this.state.border} onChange={this.setBorder.bind(this, false)} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  module.exports = SingleIcon;
})();
