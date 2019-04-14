import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ImageLoader from './components/ImageLoader';
import axios from 'axios';
import { useRegistration } from './custom-hooks';
import smallImage from './media/empire-min-small.jpg';
import image from './media/empire-min.jpg';
import {
    LandingContainer,
    LandingContent,
    LandingBanner,
    LandingParagraph,
    StyledParagraph,
} from './styles/AppStyles';

function App() {
    const [count, setCount] = useState(0);
    const { isError, errorMsg, flag, doRegister } = useRegistration();

    useEffect(() => {
        const fetchCount = async () => {
            const result = await axios.get('/home');
            setCount(result.data.count);
        };
        fetchCount();
    }, []);

    return (
        <LandingContainer>
            {flag ? (
                <StyledParagraph>Welcome to the Empire</StyledParagraph>
            ) : (
                <>
                    <ImageLoader srcPreload={smallImage} srcLoaded={image} />
                    <LandingContent>
                        <LandingBanner>JOIN US</LandingBanner>
                        <LandingParagraph>
                            Enter your email to join {count} others in the fight
                            for the Empire. We are 100% a cult.
                        </LandingParagraph>
                        <Form callback={doRegister} />
                        {isError && (
                            <LandingParagraph>{errorMsg}</LandingParagraph>
                        )}
                    </LandingContent>
                </>
            )}
        </LandingContainer>
    );
}

export default App;
