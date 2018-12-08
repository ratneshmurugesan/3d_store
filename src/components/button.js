import React from 'react';
import PropTypes from "prop-types";

class Button extends React.Component {


    addItem(e){
      this.props.addImages();
    };

    render() {
          return (
              <button className="arrow-load-more" onClick={() => {this.addItem()}} key={this.props.name.toString()}>{this.props.name}</button>
          );
        }
    
  }

  
  export default Button;