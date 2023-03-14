import React from 'react';
// import { GrLanguage } from 'react-icons/gr';
import { SiYoutube } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { ButtonsContainer } from './Buttons.styled';

export default function Buttons() {
  return (
    <ButtonsContainer>
      {/* <button>
        <GrLanguage size={25} />
      </button> */}
      <Link href="https://www.youtube.com/@motorika120">
        <SiYoutube size={30} color={'#ff0000'} />
      </Link>
    </ButtonsContainer>
  );
}
