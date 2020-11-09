import React from 'react';
import padlock from '../img/padlock.svg';
import styled from 'styled-components';

const ImageContainer = styled.div `
    margin: 20px auto 10px;
    background: pink;
    border-radius: 50%;
    width: 40px;
    padding: 8px;
    text-align: center;
    `

const Title = styled.h2 `
text-align: center;
    color: white;
    font-family: 'Roboto', sans-serif;
    `

function Header({title}) {
    return (
      <div>
        <ImageContainer>
            <img src={padlock} alt='padlock' style={{width: 30 + 'px'}}/>
        </ImageContainer>
        <Title>{title}</Title>
      </div>
    );
  }

export default Header;