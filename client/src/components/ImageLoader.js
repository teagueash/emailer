import React, { useState, useEffect, useRef } from 'react';
import {
    StyledContainer,
    StyledPreload,
    StyledLoaded,
} from '../styles/ImageLoaderStyles';

function ImageLoader({ srcPreload, srcLoaded }) {
    const [fadein, setFadein] = useState(false);
    const imageLoaderRef = useRef(null);

    const image = new Image();
    useEffect(() => {
        image.src = srcLoaded;
        image.addEventListener('load', function() {
            imageLoaderRef.current.setAttribute(
                'style',
                `background-image: url('${srcLoaded}')`
            );
            setFadein(true);
        });
    }, []);

    return (
        <StyledContainer>
            <StyledLoaded fadein={fadein} ref={imageLoaderRef} />
            <StyledPreload background={srcPreload} />
        </StyledContainer>
    );
}

export default ImageLoader;
