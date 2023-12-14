import { AutoComplete } from "antd";
import { useState } from "react";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const useAntAutoComplete = ({
  allowClear = false,
  autoFocus = false,
  backfill = false,
  children,
  dataSource,
  defaultActiveFirstOption = true,
  defaultOpen = false,
  defaultValue,
  disabled = false,
  dropdownMatchSelectWidth = true,
  filterOption = true,
  notFoundContent,
  open,
  options,
  placeholder,
  status,
  value,
  onBlur,
  onChange,
  onDropdownVisibleChange,
  onFocus,
  onSearch,
  onSelect,
  onClear,
  classname,
}) => {
  console.log(options);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const [optionsList, setOptionsList] = useState(options || []);
  const [inputValue, setInputValue] = useState("");

  const getPanelValue = (searchText) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const handleSelect = (value, option) => {
    setSelectedValue(value);
    if (onSelect) {
      onSelect(value, option);
    }
  };

  const handleClear = () => {
    setSelectedValue("");
    setInputValue("");
    if (onClear) {
      onClear();
    }
  };

  const handleChange = (value) => {
    setSelectedValue(value);
    setInputValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  const handleSearch = (value) => {
    setInputValue(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleFocus = (event) => {
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
  };

  const handleDropdownVisibleChange = (open) => {
    if (onDropdownVisibleChange) {
      onDropdownVisibleChange(open);
    }
  };

  const antAutoComplete = (
    <AutoComplete
      allowClear={allowClear}
      autoFocus={autoFocus}
      backfill={backfill}
      children={children}
      //dataSource={dataSource}
      defaultActiveFirstOption={defaultActiveFirstOption}
      defaultOpen={defaultOpen}
      defaultValue={defaultValue}
      disabled={disabled}
      dropdownMatchSelectWidth={dropdownMatchSelectWidth}
      filterOption={filterOption}
      notFoundContent={notFoundContent}
      open={open}
      // options={optionsList}
      options={options.map((option) => ({ value: option.value || option }))}
      placeholder={placeholder}
      status={status}
      value={selectedValue}
      onBlur={handleBlur}
      onChange={handleChange}
      onDropdownVisibleChange={handleDropdownVisibleChange}
      onFocus={handleFocus}
      onSearch={handleSearch}
      onSelect={handleSelect}
      onClear={handleClear}
      className={classname}
      style={{
        width: 250,
        zIndex: 1,
        marginLeft: "3px",
        border: "0px",
      }}
    />
  );

  return [antAutoComplete, inputValue, setInputValue];
};

export default useAntAutoComplete;
