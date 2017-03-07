var React = require("react");

var Song = function(props){
    return(
      <div>
        {props.children}
      </div>
      );
};

module.exports = Song;