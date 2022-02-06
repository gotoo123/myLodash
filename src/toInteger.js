import toFinite from './toFinite.js'

const toInteger = (val) => {
  const result = toFinite(val);
  const remained = result % 1;

  return remained ? result - remained : result;
}

export default toInteger;