import React from 'react'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Image from 'react-bootstrap/lib/Image'

const Product = ({ asin, color, light }) => (
  <ListGroup>
    <ListGroupItem><Image src="../../assets/bootstrap-img-mock.png" responsive /></ListGroupItem>
    <ListGroupItem>{asin}</ListGroupItem>
    <ListGroupItem>$100</ListGroupItem>
    <ListGroupItem>{color}, {light}</ListGroupItem>
  </ListGroup>
)

export default Product
