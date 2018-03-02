import React from 'react'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Image from 'react-bootstrap/lib/Image'

const Product = ({ asin, color, light }) => (
  <ListGroup>
    <ListGroupItem><Image src="../../assets/bootstrap-img-mock.png" responsive /></ListGroupItem>
    <ListGroupItem>{asin}</ListGroupItem>
    <ListGroupItem>$100</ListGroupItem>
    <ListGroupItem><img width={130} height={140} src={"../../assets/" + asin + "_" + color + "_" + light + ".jpg"} /></ListGroupItem>
  </ListGroup>
)

export default Product
