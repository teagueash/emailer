import React, { memo } from 'react';
import styled from 'styled-components';
import { useInputValue } from '../custom-hooks';

const SearchInputWrapper = styled.div`
    padding: 1em 0 1em 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    height: 2em;
    width: 50%;
    @media (max-width: 767px) {
        width: 300px;
    }
`;

const StyledInput = styled.input`
  color: #fff;
  flex-grow: 2;
  padding: 0 1em 0 1em;
  margin: 0 2px 0 2px;
  border: none;
  border-bottom: 1px solid #dfe1e5 !important;
  font-size: 0.75em;
  background: none;
  transition: all 0.25s ease-out;
  &:hover {
    border-width: 2px !important;
  }
  &:focus {
    outline: none;
    border-width: 2px !important;
  }
  ::placeholder {
    color: #fff
    opacity: 1;
  }
`;

const StyledButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 3px;
    background-color: #fff;
    color: #444;
    &:focus {
        outline: inherit;
    }
`;

function Form({ callback }) {
    const { inputValue, changeInput } = useInputValue();

    const handleSubmit = evt => {
        evt.preventDefault();
        callback(inputValue);
    };

    return (
        <SearchInputWrapper>
            <StyledForm onSubmit={handleSubmit}>
                <StyledInput
                    type="text"
                    placeholder="Enter your email"
                    value={inputValue}
                    onChange={changeInput}
                    required
                />
                <StyledButton>JOIN NOW</StyledButton>
            </StyledForm>
        </SearchInputWrapper>
    );
}

export default memo(Form);
