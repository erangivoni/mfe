import React from "react";
import styled from 'styled-components';
const NavigationTabs = (props) => {
    const StyledDiv = styled.div`
    float: bottom;
    background-color: AliceBlue;
    border: 1px solid lightGray;
    `;
    const StyledTab = styled.span`
    font-size: 1.5em;
    text-align: center;
    color: CadetBlue;
    margin-right: 0.5rem;
    `;
    const StyledBorder = styled.span`
    font-size: 1.5em;
    float: bottom;
    background-color: AliceBlue;
    color: CadetBlue; 
    margin-right: 0.5rem;
    `;

    const nav = (e)=>{
        console.log('nav!');        
        const text = e.nativeEvent.target.innerText;
        switch (text){
            case 'Navigation Tabs':
                break;
            case 'Navigation Tabs':
                break;
            case 'Navigation Tabs':
                break;
        } 
    }
    return <>
        <StyledDiv onClick={nav}>
            <StyledTab>Navigation Tabs</StyledTab>
            <StyledBorder>|</StyledBorder>
            <StyledTab>Reports List</StyledTab>
            <StyledBorder>|</StyledBorder>
            <StyledTab>Data Tables</StyledTab>
            <StyledBorder>|</StyledBorder>
            <StyledTab>Configuration</StyledTab>
            <StyledBorder>|</StyledBorder>
        </StyledDiv>
    </>
};
export default NavigationTabs;