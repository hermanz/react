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
      color: "white",
      light: "bright"
    };
  }

  changeColor(c) {
    this.setState({
      color: c
    });
  }

  changeLight(x) {
    this.setState({
      light: x
    });
  }

  render() {
    return (
  <div>
    <Grid >
      <Row>
        <h2 style={{color:'#d2691e'}} >Compare with similar items</h2>
      </Row>
      <Row className="show-grid">
        <Col xs={12} md={4} mdOffset={8}>
    <DropdownButton title={"Skin color"}>
      <MenuItem onClick={ () => this.changeColor("white") }>White</MenuItem>
      <MenuItem onClick={ () => this.changeColor("asian") }>Asian</MenuItem>
      <MenuItem onClick={ () => this.changeColor("dark") }>Dark</MenuItem>
    </DropdownButton>

    <DropdownButton title={"Lighting"}>
      <MenuItem onClick={() => this.changeLight("bright")}>Daylight</MenuItem>
      <MenuItem onClick={() => this.changeLight("room")}>Room light</MenuItem>
    </DropdownButton>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col xs={12} md={2}>
        <ListGroup>
          <ListGroupItem><Image style={{visibility:'hidden'}} src="../../assets/bootstrap-img-mock.png" responsive /></ListGroupItem>
          <ListGroupItem>Name</ListGroupItem>
          <ListGroupItem>Price</ListGroupItem>
          <ListGroupItem>Sold By</ListGroupItem>
          <ListGroupItem style={{width:'165px', height:'163px'}}>Color sample</ListGroupItem>
        </ListGroup>
        </Col>
      { this.props.asins.map( e => <Product key={e.toString()} asin={ e } color={this.state.color} light={this.state.light}/> ).map( (e, index) => <Col key={index} xs={12} md={2}>{e}</Col>) }
    </Row>
    </Grid>
  </div>
  )};
}

export default Table
