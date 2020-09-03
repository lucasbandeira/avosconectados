import React from 'react'
import LogoZap from '../images/whatsapp.jpg'
import LogoZoom from '../images/zoom-icon.png'
import Tutorial from '../images/tutorialWhatsappWeb.jpg'
import TutorialZoom from '../images/tutorialZoom01.jpg'

import { Card, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

 const CardWhatsapp = _ => (
  <Card.Group itemsPerRow={3}>
    <Card>
      <a href = {Tutorial} alt="tutorial para whatsapp web"><Image src={LogoZap} wrapped ui={false}/></a>
      <Card.Content>
        <Card.Header>Whatsapp Web</Card.Header>
        <Card.Meta>
          <span className='date'>21/07/2020</span>
        </Card.Meta>
        <Card.Description>
          <a href = {Tutorial} alt="tutorial para whatsapp web">Tutorial para acessar o whatsapp web</a>
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <a href = {TutorialZoom} alt="tutorial para instalar o Zoom"><Image src={LogoZoom} wrapped ui={false}/></a>
      <Card.Content>
        <Card.Header>Intalação do Zoom</Card.Header>
        <Card.Meta>
          <span className='date'>30/08/2020</span>
        </Card.Meta>
        <Card.Description>
        <a href = {TutorialZoom} alt="tutorial para instalar o Zoom">Tutorial para instalar o Zoom</a>
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default CardWhatsapp
