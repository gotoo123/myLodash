const isObject = (val) => {
  const type = typeof val;
  return val !== null && (type === 'object' || type === 'function');
}

export default isObject;

/*
* null是基本数据类型 （Number,String,Boolean,Undefined,Null,Symbol）
* 但是typeof null 为 object,这是因为在js存储中对象是以000开头的，而null是一个空，相当于全0，所以typeof null也是object
*
* 在js中，变量由类型标签和变量值组成。对象的类型标签为0。
* 而null是一个空指针，在js最初版本使用32位系统，会使用低位存储变量的类型信息，而null也是以000开头，因此null的类型标签也为0，会被识别为对象
* 但null是全0，这是一个bug
*
*
* */