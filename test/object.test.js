const test = require('./core');

const source = {
  id: 'hdad54asd6asdss',
  value: 'Hi',
};

const schemaSimple = {
  id: {
    key: 'idOut',
  },
  value: {
    key: 'valueOut',
  },
};

const schemaNotExists = {
  id: {
    key: 'idOut',
  },
  value: {
    key: 'valueOut',
  },
  label: {
    key: 'labelOut',
  },
};

const schemaOptional = {
  id: {
    key: 'idOut',
  },
  value: {
    key: 'valueOut',
  },
  label: {
    key: 'labelOut?',
  },
};

test('simple', source, schemaSimple);
test('not exists', source, schemaNotExists);
test('optional', source, schemaOptional);
