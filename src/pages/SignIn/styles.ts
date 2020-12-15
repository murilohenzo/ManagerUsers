import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  text-align: center;
  margin: auto;
  height: 100vh;
  width: 100%;

  background: -webkit-linear-gradient(45deg, black 50%, white 50%);

  @media(max-width: 1070px) {
    background: none;
    }
`;

const appearTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${appearTop} 3s;
`

export const Content = styled.div`

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Box1 = styled.div`
  height: 100%;
  width: 100%;
  max-width: 535px;
  max-height: 600px;
  background-color: #ffffff;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;


    h1 {
    margin-bottom: 25px;
    transition: margin-right 0.1s ease-in;

    &:hover {
      margin-right: 10px;
    }
    &::first-letter {
      font-size: 46px;
      color: #00adb5;
    }
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 20px;
    text-decoration: none;
    color: #00adb5;
    font-weight: bold;
    transition: margin-right color 0.3s ease-in;

    &:hover {
      color: ${shade(0.2, '#00adb5')};
      margin-right: 10px;
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Box2 = styled.div`
  width: 535px;
  max-width: 100%;
  height: 100%;
  max-height: 600px;
  background-color: #000000;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  h1 {
    color: #eeeeee;
    margin-bottom: 25px;
    transition: margin-right 0.1s ease-in;

    &:hover {
      margin-right: 10px;
    }
    &::first-letter {
      font-size: 46px;
      color: #00adb5;
    }
  }
  p {
    color: #eeeeee;
    word-wrap: break-word;
    padding: 10px;
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 20px;
    text-decoration: none;
    color: #00adb5;
    font-weight: bold;
    transition: margin-right color 0.3s ease-in;

    &:hover {
      color: ${shade(0.2, '#00adb5')};
      margin-right: 10px;
    }

  }
`;
