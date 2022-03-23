export const convertDataIntoTime = (matchTime) => {
  let SECOND;
  let MILLI_SECOND;

  if (matchTime.length === 5) {
    SECOND = matchTime.slice(0, 2);
    MILLI_SECOND = matchTime.slice(2);
  } else {
    SECOND = matchTime.slice(0, 3);
    MILLI_SECOND = matchTime.slice(3);
  }

  const min = Math.round(Number(SECOND) / 60);
  const sec = Number(SECOND) % 60;
  const mSec = Math.round((Number(MILLI_SECOND) / 1000) * 100);
  
  return `${min}'${sec}'${mSec}`;
};
