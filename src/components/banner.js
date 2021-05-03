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
            <h3>
            Nosso objetivo é tornar o mundo digital mais acessível.<br/>
            Nós,<a href="https://www.instagram.com/jpmubrasil/" target="_blank"><strong> Jovens por um Mundo Unido</strong></a>,
            durante a pandemia descobrimos que podemos ajudar outras pessoas sem sair de casa.<br/>
            Se você precisa de ajuda para utilizar o whatsapp, zoom, skype, google meet,
            redes sociais e outros aplicativos, então acho que podemos te ajudar!<br/>

            <br/>
            <ul>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScuAFRaABYlgojSyNLPP1OhlTmj1n34KdCBi8l4Felyj84bMw/viewform" target="_blank">Inscreva-se</a> para um agendamento com nossos voluntários</li>
              <li>Acesse abaixo nossos tutoriais</li>
            </ul>
            </h3>
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
