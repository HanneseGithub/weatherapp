import React from 'react';
import './Title.css';
// PropTypes exports a range of validators that can be used to make sure the data you receive is valid.
import PropTypes from 'prop-types';

class Title extends React.Component{
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

// Title must be anything that can be rendered: numbers, strings, elements or an array.
Title.propTypes = {
  title: PropTypes.node
};

// Set default props.
Title.defaultProps = {
  title: 'Here goes the title!'
};

export default Title;