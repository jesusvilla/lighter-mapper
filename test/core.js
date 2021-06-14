const test = require('ava');

const mapper = require('object-mapper');
const lightMapper = require('../src');

module.exports = (label, source, schema) => {
  const compilerMapper = lightMapper.compiler(schema);

  test(`${label}:execute`, (t) => {
    const actual = lightMapper.execute(source, schema);
    const expected = mapper(source, schema);
    t.deepEqual(actual, expected);
  });

  test(`${label}:compiler`, (t) => {
    const actual = compilerMapper(source);
    const expected = mapper(source, schema);
    t.deepEqual(actual, expected);
  });
};
