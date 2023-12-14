import React, { useState } from 'react';
import { AutoComplete, Select, Input, Slider, Rate, Button } from 'antd';

const { Option } = Select;

const defaultFilters = {
    search: '',
    category: 'All',
    price: [0, 1000],
    rating: 3,
};

function FilterPage() {
    const [filters, setFilters] = useState(defaultFilters);

    const handleSearchChange = (value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            search: value,
        }));
    };

    const handleCategoryChange = (value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            category: value,
        }));
    };

    const handlePriceChange = (value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            price: value,
        }));
    };

    const handleRatingChange = (value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            rating: value,
        }));
    };

    const handleReset = () => {
        setFilters(defaultFilters);
    };

    return (
        <div>
            <h1>Filter Page</h1>

            <AutoComplete
                style={{ width: 200 }}
                placeholder="Search"
                onChange={handleSearchChange}
                defaultValue={defaultFilters.search}
            />

            <Select
                style={{ width: 200, marginLeft: 16 }}
                placeholder="Category"
                onChange={handleCategoryChange}
                defaultValue={defaultFilters.category}
            >
                <Option value="All">All</Option>
                <Option value="Electronics">Electronics</Option>
                <Option value="Clothing">Clothing</Option>
                <Option value="Books">Books</Option>
            </Select>

            <Input.Group style={{ width: 400, marginTop: 16 }}>
                <Input
                    style={{ width: 100 }}
                    placeholder="Min Price"
                    onChange={(e) =>
                        handlePriceChange([+e.target.value, filters.price[1]])
                    }
                    defaultValue={defaultFilters.price[0]}
                />
                <Input
                    style={{ width: 100 }}
                    placeholder="Max Price"
                    onChange={(e) =>
                        handlePriceChange([filters.price[0], +e.target.value])
                    }
                    defaultValue={defaultFilters.price[1]}
                />
            </Input.Group>

            <Slider
                style={{ width: 400, marginTop: 16 }}
                range
                min={0}
                max={1000}
                step={10}
                defaultValue={defaultFilters.price}
                onChange={handlePriceChange}
            />

            <Rate
                style={{ marginTop: 16 }}
                allowClear
                allowHalf
                defaultValue={defaultFilters.rating}
                onChange={handleRatingChange}
            />

            <Button style={{ marginTop: 16 }} onClick={handleReset}>
                Reset Filters
            </Button>

            <div style={{ marginTop: 32 }}>
                <p>Search: {filters.search}</p>
                <p>Category: {filters.category}</p>
                <p>Price: {filters.price[0]} - {filters.price[1]}</p>
                <p>Rating: {filters.rating}</p>
            </div>
        </div>
    );
}

export default FilterPage;
