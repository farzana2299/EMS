import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
        <Navbar style={{position:'relative',right:'450px',fontSize:'45px',textDecoration:'none',width:'1815px',backgroundColor:'lightgreen'}}>
        <Container style={{color:'darkblue',textShadow: '2px 2px'}}>
          
          <h1  style={{position:'relative',left:'200px'}}><i class="fa-brands fa-slack"></i>{' '}
            EMS Application</h1>
          
        </Container>
      </Navbar>
    </div>
  )
}

export default Header