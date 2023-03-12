import React from 'react';
import { SiTelegram } from 'react-icons/si';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdMarkEmailUnread } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';

import {
  FooterInfoContainer,
  AddressFooter,
  ContactContainer,
  LeftInfo,
  LocitionContainer,GoogleMap
} from './FooterInfo.styled';

export default function FooterInfo() {
  return (
    <FooterInfoContainer>
      <LeftInfo>
        <div>
          <img
            src={process.env.PUBLIC_URL + '/imgs/logo.jpg'}
            alt="logo"
            width={250}
          />
        </div>
        <div>
          <GoogleMap
            title="location"
            width="500"
            height="200"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-ZM9-7jJxUARpvkH2ZysTns&key=AIzaSyAIsotPdZGaoeUTRGKqZWxVcUNSQbZKCPQ"
          ></GoogleMap>
        </div>
        <ContactContainer>
          <div>
            <a href="tel:+380678987832">
              <BsTelephoneFill />
              <SiTelegram color={'#1ea7f7'} />
              +38 (067) 89-87-832
            </a>
          </div>
          <div>
            <a href="telefram">
              <BsTelephoneFill />
              <SiTelegram color={'#1ea7f7'} />
              +38 (067) 51-01-895
            </a>
          </div>
          <div>
            <a href="mailto:motorika.ug@gmail.com">
              <MdMarkEmailUnread />
              motorika.ug@gmail.com
            </a>
          </div>
          <LocitionContainer>
            <ImLocation2 size={18} color={'#dc4a3e'} />
            <AddressFooter>
              Україна, м.Миколаїв,
              <br />
              вул.Київське шосе, 1Б
            </AddressFooter>
          </LocitionContainer>
        </ContactContainer>
      </LeftInfo>
      © 2023 Motoryka-Yug
    </FooterInfoContainer>
  );
}
