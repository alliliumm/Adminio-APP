<?php

include_once('conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);


/*Cadastrar Condomínio*/
if($postjson['requisicao'] == 'addcond'){

  /*Cadastrar endereço do condomínio*/
  $query = $pdo->prepare("INSERT INTO enderecos SET rua= :rua, bairro = :bairro, numero = :numero, complemento = :complemento");

    $query->bindValue(":rua", $postjson['rua']);
    $query->bindValue(":bairro", $postjson['bairro']);
    $query->bindValue(":numero", $postjson['numero']);
    $query->bindValue(":complemento", $postjson['complemento']);
    $query->execute();

    $endid = $pdo->lastInsertId();
  

    if($query){
      $result = json_encode(array('success'=>true, 'endereco_id'=>$endid));

    }else{
      $result = json_encode(array('success'=>false));

    }
    echo $result;

  /*Cadastrar contatos do condomínio*/
  $query = $pdo->prepare("INSERT INTO contatos SET telefone = :telefone, email = :email");

    $query->bindValue(":telefone", $postjson['telefone']);
    $query->bindValue(":email", $postjson['email']);
    $query->execute();

    $contid = $pdo->lastInsertId();
  

    if($query){
      $result = json_encode(array('success'=>true, 'contato_id'=>$contid));

    }else{
      $result = json_encode(array('success'=>false));

    }
    echo $result;

  /*Cadastrar informações do condomínio*/
  $query = $pdo->prepare("INSERT INTO condominioo SET nomecond = :nomecond, condominioo_endereco_id = :condominioo_endereco_id, condominioo_contato_id = :condominioo_contato_id");

    $query->bindValue(":nomecond", $postjson['nomecond']);
    $query->bindValue(":condominioo_endereco_id",$endid);
    $query->bindValue(":condominioo_contato_id",$contid);
    $query->execute();

    $condid = $pdo->lastInsertId();
     

    if($query){
      $result = json_encode(array('success'=>true,'condominioo_id'=>$condid));

    }else{
      $result = json_encode(array('success'=>false));
  
    }
    echo $result;


}




/*Cadastrar Síndico*/
else if($postjson['requisicao'] == 'addsin'){

  $query = $pdo->prepare("INSERT INTO sindicos SET nome = :nome, tipo_sindico = :tipo_sindico, sindico_condominioo_id = :sindico_condominioo_id, email_sin = :email_sin, senha_sin = :senha_sin");

     $query->bindValue(":nome", $postjson['nome']);
     $query->bindValue(":tipo_sindico", $postjson['tipo_sindico']);
     $query->bindValue(":sindico_condominioo_id", $postjson['sindico_condominioo_id']);
     $query->bindValue(":email_sin", $postjson['email_sin']);
     $query->bindValue(":senha_sin", $postjson['senha_sin']);
     $query->execute();

     $sindid = $pdo->lastInsertId();
     

    if($query){
      $result = json_encode(array('success'=>true, 'sindico_id'=>$sindid));

      }else{
      $result = json_encode(array('success'=>false));
  
      }
      echo $result;
}

/*Cadastrar usuário*/ 

else if($postjson['requisicao'] == 'addmo'){


  $query = $pdo->prepare("INSERT INTO condominos SET condnome = :condnome, tipo_condomino = :tipo_condomino, condominos_condominioo_id = :condominos_condominioo_id, conjunto= :conjunto, bloco =:bloco, andar =:andar, apartamento = :apartamento, email_cond = :email_cond, senha_cond = :senha_cond");

     $query->bindValue(":condnome", $postjson['condnome']);
     $query->bindValue(":tipo_condomino", $postjson['tipo_condomino']);
     $query->bindValue(":condominos_condominioo_id", $postjson['condominos_condominioo_id']);
     $query->bindValue(":conjunto", $postjson['conjunto']);
     $query->bindValue(":bloco", $postjson['bloco']);
     $query->bindValue(":andar", $postjson['andar']);
     $query->bindValue(":apartamento", $postjson['apartamento']);
     $query->bindValue(":email_cond", $postjson['email_cond']);
     $query->bindValue(":senha_cond", $postjson['senha_cond']);
     $query->execute();

     $morid = $pdo->lastInsertId();
     

    if($query){
      $result = json_encode(array('success'=>true, 'condomino_id'=>$morid));

      }else{
      $result = json_encode(array('success'=>false));
  
      }
      echo $result;
}



    

?>