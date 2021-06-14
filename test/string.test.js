const test = require('./core');

const source = {
  id: 'hdad54asd6asdss',
  value: 'Hi',
};

const schemaSimple = {
  id: 'idOut',
  value: 'valueOut',
};

const schemaNotExists = {
  id: 'idOut',
  value: 'valueOut',
  label: 'labelOut',
};

const schemaOptional = {
  id: 'idOut',
  value: 'valueOut',
  label: 'labelOut?',
};

test('simple', source, schemaSimple);
test('not exists', source, schemaNotExists);
test('optional', source, schemaOptional);
