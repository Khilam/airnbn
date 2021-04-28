import React from 'react'
import {Card, Container, Row} from 'react-bootstrap'

const partout=[
    {image:"https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320" , title:'Escapades en pleine nature'},
    {image: 'https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320', title:'Des logements uniques'},
    {image: 'https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320', title:'Logements entiers'},
    {image: 'https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=320', title:'Animaux de compagnie acceptés'}
]



function Cards2(props) {
    return (
        <div>
          <Container>
            <Row>
          <Card className='card'>
        <Card.Img  className='myCards' variant="top" src={props.image} />
      
          <Card.Text>
          <h6>{props.title}</h6>
          </Card.Text>
          </Card> 
          </Row>
          </Container>
      </div>
    )
}
function Partout() {
    return(
     <div className="container mb-5">
        <h3 className="my-3">Chez vous, partout</h3>
       <div className="citie">
          {partout.map(element =>
            <div>
               <Cards2 image = {element.image} title = {element.title}  />     
            </div>
          )}
       </div>
     </div>
    )
 }

export default Partout
