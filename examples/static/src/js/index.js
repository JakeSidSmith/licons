(function () {
  'use strict';

  var React = require('react');
  var Licon = require('../../../../src/js/index.js');

  var App = React.createClass({
    render: function () {
      return (
        <div>
          <p>
            <Licon border />
            <Licon border rounded />
            <Licon border circle />
            <Licon rounded />
          </p>

          <p>
            <Licon icon='menu' large border />
            <Licon icon='menu' large border rounded />
            <Licon icon='menu' large border circle />
            <Licon icon='menu' large rounded />
          </p>

          <p>
            <Licon icon='menu' border />
            <Licon icon='menu' border rounded />
            <Licon icon='menu' border circle />
            <Licon icon='menu' rounded />
          </p>

          <p>
            <Licon icon='menu' small border />
            <Licon icon='menu' small border rounded />
            <Licon icon='menu' small border circle />
            <Licon icon='menu' small rounded />
          </p>
        </div>
      );
    }
  });

  React.render(<App />, document.body);
})();
