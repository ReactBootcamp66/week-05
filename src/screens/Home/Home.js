import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import Products from '../../components/Products/Products';
import Tabs from '../../components/Tabs/Tabs';
import TabsPropTypes from '../../components/Tabs/TabsPropTypes';
import { products } from '../../products';
import ProductsScreen from '../ProductsScreen/ProductsScreen';

const initialTabs = [
  {
    header: () => 'Products',
    content: () => <Products products={products} />,
  },
  {
    header: () => 'Baslik 2',
    content: () => 'Content 2',
  },
  {
    header: () => 'Baslik 3',
    content: () => 'Content 3',
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [tabs, setTabs] = useState(initialTabs);

  const generateNewArray = (prevTabs, index) => {
    const tempTabs = [...prevTabs];
    tempTabs[index] = {
      header: () => `${prevTabs[index].header()} - Removed`,
      content: () => `Removed`,
    };

    return tempTabs;
  };

  const handleNewTabClick = () => {
    setTabs((prevTabs) => [
      ...prevTabs,
      {
        header: () => `Tab ${prevTabs.length}`,
        content: () => `Content  ${prevTabs.length}`,
      },
    ]);
  };

  const handleIndexDelete = (index) => {
    /*setTabs((prevTabs) =>
      prevTabs
        .map((item, index) => ({
          value: { ...item },
          index,
        }))
        .filter((item) => item.index !== index)
        .map((item) => item.value)
    );*/

    setTabs((prevTabs) => [
      ...prevTabs.slice(0, index), // left part
      // {
      //   header: () => `${prevTabs[index].header()} - Removed`,
      //   content: () => `Removed`,
      //},
      ...prevTabs.slice(index + 1), // right part
    ]);

    // setTabs((prevTabs) =>  generateNewArray(prevTabs, index));
  };

  return (
    <div>
      <Button text="Add new tab" onClick={handleNewTabClick} />
      <Tabs
        tabs={tabs}
        activeIndex={activeIndex}
        onIndexChange={(index) => setActiveIndex(index)}
        onIndexDelete={handleIndexDelete}
      />
      {/* <Tabs tabs={tabs} initialIndex={activeIndex} /> */}

      <TabsPropTypes title="A" index="1" />
    </div>
  );
};

export default Home;
