import React from 'react';
import Title from '../title/Title';
import DataText from '../datatext/DataText';
import './SearchResult.css'

import { Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';

class SearchResult extends React.Component {
  render () {
    return (
      <Card id="searchresult" className="text-center w-100" md="3">
        <Container>
          <CardBody>

            {/* Title */}
            <Row>
              <Col>
                <Title
                  title={this.props.fetchedData.name + ", " + this.props.fetchedData.sys.country}
                />
              </Col>
            </Row>

            {/* Temperature */}
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <DataText>
                  {Math.round(this.props.fetchedData.main.temp * 10) / 10} &#8451;
                </DataText>
              </Col>
            </Row>

            {/* Icon + description */}
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                  <DataText icon={
                  <img id="weathericon" src={"http://openweathermap.org/img/wn/"+ this.props.fetchedData.weather[0].icon+ ".png"}></img>
                  }>
                  {this.props.fetchedData.weather[0].description}
                </DataText>
              </Col>
            </Row>
          </CardBody>
        </Container>
      </Card>
    );
  }
}

export default SearchResult;
