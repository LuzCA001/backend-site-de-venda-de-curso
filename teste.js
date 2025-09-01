import Curso from "./Models/Curso.js";

const curso = new Curso(2, "Java", "programação", "Renato", 10, "intermediario", 20, 250.00, "nada por enquanto.");

/*await curso.gravar();
console.log("Curso gravado com sucesso.");
console.log("O Curso recebeu o seguinte id: " + curso.id); 
*/

await curso.alterar();
console.log("Curso alterado com sucesso.");
//console.log(curso.toString());