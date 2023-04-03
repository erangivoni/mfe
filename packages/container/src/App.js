import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import ReportsList from './components/MarketingReportsList';
import Header from './components/Header'
import NavigationTabs from './components/navigationTabs';
import ReportsPool from './components/ReportsPool'
import ReportsDisplay from './components/ReportsDisplay'
import Content from './components/Content'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import styled from 'styled-components';
const generateClassName = createGenerateClassName({
    productionPrefix: "co"
});
const Under = () => {
    const StyledDiv = styled.div`
    float: bottom;
    `;
    return <StyledDiv></StyledDiv>
}

const App = () => {
    return (

        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <NavigationTabs />
                    <Content>
                    </Content>
                    {/* <MarketingApp /> */}
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}

export default App;