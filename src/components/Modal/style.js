import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Modal = styled.div`
  padding: 25px;
  background-color: whitesmoke;

  h4 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  div {
    width: 100%;
    text-align: end;
  }

  button {
    color: whitesmoke;
    background-color: #0177ff;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
  }
`;
