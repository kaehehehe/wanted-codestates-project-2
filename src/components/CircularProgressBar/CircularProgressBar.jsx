import React from 'react';
import ProgressBar from 'react-customizable-progressbar';

import * as S from './style';

const CircularProgressBar = ({ color, value }) => {
  return (
    <>
      <S.ProgressBar>
        <ProgressBar
          radius={40}
          progress={value}
          strokeWidth={8}
          strokeColor={color}
          trackStrokeColor="#EBEBEB"
          trackTransition={0}
          strokeLinecap="square"
          trackStrokeWidth={8}
          initialAnimation={true}
        >
          <S.Value color={color}>{value}%</S.Value>
        </ProgressBar>
      </S.ProgressBar>
    </>
  );
};

export default CircularProgressBar;
