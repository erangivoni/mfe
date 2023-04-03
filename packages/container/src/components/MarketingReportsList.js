import { mount, getReportsList } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
console.log(mount);
export default () => {
    const ref = useRef(null);
    useEffect(() => {
        getReportsList(ref.current);
    });
    return <div ref={ref} />
}