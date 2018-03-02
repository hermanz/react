import React from 'react'
import Product from './Product'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Image from 'react-bootstrap/lib/Image'

import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'

class Table extends React.Component {
  constructor(props) {
    super();
    this.state = {
      color: "color choice",
      light: "light choice"
    };
  }

  changeColor(c) {
    this.setState({
      color: c
    });
  }

  changeLight(l) {
    this.setState({
      light: l
    });
  }

  render() {
    return (
  <div>
    <h2>Compare with similar items</h2>
    <DropdownButton title={"Skin color"}>
      <MenuItem onClick={ () => this.changeColor("White") }>White</MenuItem>
      <MenuItem onClick={ () => this.changeColor("Asian") }>Asian</MenuItem>
    </DropdownButton>

    <DropdownButton title={"light effect"}>
      <MenuItem onClick={() => this.changeLight("Warm light")}>Warm light</MenuItem>
      <MenuItem onClick={() => this.changeLight("Room Light")}>Room light</MenuItem>
      <MenuItem onClick={() => this.changeLight("Cold Light")}>Cold light</MenuItem>
    </DropdownButton>

    <Grid >
      <Row className="show-grid">
        <Col xs={12} md={2}>
        <ListGroup>
          <ListGroupItem><Image style={{visibility:'hidden'}} src="../../assets/bootstrap-img-mock.png" responsive /></ListGroupItem>
          <ListGroupItem>ASIN</ListGroupItem>
          <ListGroupItem>Price</ListGroupItem>
          <ListGroupItem><DropdownButton title={"Skin color"}>
            <MenuItem onClick={() => this.changeColor("White")}>White</MenuItem>
            <MenuItem onClick={() => this.changeColor("Asian")}>Asian</MenuItem>
          </DropdownButton></ListGroupItem>
          <ListGroupItem><DropdownButton title={"light effect"}>
            <MenuItem onClick={() => this.changeLight("Warm light")}>Warm light</MenuItem>
            <MenuItem onClick={() => this.changeLight("Room Light")}>Room light</MenuItem>
            <MenuItem onClick={() => this.changeLight("Cold Light")}>Cold light</MenuItem>
          </DropdownButton></ListGroupItem>
        </ListGroup>
        </Col>
      { this.props.asins.map( e => <Product asin={ e } color={this.state.color} light={this.state.light}/> ).map( e => <Col xs={12} md={2}>{e}</Col>) }
    </Row>
    </Grid>
  </div>
  )};
}

export default Table
