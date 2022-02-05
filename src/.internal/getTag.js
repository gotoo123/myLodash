const toString = Object.prototype.toString;

const getTage = (val) => {
  if(val == null) {
    return val === undefined ? '[object undefined]' : '[object null]';
  }
  return toString.call(val);
}

export default getTage;

/*
* IE7 以前 null、undefined 你要直接 toString 的话结果都是 '[object Object]'。
*
* null == undefined          // true
* null == null              // true
* undefined == undefined      // true
*
* null === undefined         // false
* null === null             // true
* undefined === undefined     // true
*
*
* NaN == NaN                // false
* */