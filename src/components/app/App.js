import React from 'react';
import Title from '../title/Title';
import Searchbar from '../searchbar/Searchbar';
import SearchResult from '../searchresult/SearchResult';

import { Card, CardBody, CardTitle } from 'reactstrap';

var cityNames = [];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      suggestedResults: [],
      readyForSubmit: false,
      fetchedData: [],
      suggestionClicked: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSuggestionClick = this.handleSuggestionClick.bind(this)
    // this.farenheitToCelsius = this.farenheitToCelsius.bind(this)
  }

  componentDidMount() {
    async function fetchCityNames() {
      var cityList = require('../../city.list.json');

      for(var i = 0; i < cityList.length; i++) {
        var cityName = cityList[i];
        cityNames.push(cityName.name);
      }
      console.log(cityNames);
    }

    fetchCityNames();
  }

  handleInputChange = function(event) {
    event.preventDefault();
    this.setState({
      inputValue: event.target.value,
       // BUG: This does not filter the first letter written in. onChange() seems to be working after the 2nd letter.
      // It takes all the cities and filters the array against the input's current state. It leaves all out with no matching letter pattern.
      readyForSubmit: false,
      suggestedResults: cityNames
      .filter((word, index) =>
      (word.toLowerCase().indexOf(this.state.inputValue.toLowerCase()) !== -1))
      .filter((word, index) => index < 5)
    });

    console.log(this.state.suggestedResults);
  }

  handleSuggestionClick = async function(event) {
    var selection = event.target.innerHTML;

    await this.setState({
      inputValue: selection,
      suggestionClicked: true
    });

    document.getElementById("searchbar").value = selection;

    this.handleSubmit();
  }

  handleSubmit = async function(event) {
    var submitInput = this.state.inputValue;
    this.setState({
      readyForSubmit: true,
    })

    // Get the data based on input's value after pressing the button.
    await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + submitInput +"&units=metric&appid=666c76cfc1967369ebb3dc882e3046c3")
    .then(response => response.json())
    .then(json => {
      this.setState({
        fetchedData: json})
      });
  }

  render () {
    console.log(this.state.fetchedData)
    console.log(this.state.celsiusTemp)
    return (
      <div>
        <Card
        className="text-center w-100" md="3">
          <CardBody>
            <CardTitle>
              <Title title="What's the weather like?"/>
            </CardTitle>
            <Searchbar
            cityNames={cityNames}
            inputValue={this.state.inputValue}
            readyForSubmit={this.state.readyForSubmit}
            suggestedResults={this.state.suggestedResults}
            blurred={this.state.blurred}

            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
            handleSuggestionClick={this.handleSuggestionClick}
            />
          </CardBody>
        </Card>
        {
          Object.keys(this.state.fetchedData).length == 0
          ? ''
          : < SearchResult
          fetchedData = {this.state.fetchedData}
          />
        }
      </div>
    )
  }
}

export default App;
