 import React from 'react';
import './SearchSuggestions.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

class SearchSuggestions extends React.Component {
  render() {
    return (
    <ListGroup id="listgroup" className="w-100" className="text-left">
      {this.props.suggestedResults.map(city =>
        <ListGroupItem onClick={this.props.handleSuggestionClick}
        >{city}</ListGroupItem>
      )}
    </ListGroup>
    );
  }
}

export default SearchSuggestions