import React from 'react'
import { Col, Row } from 'react-bootstrap'
import storeItems from "../data/items.json"
import StoreItem from "../components/StoreItem"

const Store = () => {
  return (
    <>
    {/* setting rows at medium screen to show two per row, 1 per row on small devices, and 3 on large, with a gap of 3 */}
    <Row md={2} xs={1} lg={3} className="g-3">
      {storeItems.map((item) => (
        <Col key={item.id}>
          {/* ...item will take all of our data properties, need a key when mapping through in react, StoreItem componenet holds all the props we pass */}
          <StoreItem {...item} />
        </Col>

      ))}

    </Row>
  </> 
 
  )
}

export default Store