const delayFunction = (callback, ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(callback()), ms);
  });
};

module.exports = delayFunction;
