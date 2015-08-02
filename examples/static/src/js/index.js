(function () {
  'use strict';

  var React = require('react');
  var Licon = require('../../../../src/js/index.js');

  var icons = [
    'menu',
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
      var icons = this.props.icons.map(function (icon) {
        return (
          <div key={icon} className='col-xs-3 col-sm-2 col-md-1 thumbnail'>
            <div>
              <Licon icon={icon} border rounded />
              <div className='caption'>
                <p>
                  {icon}
                </p>
              </div>
            </div>
          </div>
        );
      });

      return (
        <div className='row'>
          {icons}
        </div>
      );
    }
  });

  React.render(<RandomIcon icons={icons} />, document.getElementById('random-icon'));
  React.render(<IconList icons={icons} />, document.getElementById('icon-list'));
})();
