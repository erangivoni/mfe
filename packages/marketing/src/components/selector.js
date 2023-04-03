import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
    margin-bottom: 0.4rem;
    `
const Selector = (props) => {
    console.log(props);
    return <div>
        <StyledButton>
            <button>{props.label}</button>
        </StyledButton>
    </div>
    

}

export default Selector;