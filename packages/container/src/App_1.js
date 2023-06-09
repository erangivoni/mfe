import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header'
import NavigationTabs from './components/navigationTabs';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
const generateClassName = createGenerateClassName({
    productionPrefix: "co"
});
const App = () => {
    return (
        <NavigationTabs/>
    )
}

export default App;