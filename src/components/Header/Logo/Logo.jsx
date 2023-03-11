import React from 'react';

export default function Logo() {
  return (
    <div>
     <img src={process.env.PUBLIC_URL + '/imgs/logo.jpg'} alt="logo" width={250}/>
    </div>
  );
}
