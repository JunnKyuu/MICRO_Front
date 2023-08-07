import styled from 'styled-components';
import '../../App.css';

// Application
export const ApplicationContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(
    138deg,
    #effbff 0%,
    rgba(206, 200, 223, 0.37) 81.41%,
    rgba(204, 196, 220, 0.32) 89.11%,
    rgba(187, 170, 204, 0) 100%,
    rgba(223, 207, 239, 0) 100%
  );
`;

// Board
export const BoardContainer = styled.div`
  position: relative;
  width: 41.1875rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0.938rem;
  background-color: #ffffff;
  margin-bottom: 3rem;
`;

export const BoardTitle = styled.div`
  width: 38rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 1rem;
  font-weight: 500;
  color: #000000;
  opacity: 100%;
  margin-top: 2.3rem;
`;

export const BoardText = styled.div`
  width: 38rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  margin-top: 0.5rem;
`;

// BasicInfo
export const BasicInfoContainer = styled.div`
  width: 38rem;
  height: 22.5rem;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: flex-start;
  border-bottom: 0.5px solid #dddddd;
`;

export const BasicInfoForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const InputContainer = styled.div`
  width: 19rem;
  heigth: auto;
  display: flex;
  flex-direction: column;
`;

export const RightInputContainer = styled(InputContainer)`
  margin-left: 5.2rem;
`;

export const BasicInfoLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.3rem;
`;

export const BasicInfoText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 0.5rem;
`;

export const BasicInfoAsterisk = styled.span`
  color: red;
`;

export const BasicInput = styled.input`
  width: 14.5rem;
  height: 2.0625rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  background: #fff;
  padding-left: 0.6rem;

  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const BasicInfoSelect = styled.select`
  width: 15.5rem;
  height: 2.3rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  background: #fff;
  cursor: pointer;
  padding-left: 0.5rem;

  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

// Notice
export const NoticeContainer = styled.div`
  width: 41.188rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1.3rem;
`;

export const NoticeTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bolder;
  line-height: normal;
  color: #000000;
  opacity: 100%;
  padding-bottom: 1rem;
`;

export const NoticeText = styled.p`
  font-size: 0.875rem;
  font-family: 'GmarketSansLight';
  font-weight: light;
  line-height: normal;
  color: #000000;
  opacity: 100%;
  padding-bottom: 0.3rem;
`;

// Textarea
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0.3rem;
  margin-bottom: 2rem;
`;

export const StyledTextarea = styled.textarea`
  width: 32.375rem;
  height: 10rem;
  resize: none;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  background: #fafafa;

  color: #000;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.3rem;
`;

// TextareaContainer
export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.05);
`;

export const TextareaText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #000000;
  opacity: 100%;
`;

export const TextareaFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  width: 35rem;
  padding: 1.5rem;
  border: none;
`;

// Buttons
export const ButtonsContainer = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

export const StyledButton = styled.button`
  width: 6.5rem;
  height: 2.4375rem;
  flex-shrink: 0;
  border: none;
  border-radius: 0.9375rem;
  cursor: pointer;
`;

export const SaveBtn = styled(StyledButton)`
  background: rgba(0, 213, 47, 0.1);
  color: #358e48;
  font-size: 0.9375rem;
  font-style: normal;
  font-family: 'GmarketSansMedium';
  line-height: 0.9625rem;

  &:hover {
    background-color: #04b404;
    color: #ffffff;
  }

  &:active {
    background-color: rgba(0, 213, 47, 0.1);
    color: #358e48;
  }
`;

export const ApplyBtn = styled(StyledButton)`
  background: rgba(0, 143, 213, 0.1);
  color: #008fd5;
  font-family: Gmarket Sans TTF;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.9625rem;

  &:hover {
    background-color: #0080ff;
    color: #ffffff;
  }

  &:active {
    background: rgba(0, 143, 213, 0.1);
    color: #008fd5;
  }
`;
