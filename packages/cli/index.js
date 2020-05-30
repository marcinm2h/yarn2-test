console.log(require.resolve('lodash'));
try {
  console.log(require.resolve('cowsay'));
} catch(e) {
  console.log('cowsay is not workspace depedency');
}
