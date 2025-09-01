export default class Curso  {

    #id;
    #nome;
    #descrição;
    #professor;
    #carga_horaria;
    #nivel;
    #vagas;
    #preco;
    #imagem;

    constructor (id ="", nome="", descrição="", professor="", carga_horaria="", nivel="", vagas="", preco="", imagem="") {
        this.#id = id;
        this.#nome = nome;
        this.#descrição = descrição;
        this.#professor = professor;
        this.#carga_horaria = carga_horaria;
        this.#nivel = nivel;
        this.#vagas = vagas;
        this.#preco = preco;
        this.#imagem = imagem;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        return this.#id = id;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        return this.#nome = nome;
    }

    get descrição() {
        return this.#descrição;
    }

    set descrição(descrição) {
        return this.descrição = descrição;
    }

    get professor() {
        return this.#professor;
    }

    set professor(professor) {
        return this.#professor = professor;
    }

    get carga_horaria() {
        return this.#carga_horaria;
    }

    set carga_horaria(carga_horaria) {
        return this.#carga_horaria = carga_horaria;
    }

    get nivel() {
        return this.#nivel;
    }

    set nivel(nivel) {
        return this.#nivel = nivel;
    }

    get vagas() {
        return this.#vagas;
    }

    set vagas(vagas) {
        return this.#vagas = vagas;
    }

    get preco() {
        return this.#preco;
    }

    set preco(preco) {
        return this.#preco = preco;
    }

    get imagem() {
        return this.#imagem;
    }

    set imagem(imagem) {
        return this.#imagem = imagem;
    }
    
    toString() {
        return `
            id: ${this.#id}
            nome: ${this.#nome}
            descrição: ${this.#descrição}
            professor: ${this.#professor}
            carga_horaria: ${this.#carga_horaria}
            nivel: ${this.#nivel}
            vagas: ${this.#vagas}
            preco: ${this.#preco}
            imagem: ${this.#imagem}
        `
    }

    toJSON() {
        return {
            id: this.#id,
            nome: this.#nome,
            descrição: this.#descrição,
            professor: this.#professor,
            carga_horaria: this.#carga_horaria,
            nivel: this.#nivel,
            vagas: this.#vagas,
            preco: this.#preco,
            imagem: this.#imagem
        }
    }
}