(function () {
  'use strict';

  var React = require('react');
  var Licon = require('../../../../src/js/index.js');

  var icons = [
    'menu',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'chevron-down'
  ];

  icons.sort();

  var RandomIcon = React.createClass({
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

  var IconList = React.createClass({
    render: function () {
      var iconList = this.props.icons.map(function (iconName) {
        return (
          <div key={iconName} className='col-xs-3 col-sm-2 col-md-1 thumbnail'>
            <div>
              <Licon icon={iconName} border rounded />
              <div className='caption'>
                <p>
                  {iconName}
                </p>
              </div>
            </div>
          </div>
        );
      });

      return (
        <div className='row'>
          {iconList}
        </div>
      );
    }
  });

  React.render(<RandomIcon icons={icons} />, document.getElementById('random-icon'));
  React.render(<IconList icons={icons} />, document.getElementById('icon-list'));
})();
