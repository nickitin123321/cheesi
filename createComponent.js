const fs = require('fs');

const getExportLine = (name) =>  `export { default } from './${name}'`

const  createDir  = (name) => {
const dirName =  `./${name}`
fs.mkdir(dirName, { recursive: true }, (err) => {
  if (err) throw err;
});

process.chdir(name);
}

const createFile  = (name, content) => {
  fs.appendFile(`${name}`, content,  function (err) {
    if (err) throw err;
  });
}

const createComponent = () => {
process.chdir('./src/components');
const [name] = process.argv.splice(2);

createDir(name);
createFile(`${name}.js`, '');
createFile(`${name}.css`, '');
createFile('index.js',  getExportLine(name));
}

createComponent()