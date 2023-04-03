import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Selectors from './components/selectors'

console.log('Hi There from marketing-index.js');

const mount = (el) =>{
    ReactDom.render(<App />, el);
}

const getReportsList = (el) =>{
    ReactDom.render(<Selectors />, el);
}

//Mount function to deliver content

// if isolation mode mount immeditelly
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing_dev_toot');
    if(devRoot){
        mount(devRoot);
        getReportsList(devRoot);
    }
}
export { mount, getReportsList };
// if running through container export mount