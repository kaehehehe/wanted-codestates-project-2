import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
`;

export const SoloBtn = styled.button`
  width: 100px;
  padding: 5px 0;
  border: 1px solid #015ecc;
  border-radius: 5px 0 0 5px;
  background-color: ${({ matchType }) =>
    matchType === 'solo' ? '#015ecc' : '#FFFFFF'};
  color: ${({ matchType }) => (matchType === 'solo' ? '#FFFFFF' : '#015ecc')};
  cursor: pointer;
`;

export const TeamBtn = styled(SoloBtn)`
  border-radius: 0 5px 5px 0;
  background-color: ${({ matchType }) =>
    matchType === 'team' ? '#015ecc' : '#FFFFFF'};
  color: ${({ matchType }) => (matchType === 'team' ? '#FFFFFF' : '#015ecc')};
`;