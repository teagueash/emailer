import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const LandingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    text-align: center;
`;

export const LandingContent = styled.div`
    position: absolute;
    z-index: 3;
    width: 100vw;
    height: 100vh;
    top: 0;
    animation: ${fadein} 1s ease;
`;

export const LandingBanner = styled.div`
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 64px;
        padding: 1em 0;
    }
    font-size: 128px;
    padding: 1em 0 0.5em 0;
    color: #fff;
    letter-spacing: 5px;
    margin: 0 auto;
    font-weight: lighter;
`;

export const LandingParagraph = styled.p`
    @media (min-width: 320px) and (max-width: 480px) {
        padding: 2em 1em;
    }
    padding: 1em;
    color: #fff;
`;

export const StyledParagraph = styled.p`
    font-size: 2em;
    color: #fff;
    padding: 2em 1em 1em 1em;
    font-weight: lighter;
`;
