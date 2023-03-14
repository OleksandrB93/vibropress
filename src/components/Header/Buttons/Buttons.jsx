import React from 'react';
// import { GrLanguage } from 'react-icons/gr';
import { SiYoutube } from 'react-icons/si';
import { ButtonsContainer } from './Buttons.styled';

export default function Buttons() {
  return (
    <ButtonsContainer>
      {/* <button>
        <GrLanguage size={25} />
      </button> */}
      <a href="https://www.youtube.com/@motorika120">
        <SiYoutube size={30} color={'#ff0000'} />
      </a>
    </ButtonsContainer>
  );
}
