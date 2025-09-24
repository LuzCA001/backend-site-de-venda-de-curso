
import Curso from "../Models/Curso.js"
export default class CursoController{

    //post
    gravar(requisicao, resposta) {
    if (requisicao.method === "POST" && requisicao.is("application/json")) {
        const dados = requisicao.body;

        
        if (dados.id && dados.nome && dados.descricao && dados.professor && dados.carga_horaria && dados.nivel && dados.vagas && dados.preco && dados.imagem) {
            
            const curso = new Curso(dados.id, dados.nome, dados.descricao, dados.professor, dados.carga_horaria, dados.nivel, dados.vagas, dados.preco, dados.imagem);

           
            curso.consultarID(dados.id).then((cursosExistentes) => {
                
               
                if (cursosExistentes.length > 0) {
                    
                    curso.alterar().then(() => {
                        resposta.status(200).json({
                            status: true,
                            message: "Curso alterado com sucesso!"
                        });
                    }).catch((erro) => {
                        resposta.status(500).json({
                            status: false,
                            message: "Erro ao alterar o curso: " + erro.message
                        });
                    });
                } 
                
                else {
                    
                    curso.gravar().then(() => {
                        resposta.status(200).json({
                            status: true,
                            message: "Curso gravado com sucesso!"
                        });
                    }).catch((erro) => {
                        resposta.status(500).json({
                            status: false,
                            message: "Erro ao gravar o curso: " + erro.message
                        });
                    });
                }
            });
        } else {
            resposta.status(400).json({
                status: false,
                message: "ERRO: Todos os campos, incluindo o ID, devem ser preenchidos."
            });
        }
    } else {
        resposta.status(400).json({
            status: false,
            message: "Requisição inválida."
        });
    }
}



   //put
    alterar(requisicao, resposta) {

         console.log("\n=============================================");
    console.log(">>> FUNÇÃO 'alterar' RECEBEU UMA REQUISIÇÃO <<<");
    console.log("Método recebido:", requisicao.method);
    console.log("Header 'Content-Type':", requisicao.headers['content-type']);
    
    const isJson = requisicao.is("application/json");
    console.log("Resultado de requisicao.is('application/json'):", isJson);

    const isPutOrPatch = requisicao.method === 'PUT' || requisicao.method === 'PATCH';
    console.log("O método é PUT ou PATCH?", isPutOrPatch);
    console.log("=============================================\n");


    if ((requisicao.method === 'PUT' || requisicao.method === 'PATCH') && requisicao.is("application/json")) {
        const dados = requisicao.body;
        const id = requisicao.params.id;

        
        if (!id || isNaN(id)) {
            return resposta.status(400).json({
                status: false,
                message: "ID do curso inválido ou não fornecido na URL."
            });
        }

        if (dados.nome && dados.descricao && dados.professor && dados.carga_horaria && dados.nivel && dados.vagas && dados.preco && dados.imagem) {

            const curso = new Curso(id, dados.nome, dados.descricao, dados.professor, dados.carga_horaria, dados.nivel, dados.vagas, dados.preco, dados.imagem);
            
            
            curso.alterar() 
                .then(() => {
                    resposta.status(200).json({
                        status: true,
                        message: "Curso alterado com sucesso"
                    });
                })
                .catch((erro) => {
                    resposta.status(500).json({
                        status: false,
                        message: "Não foi possível alterar o curso: " + erro.message
                    });
                });
        } else {
            resposta.status(400).json({
                status: false,
                message: "Informe todos os campos corretamente para a alteração."
            });
        }
    } else {
        resposta.status(400).json({
            status: false,
            message: "Requisição inválida. Use o método PUT ou PATCH com Content-Type application/json."
        });
    }
}

    //delete
    excluir(requisicao, resposta){
        if (requisicao.method == 'DELETE') {
            const id = requisicao.params.id;
            if (id) {
                const curso = new Curso()
                curso.consultarID(id)
                .then((listaCurso) => {
                    const curso = listaCurso[0];
                    if (curso) {
                        curso.excluir()
                        .then(() => {
                            resposta.status(200).json({
                            status: true,
                            message: "Curso excluído com sucesso"
                            });
                        })
                        .catch((erro) => {
                            resposta.status(500).json({
                            status: false,
                            message: "Não foi possível excluir o curso: " + erro.message
                            })
                        });

                    } else {
                        resposta.status(404).json({
                        status: false,
                        message: "Curso não encontrado"
                        })
                    };
                })
                .catch((erro) => {
                    resposta.status(500).json({
                    status: false,
                    message: "Não foi possível excluir o curso: " + erro.message
                    })
                });
                
                
            } else {
                resposta.status(400).json({
                message: "Informe todos o ID do Curso"    
                });
            }
        } else {
            resposta.status(400).json({
            status: false,
            message: "requisição inválida"
            });
        }
    }

    //get
    consultar(requisicao, resposta){
        if (requisicao.method === 'GET') {
            const id = requisicao.params.id;
            const curso = new Curso();

            if (id) {
                curso.consultarID(id)
                .then((listaCurso) => {
                    if (listaCurso.length > 0) {
                        
                    
                        resposta.status(200).json({
                        status: true,
                        message: "Curso consultado com sucesso",
                        cursos: listaCurso
                        });
                        
                    }
                    
                    else {
                        resposta.status(404).json({
                        status: false,
                        message: "Curso não encontrado"
                        })
                    };
                })
                
                .catch((erro) => {
                    resposta.status(500).json({
                    status: false,
                    message: "Não foi possível consultar o curso: " + erro.message
                    })
                });
               
            }
            else {
                curso.consultar()
                .then((listaCurso) => {
                    resposta.status(200).json({
                    status: true,
                    message: "Cursos consultados com sucesso",
                    cursos: listaCurso
                    });
                })
                .catch((erro) => {
                    resposta.status(500).json({
                    status: false,
                    message: "Não foi possível consultar os cursos: " + erro.message
                    })
                });
            }
               

        }

        else{

            resposta.status(400).json({
                status: false,
                message: "requisição inválida"
            });

        }

    };

};

