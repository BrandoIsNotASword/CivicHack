'use strict';

var React = require('react/addons');
var injectTapEventPlugin = require('react-tap-event-plugin');
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var mui = require('material-ui');
var CircularProgress = mui.CircularProgress;

var ReactTransitionGroup = React.addons.TransitionGroup;

injectTapEventPlugin();

// CSS
require('../styles/main.scss');

var imageURL = require('../images/yeoman.png');

var CivicHackApp = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <CircularProgress mode="indeterminate" />
        </ReactTransitionGroup>
      </div>
    );
  }
});
React.render(<CivicHackApp />, document.getElementById('content')); // jshint ignore:line

module.exports = CivicHackApp;
