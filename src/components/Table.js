import React from 'react'
import Product from './Product'

const Table = ({ colors }) => (
  <div>
    <ul>
      { colors.map( e => <li><Product color={ e }/></li> )}
    </ul>
  </div>
)

export default Table
