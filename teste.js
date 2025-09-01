import Curso from "./Models/Curso.js";

const curso = new Curso(3, "Java", "programação", "Renato", 10, "intermediario", 20, 250.00, "nada por enquanto.");

/*
await curso.gravar();
console.log("Curso gravado com sucesso.");
console.log("O Curso recebeu o seguinte id: " + curso.id); 
*/

/*
curso.nome = "C#";
await curso.alterar();
console.log("Curso alterado com sucesso.");
*/

/*
await curso.excluir(3);
console.log("Curso excluido com sucesso.");
*/

/*
await curso.consultar(2);
console.log(curso.toString());
*/

console.log(curso.toString());