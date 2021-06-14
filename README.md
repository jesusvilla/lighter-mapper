# Lighter-Mapper

Utility to copy properties from one source to another based on schemas,
It was born as an inspiration for [object-mapper](https://github.com/wankdanker/node-object-mapper), so it can be replaced using the same scheme.

## Features

- Object-mapper support
- Native Javascript
- Zero dependencies

## Installation (coming soon...)

Requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and start the server.

```sh
npm i lighter-mapper
```

## Benchmark

* __Machine:__ linux x64 | 16 CPUs | 16GB Mem
* __Node:__ v12.18.4
* __Run:__ Mon Jun 04 2021 05:20:01 GMT+0000 (Coordinated Universal Time)
* __Method:__ npm run bench

| Library                 | ops/sec   | delta  | runs sampled |
| ----------------------- | --------: | -----: | -----------: |
| object-mapper           |   296 601 | ±1.50% |           87 |
| lighter-mapper#execute  | 3 594 191 | ±1.51% |           86 |
| lighter-mapper#compiler | 4 152 328 | ±0.84% |           91 |

## License

MIT
