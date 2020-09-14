import React from 'react';
import './DataText.css';
import PropTypes from 'prop-types';

class DataText extends React.Component{
  render() {
    if(!this.props.icon) {
      return (
        <div id="datatext">
        {this.props.icon ? this.props.icon : ''}
        <p>{this.props.children}</p>
      </div>
      )
    } else if (this.props.icon) {
      return (
      <div id="datatext-with-icon">
        {this.props.icon}
        <p>{this.props.children}</p>
      </div>
      )
    }
  }
}

// Title must be anything that can be rendered: numbers, strings, elements or an array.
DataText.propTypes = {
  datatext: PropTypes.node
};

// Set default props.
DataText.defaultProps = {
  datatext: 'Here goes the title!'
};

export default DataText;