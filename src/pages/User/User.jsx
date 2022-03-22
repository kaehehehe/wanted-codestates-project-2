import React, { useState, useContext } from 'react';
import Header from '../../components/User/Header';
import { useParams } from 'react-router-dom';

import * as S from './style';
import { GlobalContext } from '../../App';

const User = () => {
  const [matchType, setMatchType] = useState('solo');
  const { userData } = useContext(GlobalContext);
  const { nickname } = useParams();

  return (
    <S.Container>
      <Header
        matchType={matchType}
        setMatchType={setMatchType}
        nickname={nickname}
      />
    </S.Container>
  );
};

export default User;
