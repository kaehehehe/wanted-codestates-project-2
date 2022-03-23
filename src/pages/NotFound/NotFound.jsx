import React from 'react';
import notFound from '../../assets/images/null.png';

import * as S from './style';

const NotFound = () => {
  return (
    <S.Container>
      <h2>404 Not Found</h2>
      <img src={notFound} alt="not found" />
    </S.Container>
  );
};

export default NotFound;
<img src="" />;
