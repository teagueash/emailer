import styled from 'styled-components';

export const StyledContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    min-height: 800px;
    & div {
        width: inherit;
        height: inherit;
    }
`;

export const StyledPreload = styled.div`
    z-index: 1;
    position: absolute;
    background-image: url(${props => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const StyledLoaded = styled.div`
    z-index: 2;
    opacity: ${props => (props.fadein ? 1 : 0)}
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: opacity 1s ease;
`;
