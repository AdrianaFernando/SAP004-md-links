/* module.exports = () => {
  // ...
}; */

const fs = require('fs');
const path = require('path');

/* const mdPath = path.join(__dirname, 'files')

const mdRead = fs.readdir(mdPath, function(err, files) {
  if (err) {
    console.log("Nenhum arquivo .md encontrado.")
  } else {
    const mdFile = files.filter(function (file){
      return path.extname(file) == '.md'
    })
    mdFile.forEach(function(file) {
      console.log(file)
    })
  }
}) */

/* const file = path.join(__dirname, 'README.md')

const mdLinks = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file,'utf8', (err, data) => {
      if (err) {
        reject ('Nao encontrado');
  }else{
    const regEx = /\[([^\[\]]+)\]\((http[s]?:[^\)]*)\)/gm
    const matchRegex = data.match(regEx);
    const arrayRegex = [];
    matchRegex.forEach((element) =>{
      const infos = {
        text: `${element.match(/\[([^\[\]]+)\]/)}`,
        href: `${element.match(/\((http[s]?:[^\)]*)\)/)}`,
        file: file
      };
      arrayRegex.push(infos)
    })
    return resolve(arrayRegex)
  }
});
  });
  }
   */
  const file = path.join(__dirname, 'README.md')
   fs.readFile(file,'utf8', (err, data) => {
      if (err) {
        reject ('Nao encontrado');
  }else{
    const regEx = /\[([^\[\]]+)\]\((http[s]?:[^\)]*)\)/gm
    const matchRegex = data.match(regEx);
    const arrayRegex = [];
    matchRegex.forEach((element) =>{
      const infos = {
        text: `${element.match(/\[([^\[\]]+)\]/)}`,
        href: `${element.match(/\((http[s]?:[^\)]*)\)/)}`,
        file: file
      };
      arrayRegex.push(infos)
    })
    console.log(arrayRegex)
  }
});
