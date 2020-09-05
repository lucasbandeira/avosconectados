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
            Nosso objetivo é tornar o mundo digital mais acessível.<br/>
            Nós,<a href="http://www.focolares.org.br/movimento-dos-focolares/um-povo/jovens-por-um-mundo-unido/"><strong> Jovens por um Mundo Unido</strong></a>, durante a pandemia descobrimos que podemos ajudar outras pessoas sem sair de casa.
            Se você precisa de ajuda para utilizar o whatsapp, zoom, skype, google meet, redes sociais e outros aplicativos, então acho que podemos te ajudar!<br/>
            Acesse abaixo nossos tutoriais!
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
