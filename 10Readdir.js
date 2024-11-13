const fs = require('fs');

function readdirPromise(caminho) {
  return new Promise((resolve, reject) => {
    fs.readdir(caminho, (err, arquivos) => {
      if (err) {
        reject(err);
      } else {
        resolve(arquivos);
      }
    });
  });
}

readdirPromise("/caminho/do/diretorio")
  .then((arquivos) => {
    console.log(`Arquivos e subdiretórios em /caminho/do/diretorio:`);
    arquivos.forEach((arquivo) => {
      console.log(arquivo);
    });
  })
  .catch((err) => {
    console.error('Erro ao ler o diretório:', err);
  });
