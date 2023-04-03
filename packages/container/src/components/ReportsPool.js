import React, { useState } from "react";
import styled from 'styled-components';
import StyledTile from './StyledTile'
import { StyledResize } from './styled/StyledResize';
import ReportsList from './MarketingReportsList';
import StyledDivContent from './styled/StyledDivContent'
const ReportsPool = (props) => {
    const [isXollapsed, setIsXollapsed] = useState(false);

    const resizePool = (e) => {
        setIsXollapsed(prev => !prev);
    };

    const StyledDiv = styled.div`
    background-color: AliceBlue;
    border: 1px solid lightGray;
    min-height: 30em;   
    & ul{
        margin-top: 1rem;
        border: 0;
    }
    `;

    return <>
        <StyledDivContent>
            <StyledResize onClick={resizePool}>{isXollapsed ? '>' : '<'}</StyledResize>
            {!isXollapsed && <StyledTile className='poollTitle'>Reports Pool</StyledTile>}
            {!isXollapsed && <ReportsList></ReportsList>}

            {/* <div><StyledButton>button 1</StyledButton></div>
        <div><StyledButton>button 2</StyledButton></div>
        <div><StyledButton>button 3</StyledButton></div>
        <div><StyledButton>button 4</StyledButton></div> */}
        </StyledDivContent>
    </>
}
export default ReportsPool;