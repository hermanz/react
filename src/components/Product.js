import React from 'react'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Image from 'react-bootstrap/lib/Image'

class Product extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const m = {"asin0" : "$100", "asin1" : "$20", "asin2" : "$120", "asin3" : "$340"}
    const n = {"asin0" : "Amazon.com", "asin1" : "Sephora", "asin2" : "Amazon.com", "asin3" : "YSL"}

    return (
  <ListGroup>
    <ListGroupItem><img width={130} height={140} src={"../../assets/" + this.props.asin + ".jpg"} responsive /></ListGroupItem>
    <ListGroupItem>{this.props.asin}</ListGroupItem>
    <ListGroupItem>{m[ this.props.asin ]}</ListGroupItem>
    <ListGroupItem>{n[ this.props.asin ]}</ListGroupItem>
    <ListGroupItem><img width={130} height={140} src={"../../assets/" + this.props.asin + "_" + this.props.color + "_" + this.props.light + ".jpg"} /></ListGroupItem>
  </ListGroup>
  );
  }
}

export default Product
