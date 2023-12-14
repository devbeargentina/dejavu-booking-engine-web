import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';

const { Search } = Input;

const useAntSearchTextbox = ({
    addonAfter,
    addonBefore,
    allowClear,
    bordered,
    defaultValue,
    disabled,
    id,
    maxLength,
    showCount,
    status,
    prefix,
    size,
    suffix,
    type,
    value,
    onChange,
    onPressEnter,
}) => {
    const onSearch = (value) => console.log(value);

    const searchProps = {
        addonAfter,
        addonBefore,
        allowClear,
        bordered,
        defaultValue,
        disabled,
        id,
        maxLength,
        showCount,
        status,
        prefix,
        size,
        // suffix: suffix || (
        //     <AudioOutlined
        //         style={{
        //             fontSize: 16,
        //             color: '#1890ff',
        //         }}
        //     />
        // ),
        type,
        value,
        onChange,
        onPressEnter,
        onSearch,
    };

    return () => (
        <Space direction="vertical">
            <Search placeholder="input search text" {...searchProps} enterButton />
        </Space>
    );
};

export default useAntSearchTextbox;
