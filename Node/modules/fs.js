const fs = require("fs");
const path = require("path");

//criar uma pasta
fs.mkdir(path.join(__dirname, "test"), (error) => {
  if (error) {
    return console.log("Erro:", error);
  }
  console.log("Pasta criada com sucesso");
});

//criar um arquivo - precisa ter o caminho completo da pasta ja criado
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Arquivo criado com node, versão 2",
  (error) => {
    if (error) {
      return console.log("Erro:", error);
    }
    console.log("Arquivo criado com sucesso");
  }
);

//adicionar a um arquivo ja criado
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  " Texto adicionado ao arquivo",
  (error) => {
    if (error) {
      return console.log("Erro:", error);
    }
    console.log("Adicionado texto ao arquivo");
  }
);

//ler arquivo
fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Erro:", error);
    }
    console.log(data);
  }
);
