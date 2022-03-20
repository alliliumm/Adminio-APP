<?php

include_once('conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);



/*Consultar usuário para criar e editar Pautas, editar status das pautas*/
if ($postjson['requisicao'] == 'consultuserpaut') {

  if ($query = $pdo->query("SELECT * from sindicos where sindico_id = '$postjson[pautas_sindico_id]' and senha_sin = '$postjson[senha]'")) {
    $res = $query->fetchAll(PDO::FETCH_ASSOC);

    for ($i = 0; $i < count($res); $i++) {
      foreach ($res[$i] as $key => $value) {
      }
      $dados = array(
        'sindico_id' => $res[$i]['sindico_id'],
        'senha_sin' => $res[$i]['senha_sin']
      );
    }

    if (count($res) > 0) {

      $result = json_encode(array('success' => true, 'result' => $dados, 'consultpagepaut' => true));
      echo $result;

    } else {
      $erro = 'Dados incorretos, verifique se o email e senha estão corretos!';
      
      $result = json_encode(array('success' => false, 'msg' => $erro));
      echo "Dados inválidos";
    }
  }
}




/*Criar Comunicado*/

else if ($postjson['requisicao'] == 'newcomunicado') {

  $query = $pdo->prepare("INSERT INTO comunicados SET assunto = :assunto, conteudo =:conteudo, status = :status, comunicados_sindico_id = :comunicados_sindico_id, cont_sinalizacoes = :cont_sinalizacoes");
  
  $number = 0;
  
        $query->bindValue(":assunto", $postjson['assunto']);
        $query->bindValue(":conteudo", $postjson['conteudo']);
        $query->bindValue(":status", $postjson['status']);
        $query->bindValue(":comunicados_sindico_id", $postjson['comunicados_sindico_id']);
        $query->bindValue(":cont_sinalizacoes", $number);
        $query->execute();
  
        $comuid = $pdo->lastInsertId();
  
  
        if ($query) {
          $result = json_encode(array('success' => true, 'comunicado_id' => $comuid, 'pagecomu' => true));
        } else {
          $result = json_encode(array('success' => false));
        }
        echo $result;
}


/*Excluir Comunicado . Administrador*/ 

else if($postjson['requisicao'] == 'excluircomunicado'){
    
            
  $query = $pdo->query("DELETE FROM comunicados where comunicado_id = '$postjson[comunicado_id]'");

    if($query){
      $result = json_encode(array('success'=>true));

      }else{
      $result = json_encode(array('success'=>false));
  
      }
   echo $result;

  }

        
/*Editar Comunicados*/

else if ($postjson['requisicao'] == 'editcomunicado') {


  $query = $pdo->prepare("UPDATE comunicados SET assunto = :assunto, conteudo =:conteudo, status = :status, comunicados_sindico_id = :comunicados_sindico_id where comunicado_id = '$postjson[comunicado_id]'");

  $query->bindValue(":assunto", $postjson['assunto']);
  $query->bindValue(":conteudo", $postjson['conteudo']);
  $query->bindValue(":status", $postjson['status']);
  $query->bindValue(":comunicados_sindico_id", $postjson['comunicados_sindico_id']);
  $query->execute();

  if ($query) {
    $result = json_encode(array('success' => true));
  } else {
    $result = json_encode(array('success' => false));
  }
  echo $result;

}

/*Editar status dos Comunicados*/

else if ($postjson['requisicao'] == 'editstatuscomunicado') {

  $query = $pdo->prepare("UPDATE comunicados SET status = :status, comunicados_sindico_id = :comunicados_sindico_id where comunicado_id = '$postjson[comunicado_id]'");

  $query->bindValue(":status", $postjson['status']);
  $query->bindValue(":comunicados_sindico_id", $postjson['comunicados_sindico_id']);
  $query->execute();

  if ($query) {
    $result = json_encode(array('success' => true));
  } else {
    $result = json_encode(array('success' => false));
  }
  echo $result;

}



/*Criar Pautas*/

else if ($postjson['requisicao'] == 'newpaut') {

  $query = $pdo->prepare("INSERT INTO pautas SET assunto = :assunto, conteudo =:conteudo, status = :status, pautas_sindico_id = :pautas_sindico_id");
  
  
        $query->bindValue(":assunto", $postjson['assunto']);
        $query->bindValue(":conteudo", $postjson['conteudo']);
        $query->bindValue(":status", $postjson['status']);
        $query->bindValue(":pautas_sindico_id", $postjson['pautas_sindico_id']);
        
        $query->execute();
  
        $pautid = $pdo->lastInsertId();
  
  
        if ($query) {
          $result = json_encode(array('success' => true, 'pauta_id' => $pautid, 'pagepaut' => true));
  
          $query = $pdo->prepare("INSERT INTO votacao SET cont_votosim = 0, cont_votonao = 0, votacao_pauta_id = :votacao_pauta_id");
          $query->bindValue(":votacao_pauta_id", $pautid);
          $query->execute();
          
  
        } else {
          $result = json_encode(array('success' => false));
        }
        echo $result;
  }
  


/*Excluir pauta . Administrador*/ 

else if($postjson['requisicao'] == 'excluirpaut'){
    
            
  $query = $pdo->query("DELETE FROM pautas where pauta_id = '$postjson[pauta_id]'");

    if($query){
      $result = json_encode(array('success'=>true));

      }else{
      $result = json_encode(array('success'=>false));
  
      }
   echo $result;

  }


/*Editar Pautas*/

else if ($postjson['requisicao'] == 'editpaut') {


      $query = $pdo->prepare("UPDATE pautas SET assunto = :assunto, conteudo =:conteudo, status = :status, pautas_sindico_id = :pautas_sindico_id where pauta_id = '$postjson[pauta_id]'");

      $query->bindValue(":assunto", $postjson['assunto']);
      $query->bindValue(":conteudo", $postjson['conteudo']);
      $query->bindValue(":status", $postjson['status']);
      $query->bindValue(":pautas_sindico_id", $postjson['pautas_sindico_id']);
      $query->execute();

      if ($query) {
        $result = json_encode(array('success' => true));
      } else {
        $result = json_encode(array('success' => false));
      }
      echo $result;

}

/*Editar status das pautas*/

else if ($postjson['requisicao'] == 'editstatus') {

      $query = $pdo->prepare("UPDATE pautas SET status = :status, pautas_sindico_id = :pautas_sindico_id where pauta_id = '$postjson[pauta_id]'");

      $query->bindValue(":status", $postjson['status']);
      $query->bindValue(":pautas_sindico_id", $postjson['pautas_sindico_id']);
      $query->execute();

      if ($query) {
        $result = json_encode(array('success' => true));
      } else {
        $result = json_encode(array('success' => false));
      }
      echo $result;

}















        

?>