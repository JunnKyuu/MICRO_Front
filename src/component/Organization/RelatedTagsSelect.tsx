// RelatedTagsSelect.tsx
import React from 'react';
import Select, { ActionMeta, components } from 'react-select';
import styled from 'styled-components';
import { customStyles } from './createCommonStyle';
interface RelatedTagsSelectProps {
  selectedTags: string[];
  onChange: (tags: string[]) => void;
}

const CustomSelect = styled(Select)`
  width: 575px;
  height: 36px;
  margin-right: 10px;
  margin-left: 36px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: none;
  font-size: 12.6px;
  .react-select__multi-value {
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 2px 6px;
    margin: 2px;
  }

  .react-select__multi-value__label {
    color: rgba(0, 0, 0, 0.95);
  }
`;
const RelatedTagsSelect: React.FC<RelatedTagsSelectProps> = ({
  selectedTags,
  onChange
}) => {
  const options = [
    { value: '언론/미디어', label: '언론/미디어' },
    { value: '문화/역사', label: '문화/역사' },
    { value: '교육', label: '교육' },
    { value: '경제/금융', label: '경제/금융' },
    { value: '디자인/사진', label: '디자인/사진' },
    { value: '경영/컨설팅/마케팅', label: '경영/컨설팅/마케팅' },
    { value: '정치/사회/법률', label: '정치/사회/법률' },
    { value: '체육/헬스', label: '체육/헬스' },
    { value: 'IT/공학', label: 'IT/공학' }
  ];

  const handleSelectChange = (
    selectedOptions: any,
    actionMeta: ActionMeta<any>
  ) => {
    const selectedValues = selectedOptions.map((option: any) => option.value);
    onChange(selectedValues);
  };

  return (
    <CustomSelect
      isMulti
      value={options.filter((option) => selectedTags.includes(option.value))}
      onChange={handleSelectChange}
      options={options}
      placeholder='관련 태그를 선택해주세요'
      styles={customStyles}
    />
  );
};

export default RelatedTagsSelect;
