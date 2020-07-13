/* module.exports = () => {
  // ...
}; */

const fs = require('fs');
const path = require('path');

  const file = path.join(__dirname, 'testeparaleitura.md')

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
    return resolve (arrayRegex)
    //console.log(arrayRegex)
    }
    })
    })
  };
  //module.exports = mdLinks;


