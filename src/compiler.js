const transform = (value) => value;

const getTransform = (config) => {
  const tr = config.transform || transform;

  return (source) => {
    const result = tr(source[config.key]);
    if (result === undefined) {
      return config.default;
    }
    return result;
  };
};

module.exports = (schema) => {
  const compiler = [];

  Object.keys(schema).forEach((key) => {
    const valueSchema = schema[key];
    if (valueSchema.constructor === String) {
      compiler.push({ key: valueSchema, transform: getTransform({ key }) });
    } else if (Array.isArray(valueSchema)) {
      valueSchema.forEach((v) => {
        compiler.push({
          key: v.key,
          transform: getTransform({ key, transform: v.transform, default: v.default }),
        });
      });
    }
  });

  return (src) => {
    const res = {};
    compiler.forEach((indicator) => {
      res[indicator.key] = indicator.transform(src);
    });
    return res;
  };
};
