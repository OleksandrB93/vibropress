import { FooterInfoContainer, LeftInfo, GoogleMap } from './FooterInfo.styled';
import Contact from 'components/Contact/Contact';
import {
  LocitionContainer,
  AddressFooter,
  ContactLocation,
} from './FooterInfo.styled';
import { ImLocation2 } from 'react-icons/im';

export default function FooterInfo() {
  return (
    <FooterInfoContainer>
      <LeftInfo>
        <div>
          <img
            src={process.env.PUBLIC_URL + '/imgs/logo.png'}
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
        <ContactLocation>
          <Contact />
          <LocitionContainer>
            <ImLocation2 size={18} color={'#dc4a3e'} />
            <AddressFooter>
              Україна, м.Миколаїв,
              <br />
              вул.Київське шосе, 1Г
            </AddressFooter>
          </LocitionContainer>
        </ContactLocation>
      </LeftInfo>
      © 2023 Motoryka-Yug
    </FooterInfoContainer>
  );
}
