import React from 'react'
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './banner-style'
import ImgBanner from '../images/banner.jpg'

export default function BannerMain({
  videoTitle,
  videoDescription
}) {
  return (
    <BannerMainContainer backgroundImage={ImgBanner}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {videoTitle}
          </ContentAreaContainer.Title>
          <ContentAreaContainer.Description>
            {videoDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
