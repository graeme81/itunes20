var React = require('react');
var ReactDOM = require('react-dom');

var Chart = require('./components/Chart.jsx');

window.onload = function(){
  ReactDOM.render(
    <Chart />,
    document.getElementById('app')
  );
}
