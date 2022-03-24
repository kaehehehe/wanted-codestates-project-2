import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
`;

export const LeftBtn = styled.button`
  width: 100px;
  padding: 5px 0;
  border: 1px solid #015ecc;
  border-radius: 5px 0 0 5px;
  background-color: ${({ active }) => (active ? '#015ecc' : '#FFFFFF')};
  color: ${({ active }) => (active ? '#FFFFFF' : '#015ecc')};
  cursor: pointer;
`;

export const RightBtn = styled(LeftBtn)`
  border-radius: 0 5px 5px 0;
  background-color: ${({ active }) => (active ? '#015ecc' : '#FFFFFF')};
  color: ${({ active }) => (active ? '#FFFFFF' : '#015ecc')};
`;
