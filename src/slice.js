const slice = (arr, start, end) => {
  let length = arr === null ? 0 : arr.length;
  if(!length)
    return [];

  start = start == null ? 0 : start;
  end = end === undefined ? length : end;

  if(start < 0)
    start = -1 * start > length ? 0 : start + length;

  end = end > length ? length : end;
  if(end < 0)
    end += length;

  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0;

  let index = -1;
  const result = new Array(length);
  while(++index < length) {
    result[index] = arr[index + start];
  }

  return result;
}

export default slice;


/*
* 原生slice会将数组当做稀疏数组（数组length大于数组元素个数）对待，而lodash的slice会将数组当做稠密数组对待
*
* 稀疏数组在迭代的时候会跳过不存在的元素
*
*
* 移位操作符在移位前做了两种转换，
* 第一将不是number类型的数据转换为number，
* 第二将number转换为无符号的32bit数据，也就是Uint32类型。
* 这些与移位的位数无关，移位0位主要就是用了js的内部特性做了前两种转换。
*
* Unit32类型转换：
* 1. 如果不能转换为Number，那就为0
* 2. 如果为非整数，先转换为整数，参考公式sign(n) ⋅ floor(abs(n))
* 3. 如果是正数，返回正数，如果是负数，返回负数 + 2的32次方
*
*
* */
