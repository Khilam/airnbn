import React from 'react'
import {Row, Container, Card} from 'react-bootstrap'

const cards4=[
    {images:'https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=320', title: "Collection à la une : Envies d évasion",  text: 'Voyagez depuis chez vous grâce aux expériences en ligne.'},
    {images:'https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=320', title: 'Expériences en ligne', text: 'Activités interactives en direct, animées par des hôtes.'},
    {images:'https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=320', title: 'Expériences', text: 'Prenez part à des activités locales, où que vous soyez.'}

]



function MyCards(props) {
    return (
        <div>
        <Container>
          <Row>
        <Card className='car'>
      <Card.Img  className='my-card' variant="top" src={props.images} />
        <Card.Text>
        <h6><strong>{props.title}</strong></h6>
        <p>{props.text}</p>
        </Card.Text>
        </Card> 
        </Row>
        </Container>
    </div>
    )
}
function Cards4() {
    return(
     <div className="container mb-5">
        <h3 className="my-3">Découvrez les expériences</h3>
        <p>Des activités uniques avec des experts locaux, en personne ou en ligne.</p>
       <div className="cardy">
          {cards4.map(element =>
            <div>
               <MyCards images = {element.images} title = {element.title} text={element.text}  />     
            </div>
          )}
       </div>
     </div>
    )
 }

export default Cards4
