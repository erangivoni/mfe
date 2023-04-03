import React from "react";
import styled from "styled-components";
import ReportsPool from './ReportsPool';
import ReportsDisplay from './ReportsDisplay';
import OutCome from "./outCome";
const StyledContent = styled.div`
display: flex;
margin-top: 0.2em;
`;

const Content = () =>{
    return <StyledContent>
        <ReportsPool />
        <ReportsDisplay />
        <OutCome />
    </StyledContent>
}
export default Content;