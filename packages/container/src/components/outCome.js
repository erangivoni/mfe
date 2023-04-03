import React from "react";
import styled from "styled-components";
import StyledTile from './StyledTile';
import StyledDivContent from './styled/StyledDivContent';


const StyledOutput = styled.div`
flex-grow: 1;
`;

const OutCome = (props) => {
    return <StyledOutput>
        <StyledDivContent>
            <StyledTile>OutPut</StyledTile>
        </StyledDivContent>
    </StyledOutput>

}
export default OutCome;