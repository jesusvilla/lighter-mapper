const { Suite } = require('benchmark');
const mapper = require('object-mapper');
const lightMapper = require('../src');

const suite = new Suite();

const source = {
  numid: 1,
  tipoter: 'P',
  rolpersona: 'Jurídica',
  // tipodocumento: 'DNI',
};

const JSONMapper = {
  numid: 'numId',
  tipoter: [
    {
      key: 'indTipoPersona',
      transform(value) {
        return value === 'P' ? 'N' : 'J';
      },
    },
    {
      key: 'tipoTer',
    },
  ],
  rolpersona: [
    {
      key: 'rolPersona',
    },
  ],
  tipodocumento: [
    {
      key: 'tipoDocumento',
      default: '44444444',
    },
  ],
};

const compilerMapper = lightMapper.compiler(JSONMapper);

suite
  .add('object-mapper', () => {
    mapper(source, JSONMapper);
  })
  .add('lighter-mapper:execute', () => {
    lightMapper.execute(source, JSONMapper);
  })
  .add('lighter-mapper:compiler', () => {
    compilerMapper(source);
  })
  // add listeners
  .on('cycle', (event) => {
    console.log(event.target.toString());
  })
  .on('complete', () => {
    console.log(`Fastest is ${suite.filter('fastest').map('name')}`);
  })
  // run async
  .run({ async: true });
