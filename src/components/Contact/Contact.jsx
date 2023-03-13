import { SiTelegram } from 'react-icons/si';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdMarkEmailUnread } from 'react-icons/md';

import {
  ContactContainer,
} from '../Footer/FooterInfo/FooterInfo.styled'

export default function Contact() {
  return (
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
    </ContactContainer>
  );
}
