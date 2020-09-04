import React from 'react'
import { BannerMainContainer, ContentAreaContainer} from './banner-style'
import ImgBanner from '../images/banner2.jpeg'

export default function BannerMain() {
  return (
    <BannerMainContainer backgroundImage={ImgBanner}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Description>
            <h3><strong>Somos os Jovens por um Mundo Unido</strong><br/></h3>
            <h4>Durante a pandemia descobrimos que podemos ajudar outras pessoas sem sair de casa.
            Se você precisa de ajuda para utilizar o whatsapp, zoom, skype, google meet, redes sociais..
            Então acho que podemos te ajudar! Acesse abaixo nossos tutoriais!</h4>
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
