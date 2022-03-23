export const convertDataIntoAgo = (endTime) => {
  const index = endTime.indexOf('T');
  const [YEAR, MONTH, DAY] = endTime.slice(0, index).split('-');
  const [HOUR, MIN, SEC] = endTime.slice(index + 1).split(':');

  const today = new Date();

  if (today.getFullYear() !== Number(YEAR)) {
    const year = today.getFullYear() - YEAR;
    return `${year}년 전`;
  }
  if (today.getMonth() + 1 !== Number(MONTH)) {
    const month = today.getMonth() + 1 - MONTH;
    return `${month}개원 전`;
  }
  if (today.getDate() !== Number(DAY)) {
    const day = today.getDate() - DAY;
    if (DAY >= 7) {
      const week = Math.floor(DAY / 7);
      return `${week}주일 전`;
    } else {
      return `${day}일 전`;
    }
  }
  if (today.getHours() !== Number(HOUR)) {
    const hour = today.getHours() - Number(HOUR);
    return `${hour}시간 전`;
  }
  if (today.getMinutes() !== Number(MIN)) {
    const min = today.getMinutes() - Number(MIN);
    return `${min}분 전`;
  }
  if (today.getSeconds() !== Number(SEC)) {
    const sec = today.getSeconds() - Number(SEC);
    return `${sec}초 전`;
  }
  return '지금';
};
