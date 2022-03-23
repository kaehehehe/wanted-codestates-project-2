import React from 'react';

import * as S from './style';

const Toggle = ({ show, setShow }) => {
  return (
    <S.Toggle>
      <S.Input type="checkbox" onClick={() => setShow(!show)} />
      <S.Slider show={show} />
    </S.Toggle>
  );
};

export default Toggle;
