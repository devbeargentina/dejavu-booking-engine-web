import React, { useState } from 'react';
import { AutoComplete, Input, Select, Slider, Rate, Button } from 'antd';

const { Option } = Select;

const FilterPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [ratingValue, setRatingValue] = useState(0);

  const handleSearch = (value) => {
    console.log(value);
    setSearchValue(value);
  };

  const handleCategoryChange = (value) => {
    console.log(value);
    setCategoryValue(value);
  };

  const handlePriceChange = (value) => {
    console.log(value);
    setPriceRange(value);
  };

  const handleRatingChange = (value) => {
    console.log(value);
    setRatingValue(value);
  };

  const handleReset = () => {
    setSearchValue('');
    setCategoryValue('');
    setPriceRange([0, 100]);
    setRatingValue(0);
  };

  const options = [
    { value: 'Product A' },
    { value: 'Product B' },
    { value: 'Product C' },
    { value: 'Product D' },
    { value: 'Product E' },
  ];

  return (
    <div>
      <h1>Filter Page</h1>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        onChange={handleSearch}
        placeholder="Search Products"
      />
      <Select
        defaultValue=""
        style={{ width: 120 }}
        onChange={handleCategoryChange}
      >
        <Option value="">All Categories</Option>
        <Option value="Category A">Category A</Option>
        <Option value="Category B">Category B</Option>
        <Option value="Category C">Category C</Option>
      </Select>
      <Slider
        range
        defaultValue={[0, 100]}
        max={100}
        min={0}
        step={1}
        onChange={handlePriceChange}
      />
      <Rate defaultValue={0} onChange={handleRatingChange} />
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
};

export default FilterPage;
