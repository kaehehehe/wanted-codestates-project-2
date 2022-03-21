import React, { useState } from 'react';

import * as S from './style';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

const Search = () => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <S.Search isFocus={isFocus}>
      <S.Input
        type="text"
        placeholder={isFocus ? '' : '닉네임 검색'}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <S.SearchBtn>
        <SearchIcon fill={'#8cafe6'} className="icon" />
      </S.SearchBtn>
    </S.Search>
  );
};

export default Search;
