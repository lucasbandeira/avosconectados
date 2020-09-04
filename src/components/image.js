import React from 'react'
import LogoZap from '../images/whatsapp.jpg'
import LogoZoom from '../images/zoom-icon.png'
import Tutorial from '../images/tutorialWhatsappWeb.jpg'
import TutorialZoom from '../images/tutorialZoom.pdf'

import { Card, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

 const CardWhatsapp = _ => (
  <Card.Group itemsPerRow={3}>
    <Card>
      <a href = {Tutorial} alt="tutorial para whatsapp web"><Image src={LogoZap} wrapped ui={false}/></a>
      <Card.Content>
        <Card.Header>
        <a href = {Tutorial} alt="tutorial para whatsapp web">Acessar Whatsapp Web</a>
        </Card.Header>
      </Card.Content>
    </Card>
    <Card>
      <a href = {TutorialZoom} alt="tutorial para instalar o Zoom"><Image src={LogoZoom} wrapped ui={false}/></a>
      <Card.Content>
        <Card.Header>
          <a href = {TutorialZoom} alt="tutorial para instalar o Zoom">Intalação do Zoom</a>
        </Card.Header>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default CardWhatsapp
