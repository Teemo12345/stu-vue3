const execa = require('execa')
const {targets, fuzzyMatchTarget} = require('./utils')
const target = fuzzyMatchTarget(process.argv[2]||'runtime-dom')
console.log(targets, target, process.argv)
// execa(
//   'rollup',
//   [
//     '-wc',
//     '--environment',
//     `TARGET:${target}, FORMATS: umd`
//   ],
//   {
//     stdio: 'inherit'
//   }
// )