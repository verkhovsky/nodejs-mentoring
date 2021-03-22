import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverse(text) {
  return [...text].reverse().join('');
}

(function main() {
  rl.question('String:', (name) => {
    name
      ? console.log(reverse(name))
      : console.warn('Please enter not empty string');

    main();
  });
})();