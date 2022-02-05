import isSymbol from "./isSymbol.js";
import isObject from "./isObject.js";

const NAN = 0 / 0;
const reTrim = /^\s+|\s+$/g;
const reIsBinary = /^0b[01]+$/i;
const reIsOctal = /^0o[0-7]+$/i;
const reIsBadHex = /^[+-]0x[0-9a-f]+$/i;

const freesParseInt = parseInt;

const toNumber = (val) => {
  if (typeof val === 'number')
    return val;

  if (isSymbol(val))
    return NaN;

  if (isObject(val)) {
    const other = typeof val.valueOf === 'function' ? val.valueOf() : val;
    val = isObject(other) ? `${other}` : other;
  }

  if (typeof val !== 'string')
    return val === 0 ? val : +val;

  val = val.replace(reTrim, '');
  const isBinary = reIsBinary.test(val);
  const isOctal = reIsOctal.test(val);
  return (isBinary || isOctal)
    ? freesParseInt(val.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(val) ? NAN : +val);
}

export default toNumber;


/*
* 对象转换为原始值:  https://blog.csdn.net/qq_30541261/article/details/78394728
*
* ladash toNumber:  https://github.com/yeyuqiudeng/pocket-lodash/issues/53
*
*
* 无法处理带符号的二进制、八进制、十六进制数
* */