export const getCardRotation = (
  index: number,
  total: number,
  isPlayer: boolean
) => {
  const middle = (total - 1) / 2;
  const rotate = (index - middle) * 10;
  const translateY = Math.pow(Math.abs(index - middle), 2) * 5;

  return {
    rotate: isPlayer ? rotate : -rotate,
    translateY: isPlayer ? translateY : -translateY,
  };
};
