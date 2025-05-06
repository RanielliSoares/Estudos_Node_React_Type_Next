const path = require("path");

//nome do arquivo atual - basename
console.log(path.basename(__filename));

//nome do diretorio atual - dirname
console.log(path.dirname(__filename));

//extensão do arquivo - extname
console.log(path.extname(__filename));

//criar objeto path - parse
console.log(path.parse(__filename));

//juntar caminhos de arquivos - join
console.log(path.join(__dirname, "test", "test.html"));
