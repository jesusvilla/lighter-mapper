const execute = require('./execute');
const compiler = require('./compiler');

module.exports = {
  execute,
  compiler,
};

// const mapper = require('lighter-mapper')
// const testMapper = mapper.compiler(schema)
// const object = testMapper(source)

// const object = mapper.execute(schema, source)
