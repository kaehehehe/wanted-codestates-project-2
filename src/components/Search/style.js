import styled from 'styled-components';

export const Search = styled.div`
  border-bottom: ${({ isFocus }) =>
    isFocus ? '1px solid white' : '1px solid #8cafe6'};
  height: 100%;
`;

export const Input = styled.input`
  width: 200px;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 8px;
  color: white;
  background-color: transparent;

  ::placeholder {
    color: #8cafe6;
  }
`;

export const SearchBtn = styled.button`
  width: 15px;
  height: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    .icon {
      fill: white;
    }
  }
`;
