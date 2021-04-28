import React from 'react'
import icon1 from '/home/mouna/Bureau/experience/src/images/icon1.jpg'
import icon2 from '/home/mouna/Bureau/experience/src/images/icon2.png'
import image1 from '/home/mouna/Bureau/experience/src/images/nav.png'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'

function MyNavbar() {
    return (
      
      <div href="#home"><img src={image1} className="image1" /> </div>
          /*<Navbar collapseOnSelect expand="lg" className="navbar">
           
        
         
          <Navbar.Brand href="#home"><img src={icon1} className="icon1" />
        
          </Navbar.Brand>
         
         
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features" className="texts">Hébergements</Nav.Link>
      <Nav.Link href="#pricing" className="texts">Expériences</Nav.Link>
      <Nav.Link href="#pricing" className="texts">Expériences en ligne</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Devenez hote</Nav.Link>
      <Navbar.Brand href="#home"><img src={icon2} className="icon1" /></Navbar.Brand>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1" className="texts">Inscription</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" className="texts">Connexion</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" className="texts">Heberger des voyageurs</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className="texts">Crer une expérience</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4" className="texts">Aide</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>

</Navbar> 
 </div>*/

     
        
    )
}

export default MyNavbar 
