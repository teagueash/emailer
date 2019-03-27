import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import axios from 'axios';
import styled from 'styled-components';
import { useRegistration } from './custom-hooks';
import empireBackground from './media/empire-min.jpg';

const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${empireBackground});
    text-align: center;
    .banner-text {
        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 64px;
        }
        font-size: 128px;
        padding: 1em 0 0.5em 0;
        color: #fff;
        letter-spacing: 5px;
        margin: 0 auto;
        font-weight: lighter;
    }
    .span-text {
        padding: 1em;
        color: #fff;
    }
    .welcome-text {
        font-size: 2em;
        color: #fff;
        padding: 2em 1em 1em 1em;
        font-weight: lighter;
    }
`;

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
        <StyledContainer>
            {flag ? (
                <p className="welcome-text">Welcome to the Empire</p>
            ) : (
                <>
                    <div className="banner-text">JOIN US</div>
                    <span className="span-text">
                        Enter your email to join {count} others in the fight for
                        the Empire. We are 100% a cult.
                    </span>

                    <Form callback={doRegister} />

                    {isError && <span className="span-text">{errorMsg}</span>}
                </>
            )}
        </StyledContainer>
    );
}

export default App;
