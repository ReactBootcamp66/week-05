import React, { useEffect, useState } from 'react';
import { TabButton, TabButtons, TabContent } from './Tabs.styles';

const Tabs = ({ tabs, initialIndex }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  useEffect(() => {
    setActiveIndex(initialIndex);
  }, [initialIndex]);
  return (
    <div>
      <p>Tabs Component</p>
      <TabButtons>
        {tabs.map((item, index) => (
          <TabButton
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          >
            {item.header()}
          </TabButton>
        ))}
      </TabButtons>
      <TabContent>{tabs[activeIndex].content()}</TabContent>
    </div>
  );
};

export default Tabs;
