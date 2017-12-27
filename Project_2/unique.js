const Benchmark = require('benchmark');

let suite = new Benchmark.Suite;

let func = require('./func');


// add tests
suite
  .add('fp#unique', function () {
    let origin = new Array(1000).fill(0)
    let repeat = [1,2,3,4,5]
    func.fp(origin, repeat)
  })
  .add('hash#unique', function () {
    let origin = new Array(1000).fill(0)
    let repeat = [1,2,3,4,5]
    func.hashMapUnique(origin, repeat)
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });

// logs:
// => RegExp#test x 4,161,532 +-0.99% (59 cycles)
// => String#indexOf x 6,139,623 +-1.00% (131 cycles)
// => Fastest is String#indexOf
