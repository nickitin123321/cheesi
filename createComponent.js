const fs = require('fs');

const getExportLine = (name) =>  `export { default } from './${name}'`

const  createDir  = (name) => {
  const dirName =  `./${name}`
  fs.mkdir(dirName, { recursive: true }, err => {
    if (err) throw err;
  });

  process.chdir(name);
}

const createFile  = (name, content) => {
  fs.appendFile(`${name}`, content,   err => {
    if (err) throw err;
  });
}

const createComponent = () => {
  const args = process.argv.splice(2);
  const [name, folder = 'components'] = args;
  process.chdir(`./src/${folder}`);

  if(!args.length || args.length > 2){
    throw new Error('Enter component name argument');
  }


  createDir(name);
  createFile(`${name}.js`, '');
  createFile(`${name}.css`, '');
  createFile('index.js',  getExportLine(name));
}

createComponent()