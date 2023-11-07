const connection = require("../config/db");

async function listPosts(request, response) {
  // Preparar o comando de execução no banco
  connection.query("SELECT * FROM posts", (err, results) => {
    try {
      // Tenta retornar as solicitações requisitadas
      if (results) {
        // Se tiver conteúdo
        response.status(200).json({
          success: true,
          message: "Retorno de posts com sucesso!",
          data: results,
        });
      } else {
        // Retorno com informações de erros
        response.status(400).json({
          success: false,
          message: `Não foi possível retornar os posts.`,
          query: err.sql,
          sqlMessage: err.sqlMessage,
        });
      }
    } catch (e) {
      // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
      response.status(400).json({
        succes: false,
        message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
        query: err.sql,
        sqlMessage: err.sqlMessage,
      });
    }
  });
}

// Função que cria um novo usuário
async function storePost(request, response) {
  // Preparar o comando de execução no banco
  const query =
    "INSERT INTO posts(descricao, user_id, created_at) VALUES(?, ?, ?);";

  // Recuperar os dados enviados na requisição
  const params = Array(
    request.body.descricao,
    request.body.user_id,
    request.body.created_at
  );

  // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
  connection.query(query, params, (err, results) => {
    try {
      if (results) {
        response.status(201).json({
          success: true,
          message: `Sucesso! Post cadastrado.`,
          data: results,
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Não foi possível realizar o cadastro. Verifique os dados informados`,
          query: err.sql,
          sqlMessage: err.sqlMessage,
        });
      }
    } catch (e) {
      // Caso aconteça algum erro na execução
      response.status(400).json({
        succes: false,
        message: "Ocorreu um erro. Não foi possível cadastrar usuário!",
        query: err.sql,
        sqlMessage: err.sqlMessage,
      });
    }
  });
}

// Função que atualiza o usuário no banco
async function updatePost(request, response) {
  // Preparar o comando de execução no banco
  const query = "UPDATE posts SET `descricao` = ? WHERE `id` = ?";

  // Recuperar os dados enviados na requisição respectivamente
  const params = Array(
    request.body.descricao,
    request.params.id // Recebimento de parametro da rota
  );

  // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
  connection.query(query, params, (err, results) => {
    try {
      if (results) {
        response.status(200).json({
          success: true,
          message: `Sucesso! Post atualizado.`,
          data: results,
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Não foi possível realizar a atualização. Verifique os dados informados`,
          query: err.sql,
          sqlMessage: err.sqlMessage,
        });
      }
    } catch (e) {
      // Caso aconteça algum erro na execução
      response.status(400).json({
        succes: false,
        message: "Ocorreu um erro. Não foi possível atualizar usuário!",
        query: err.sql,
        sqlMessage: err.sqlMessage,
      });
    }
  });
}

// Função que remove usuário no banco
async function deletePost(request, response) {
  // Preparar o comando de execução no banco
  const query = "DELETE FROM posts WHERE `id` = ?";

  // Recebimento de parametro da rota
  const params = Array(request.params.id);

  // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
  connection.query(query, params, (err, results) => {
    try {
      if (results) {
        response.status(200).json({
          success: true,
          message: `Sucesso! Postagem deletada.`,
          data: results,
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Não foi possível realizar a remoção. Verifique os dados informados`,
          query: err.sql,
          sqlMessage: err.sqlMessage,
        });
      }
    } catch (e) {
      // Caso aconteça algum erro na execução
      response.status(400).json({
        succes: false,
        message: "Ocorreu um erro. Não foi possível deletar usuário!",
        query: err.sql,
        sqlMessage: err.sqlMessage,
      });
    }
  });
}

module.exports = {
  listPosts,
  storePost,
  updatePost,
  deletePost,
};
