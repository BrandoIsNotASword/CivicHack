'use strict';

var React = require('react');
var mixin = require('baobab-react/mixins');
var RaisedButton = require('material-ui').RaisedButton;

var imageURL = require('../../images/yeoman.png');

var MainApp = React.createClass({
  render: function() {
    return (
      <div className="presentation">
        <img 
          className="presentation__img" 
          src={imageURL} 
          alt="Politime"
        />
        <h1 className="presentation__h1">Descubre, conoce y analiza la trayectoria de tus senadores y diputados en México.</h1>
        <RaisedButton 
          className="presentation__button"
          label="Empezar" 
          backgroundColor="#37db67"
          labelColor="#ffffff"
        />
      </div>
    );
  }
});

module.exports = MainApp;
