import React from 'react'
import { BannerMainContainer, ContentAreaContainer} from './banner-style'
import ImgBanner from '../images/banner2.jpeg'

export default function BannerMain() {
  return (
    <BannerMainContainer backgroundImage={ImgBanner}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            O que é o projeto?
          </ContentAreaContainer.Title>
          <ContentAreaContainer.Description>
            <h2>
            Nosso objetivo é tornar o mundo digital mais acessível.<br/>
            Nós,<a href="https://www.instagram.com/jpmubrasil/" target="_blank"><strong> Jovens por um Mundo Unido</strong></a>,
            durante a pandemia descobrimos que podemos ajudar outras pessoas sem sair de casa.<br/>
            Se você precisa de ajuda para utilizar o whatsapp, zoom, skype, google meet,
            redes sociais e outros aplicativos, então acho que podemos te ajudar!<br/>

            <br/>
            <ul>
              <li>Acesse abaixo nossos tutoriais</li>
            </ul>
            </h2>
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
