import React from 'react';

import * as S from './style';

const Modal = ({ setShow }) => {
  return (
    <S.Background onClick={() => setShow(false)}>
      <S.Modal>
        <h4>확인</h4>
        <p>
          일치하는 유저가 없습니다.
          <br />
          닉네임이 변경되었는지 확인해주세요
        </p>
        <div>
          <button onClick={() => setShow(false)}>확인</button>
        </div>
      </S.Modal>
    </S.Background>
  );
};

export default Modal;
