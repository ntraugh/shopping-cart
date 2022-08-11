import React from 'react'
import { Container } from 'react-bootstrap'
import Header from "../../public/images/header.jpg"

const Home = () => {
  return (
    <>
      <div className='d-flex justify-content-center justify-content-space-between text-white align-items-center pt-5'
        style={{"backgroundImage": `url(${Header})`, "backgroundRepeat": "no-repeat", "backgroundPosition": "center", "backgroundSize": "cover", "height": "500px" }}>
        <h1 style={{"fontSize": "6rem"}}>Welcome</h1>
        <br />
        <span className=''
        style={{"fontSize": "3rem"}}> 
          To Our Store
        </span>
      </div>
      <Container className='mt-5'>
        <div className='d-flex justify-content-space-between pt-5'>
          <div className="">
            <h2>Enjoy the Finest</h2>
            <span style={{"fontSize": "4rem"}}>Quality Products</span>
          </div>
          <div className='ms-auto'>
            <h1>Shop By</h1>
            <span style={{"fontSize": "4rem"}}>Any Category</span>
          </div>
        </div>
      </Container>

    </>
  )
}

export default Home