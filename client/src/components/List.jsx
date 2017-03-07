var React = require ("react");

var Song = require ("./Song");

var List = React.createClass({
  render: function(){
    var songNodes = this.props.songs.map(function(song, index){
      return (
          <Song key = {index}>
            <div className = "songnpos">
              <h2>{index + 1}</h2> {song["im:artist"].label}:  <i>{song["im:name"].label}</i>
            </div>
          
          </Song>
        );
    });

    return(
      <div className = "charts">
      {songNodes}
      </div>
      );
  }
});

module.exports = List;