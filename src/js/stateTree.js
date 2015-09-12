'use strict';

var Baobab = require('baobab');
var PureRenderMixin = require('react/addons').PureRenderMixin;

module.exports = new Baobab({
  hola: 'hola'
}, {
  shiftReferences: true,
  autoCommit: true,
  mixins: [PureRenderMixin]
});
