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

    setShape: function (value) {
      this.setState({
        shape: value
      });
    },

    setSize: function (value) {
      this.setState({
        size: value
      });
    },

    getInitialState: function () {
      return {
        iconIndex: 0,
        border: true,
        shape: 'round',
        size: null
      };
    },

    render: function () {
      return (
        <div className='row single-icon'>
          <div className='col-xs-12 col-sm-6 col-md-4 col-sm-push-3 col-md-push-4'>
            <Licon icon='arrow-left' className='pull-left' />
            <Licon icon={this.props.icons[this.state.iconIndex]}
              border={this.state.border}
              round={this.state.shape === 'round'}
              rounded={this.state.shape === 'rounded'}
              small={this.state.size === 'small'}
              large={this.state.size === 'large'} />
            <Licon icon='arrow-right' className='pull-right' />
            <p>
              {this.props.icons[this.state.iconIndex]}
            </p>

            <div className='form-inline'>
              <div className='form-group'>
                <label>Border:</label>
              </div>
              <div className='form-group'>
                <label>
                  On
                  <input type='radio'
                    checked={this.state.border}
                    onChange={this.setBorder.bind(this, true)} />
                </label>
              </div>
              <div className='form-group'>
                <label>
                  Off
                  <input type='radio'
                    checked={!this.state.border}
                    onChange={this.setBorder.bind(this, false)} />
                </label>
              </div>
            </div>

            <div className='form-inline'>
              <div className='form-group'>
                <label>Shape:</label>
              </div>
              <div className='form-group'>
                <label>
                  Default
                  <input type='radio'
                    checked={this.state.shape === null}
                    onChange={this.setShape.bind(this, null)} />
                </label>
              </div>
              <div className='form-group'>
                <label>
                  Round
                  <input type='radio'
                    checked={this.state.shape === 'round'}
                    onChange={this.setShape.bind(this, 'round')} />
                </label>
              </div>
              <div className='form-group'>
                <label>
                  Rounded
                  <input type='radio'
                    checked={this.state.shape === 'rounded'}
                    onChange={this.setShape.bind(this, 'rounded')} />
                </label>
              </div>
            </div>

            <div className='form-inline'>
              <div className='form-group'>
                <label>Size:</label>
              </div>
              <div className='form-group'>
                <label>
                  Default
                  <input type='radio'
                    checked={this.state.size === null}
                    onChange={this.setSize.bind(this, null)} />
                </label>
              </div>
              <div className='form-group'>
                <label>
                  Small
                  <input type='radio'
                    checked={this.state.size === 'small'}
                    onChange={this.setSize.bind(this, 'small')} />
                </label>
              </div>
              <div className='form-group'>
                <label>
                  Large
                  <input type='radio'
                    checked={this.state.size === 'large'}
                    onChange={this.setSize.bind(this, 'large')} />
                </label>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  module.exports = SingleIcon;
})();
