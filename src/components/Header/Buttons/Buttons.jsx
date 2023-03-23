import React from 'react';
// import { GrLanguage } from 'react-icons/gr';
import { SiYoutube } from 'react-icons/si';
import { ButtonsContainer } from './Buttons.styled';

export default function Buttons() {
  return (
    <ButtonsContainer>
      <button
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <img
          src={process.env.PUBLIC_URL + '/imgs/uk.webp'}
          width={33}
          alt="name"
        />
      </button>
      <a href="https://www.youtube.com/@motorika120">
        <SiYoutube size={30} color={'#ff0000'} />
      </a>
    </ButtonsContainer>
  );
}
