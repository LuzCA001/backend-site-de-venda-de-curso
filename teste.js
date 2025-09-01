import Curso from "./Models/Curso.js";

const curso = new Curso("5", "JavaScript", "programação orientada a objetos", "Renato","10", "intermediario", "20", "299,90", "nada por enquanto.");

await curso.gravar();

console.log("Curso gravado com sucesso.");
console.log("O Curso recebeu o seguinte id: " + curso.id);


//console.log(curso.toString());