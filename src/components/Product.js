import React from 'react'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'

const Product = ({ color }) => (
  <ListGroup>
    <ListGroupItem>Price: $100</ListGroupItem>
    <ListGroupItem>Color: {color}</ListGroupItem>
  </ListGroup>
  /*
  <div>
    <p>Price: $100</p>
    <p>Skin Color: {color}</p>
    <p>Concealer: tem</p> 
  </div>
  */
)

export default Product
