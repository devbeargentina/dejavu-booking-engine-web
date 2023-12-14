import React, { useState } from "react";
import {
  Drawer,
  Button,
  Form,
  Input,
  Select,
  Slider,
  Rate,
  AutoComplete,
  Divider,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

const Filter = ({ onClose, onApplyFilter }) => {
  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
  };

  const handleApplyFilter = () => {
    const filterValues = form.getFieldsValue();
    onApplyFilter(filterValues);
    onClose();
  };

  const handleSearch = (value) => {
    // Perform search API call and set options state
    const options = ["Option 1", "Option 2", "Option 3"];
    setOptions(options);
  };

  const [options, setOptions] = useState([]);

  return (
    <Form
      form={form}
      layout={"vertical"}
      initialValues={{ rating: 3, price: [20, 80], duration: [3, 7] }}
    >
      <Form.Item label="Package Title" name="title">
        <AutoComplete
          // placeholder="Enter package title"
          onSearch={handleSearch}
          onSelect={onApplyFilter}
          options={options.map((option) => ({ value: option }))}
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        >
          <Input.Search
            size="middle"
            placeholder="input here"
            allowClear
            enterButton
          />
        </AutoComplete>
      </Form.Item>
      <Form.Item label="Package Category" name="category">
        <Select placeholder="Select package category">
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Package Type" name="type">
        <Select placeholder="Select package type">
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Package Star Rating" name="rating">
        <Rate />
      </Form.Item>
      <Form.Item label="Package Price" name="price">
        <Slider range min={0} max={100} marks={{ 0: "$0", 100: "$100" }} />
      </Form.Item>
      <Form.Item label="Package Duration (days)" name="duration">
        <Slider range min={1} max={10} marks={{ 1: 1, 10: 10 }} />
      </Form.Item>
      <Divider />
      <Form.Item>
        <Button type="primary" onClick={handleApplyFilter}>
          Apply Filter
        </Button>
        <Button className="ml-3" onClick={handleReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

const FilterScreen = (props) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleApplyFilter = (filterValues) => {
    console.log(filterValues);
    // Call filter API with filterValues
  };

  return (
    <>
      <Filter onClose={props.onClose} onApplyFilter={props.onApplyFilter} />
    </>
  );
};

export default FilterScreen;
