import React from 'react'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Image from 'react-bootstrap/lib/Image'

const Product = ({ color }) => (
  <ListGroup>
    <ListGroupItem><Image src="../../assets/bootstrap-img-mock.png" /></ListGroupItem>
    <ListGroupItem>$100</ListGroupItem>
    <ListGroupItem>{color}</ListGroupItem>
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
