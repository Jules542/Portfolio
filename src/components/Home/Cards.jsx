// src/components/Card.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ image, text, delay, redirect }) => {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate("/" + redirect);
  }

  return (
    <div className='card' style={{ animationDelay: `${delay}s` }} onClick={handleRedirect}>
      <img className='card-image' src={image}/>
      <p className='text-image'>{text}</p>
    </div>
  );
};

export default Card;