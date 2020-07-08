/* module.exports = () => {
  // ...
}; */

const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'README.md')

/* const data = fs.readFileSync('README.md');
console.log(data.toString()); */

fs.readFile(file,'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

