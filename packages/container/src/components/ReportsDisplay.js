import React, { useState } from "react";
import styled from 'styled-components';
import StyledTile from './StyledTile';
import { StyledResize } from './styled/StyledResize';
import StyledDivContent from "./styled/StyledDivContent";

const ReportsDisplay = () => {
    const [isXollapsed, setIsXollapsed] = useState(false);
    const resizePool = (e) => {
        setIsXollapsed(prev => !prev);
    };
    return <StyledDivContent>
        <StyledResize onClick={resizePool}>{isXollapsed ? '>' : '<'}</StyledResize>
        {!isXollapsed && <StyledTile> Selected Reports</StyledTile>} 
        
    </StyledDivContent>

}

export default ReportsDisplay;