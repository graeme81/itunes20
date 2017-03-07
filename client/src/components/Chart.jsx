var React = require("react");
var List = require("./List");

var Chart = React.createClass({
  getInitialState: function(){
    return {songs: []};
  },

  componentDidMount: function(){
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload= function(){
      if (request.status === 200){
        var data = JSON.parse(request.responseText);
        this.setState({songs: data.feed.entry});
        console.log("songs", this.state.songs);
      }
    }.bind(this);
    request.send();
  },

  render: function(){
    return (
      <div>
      <h1><u>Music Chart</u></h1>
      <List songs = {this.state.songs}/>
      </div>
      );
  }
});

module.exports = Chart;