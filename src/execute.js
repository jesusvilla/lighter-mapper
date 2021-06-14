module.exports = (src, schema) => {
  const res = {};
  const extract = (item, value) => {
    const itemValue = item.transform !== undefined ? item.transform(value) : value;
    if (itemValue === undefined) {
      if (item.default !== undefined) {
        res[item.key] = item.default;
      }
      return;
    }
    res[item.key] = itemValue;
  };

  Object.keys(schema).forEach((key) => {
    const value = src[key];
    const valueSchema = schema[key];

    if (Array.isArray(valueSchema)) {
      valueSchema.forEach((item) => extract(item, value));
    } else {
      extract({ key: valueSchema }, value);
    }
  });

  return res;
};
