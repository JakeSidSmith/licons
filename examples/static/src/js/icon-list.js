(function () {
  'use strict';

  var React = require('react');
  var Licon = require('../../../../src/js/index.js');

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

  module.exports = IconList;
})();
