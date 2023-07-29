import React from 'react';
import styled from 'styled-components';

interface TextareaProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0.3rem;
  margin-bottom: 2rem;
`;

const StyledTextarea = styled.textarea`
  width: 32.375rem;
  height: 10rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  background: #fafafa;

  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Textarea: React.FC<TextareaProps> = ({ name, value, onChange }) => {
  return (
    <Wrapper>
      <StyledTextarea name={name} value={value} onChange={onChange} wrap='on' />
    </Wrapper>
  );
};

export default Textarea;
