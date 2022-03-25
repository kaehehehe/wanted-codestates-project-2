export const convertDataIntoAgo = (endTime) => {
  const today = new Date();
  const timeValue = new Date(endTime);

  const difference = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);

  if (difference < 1) return '방금전';
  if (difference < 60) return `${difference}분전`;

  const hour = Math.floor(difference / 60);
  if (hour < 24) return `${hour}시간전`;

  const day = Math.floor(difference / 60 / 24);
  if (day < 365) return `${day}일전`;

  return `${Math.floor(difference / 365)}년전`;
};
