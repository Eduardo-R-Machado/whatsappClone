import React from 'react';
import './ChatIntro.css';
import introImg from './intro-wpp.jpg';

export default () => {
  return(
    <div className="chatIntro">
      <img src={introImg} alt=""></img>
      <h1>Mantenha seu celular conectado</h1>
      <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-fi.</h2>
    </div>
  );
}