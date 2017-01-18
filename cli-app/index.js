var express = require('express');  
var browserify = require('browserify');  
var React = require('react');  
var jsx = require('node-jsx');  
var app = express();
jsx.install();


var Hello = React.createClass({  
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

React.render(<Hello name='World' />, document.getElementById('container'));