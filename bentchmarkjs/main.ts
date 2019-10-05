import Benchmark from 'benchmark';
const suite = new Benchmark.Suite;

// add tests
suite
  .add('RegExp#test', () => {
    /o/.test('Hello World!');
  })
  .add('String#indexOf', () => {
    'Hello World!'.indexOf('o') > -1;
  })
  .add('String#match', () => {
    !!'Hello World!'.match(/o/);
  })
  .on('complete', () => {
    console.log('Fastest is ' + suite.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });
