import { useState } from 'react';
import { Select, Space } from 'antd';

const { Option } = Select;

const useAntMultiSelect = (options, defaultValue) => {
    const [selectedValues, setSelectedValues] = useState(defaultValue);

    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setSelectedValues(value);
    };

    const antMultiSelect = (
        <Select
            mode="multiple"
            style={{
                width: '100%',
                border: 0
            }}
            placeholder="select one country"
            defaultValue={defaultValue}
            value={selectedValues}
            onChange={handleChange}
            optionLabelProp="label"
        >
            {options.map((option) => (
                <Option key={option.value} value={option.value} label={option.label}>
                    <Space>
                        <span role="img" aria-label={option.label}>
                            {option.flag}
                        </span>
                        {option.label}
                    </Space>
                </Option>
            ))}
        </Select>
    );

    return { antMultiSelect, selectedValues };
};

export default useAntMultiSelect;
