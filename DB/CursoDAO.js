import Curso from "../Models/Curso.js";
import conectar from "./conexao.js";
export default class CursoDAO {

    async gravar(curso) {
        if (curso instanceof Curso) {
            const conexao = await conectar();
            const sql = "INSERT INTO curso (id_curso, nome_curso, descricao_curso, professor_curso, carga_horaria_curso, nivel_curso, vagas_curso, preco_curso, imagem_curso) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            const parametros = [
                curso.id,
                curso.nome,
                curso.descrição,
                curso.professor,
                curso.carga_horaria,
                curso.nivel,
                curso.vagas,
                curso.preco,
                curso.imagem
            ];

            await conexao.execute(sql, parametros);
            await conexao.release();
        }
        

    }
    

    async alterar(curso) {
        if (curso instanceof Curso) {
            const conexao = await conectar();
            const sql = "UPDATE curso SET nome_curso = ?, descricao_curso = ?, professor_curso = ?, carga_horaria_curso = ?, nivel_curso = ?, vagas_curso = ?, preco_curso = ?, imagem_curso = ? WHERE id_curso = ?";
            const parametros = [
                curso.nome,
                curso.descrição,
                curso.professor,
                curso.carga_horaria,
                curso.nivel,
                curso.vagas,
                curso.preco,
                curso.imagem,
                curso.id,
            ];
            
            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }


    async excluir(curso) {
        if (curso instanceof Curso) {
            const conexao = await conectar();
            const sql = "DELETE FROM curso WHERE id_curso = ?";
            const parametros = [curso.id];

            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }

    async consultar() {
        const conexao = await conectar();
        const sql = "SELECT * FROM curso";
        const [linhas] = await conexao.query(sql);
        await conexao.release();

        let listaCurso = [];
        for (const linha of linhas) {
            const curso = new Curso(
                linha.id_curso,
                linha.nome_curso,
                linha.descricao_curso,
                linha.professor_curso,
                linha.carga_horaria_curso,
                linha.nivel_curso,
                linha.vagas_curso,
                linha.preco_curso,
                linha.imagem_curso
            );

            listaCurso.push(curso);
        }

        return linhas;

    }
}



