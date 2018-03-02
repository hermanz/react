import React from 'react'
import Product from './Product'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

const Table = ({ colors }) => (
  <div>
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={2}>
        <ListGroup>
          <ListGroupItem>Price</ListGroupItem>
          <ListGroupItem>Color</ListGroupItem>
        </ListGroup>
        </Col>
      { colors.map( e => <Product color={ e }/> ).map( e => <Col xs={12} md={2}>{e}</Col>) }
    </Row>
    </Grid>
  </div>
)

export default Table
