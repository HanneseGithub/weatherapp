import React from 'react';
import './Searchbar.css';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import SearchSuggestions from '../searchsuggestions/SearchSuggestions';
import PropTypes from 'prop-types';

class Searchbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div id="searchbar-display">
        <InputGroup >
        <InputGroupAddon addonType="prepend">
          <Button type="submit" onClick={this.props.handleSubmit} color="info">{this.props.searchbtntext}</Button>
        </InputGroupAddon>
        <Input autocomplete="off123" id="searchbar"
        onChange={this.props.handleInputChange}
        placeholder="Insert a city" />
      </InputGroup>

      {
        (this.props.inputValue !== '' &&
        this.props.readyForSubmit === false)
        ? <SearchSuggestions
        suggestedResults={this.props.suggestedResults}
        handleSuggestionClick = {this.props.handleSuggestionClick}
        />
        :
        ''
      }
    </div>
    )
  }

}

Searchbar.propTypes = {
  searchbtntext: PropTypes.string
};

// Set default props.
Searchbar.defaultProps = {
  searchbtntext: 'Search'
};

export default Searchbar;