import React from 'react';
import { TabButton, TabButtons, TabContent } from './Tabs.styles';

const Tabs = ({ tabs, activeIndex = 0, onIndexChange, onIndexDelete }) => {
  return (
    <div>
      <p>Tabs Component</p>
      <TabButtons>
        {tabs.map((item, index) => (
          <>
            <TabButton
              isActive={activeIndex === index}
              onClick={() => onIndexChange(index)}
            >
              {item.header()}
            </TabButton>

            <span
              style={{ marginLeft: `5px` }}
              onClick={() => onIndexDelete(index)}
            >
              X
            </span>
          </>
        ))}
      </TabButtons>
      <TabContent>{tabs[activeIndex].content()}</TabContent>
    </div>
  );
};

export default Tabs;
