import React from 'react'
import Product from './Product'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'

const Table = ({ colors }) => (
  <div>
    <ul>
      <li>
        <ListGroup>
          <ListGroupItem>Price</ListGroupItem>
          <ListGroupItem>Color</ListGroupItem>
        </ListGroup>
      </li>
      { colors.map( e => <li><Product color={ e }/></li> )}
    </ul>
  </div>
)

export default Table
