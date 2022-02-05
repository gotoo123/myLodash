import toNumber from './toNumber.js'

const INFINITE = 1 / 0;
const MAX_INTEGER = Number.MAX_VALUE;   //1.7976931348623157e+308

const toFinite = (val) => {
  if(!val) {
   return val === 0 ? val : 0;
  }

  val = toNumber(val);
  if(val === INFINITE || val === -INFINITE) {
    const sign = val > 0 ? 1 : -1;
    return  sign * MAX_INTEGER;
  }
  // 处理NaN
  return val === val ? val : 0;
}

export default toFinite;