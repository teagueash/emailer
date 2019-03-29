import React, { memo } from 'react';
import { useInputValue } from '../custom-hooks';
import {
    SearchInputWrapper,
    StyledForm,
    StyledInput,
    StyledButton,
} from '../styles/FormStyles';

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
