import getTag from ".internal/getTag";

const isSymbol = (val) => {
  const type = typeof val;
  return type === 'symbol' || (type === 'object' && val != null && getTag(val) == '[object Symbol]');
}

export default isSymbol;