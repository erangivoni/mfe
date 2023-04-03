import React from 'react'
import styled from 'styled-components';
import Selector from './selector';
const StyledList = styled.ul`
    background-color: AliceBlue;
    border: 1px solid lightGray;
    min-height: 40em;   
    & .reportsList {
        margin-top: 1rem;
    }
    `;
const items = [{ label: 'report 1' }, { label: 'report 2' }, { label: 'report 3' }, { label: 'report 4' }];
const itemsSelector = [];
const Selectors = (props) => {
  const list = (
    items.map((item, i) => (
        <Selector key={i} label={item.label} />
      ))
  );
return <StyledList>
  {list}
</StyledList>;
}
export default Selectors;
