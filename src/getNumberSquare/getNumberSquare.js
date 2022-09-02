const getNumberSquare = (number) => {
  if (number === 1) return number;

  return Math.pow(number, 2);
};

module.exports = getNumberSquare;
