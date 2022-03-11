<?php

include_once('conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);


/*Consultar condomino para votar nas pautas*/
if ($postjson['requisicao'] == 'consultcondpaut') {

  if ($query = $pdo->query("SELECT * from condominos where condomino_id = '$postjson[votacao_condomino_id]' and senha_cond = '$postjson[senha]'")) {
    $res = $query->fetchAll(PDO::FETCH_ASSOC);

    for ($i = 0; $i < count($res); $i++) {
      foreach ($res[$i] as $key => $value) {
      }
      $dados = array(
        'condomino_id' => $res[$i]['condomino_id'],
        'senha_cond' => $res[$i]['senha_cond']
      );
    }

    if (count($res) > 0) {

      $result = json_encode(array('success' => true, 'result' => $dados, 'consultpagepautcond' => true));
      echo $result;

    } else {
      $result = json_encode(array('success' => false));
      echo "Dados inválidos";
    }
  }
}


/*Inserir linha da tabela de votos*/

else if($postjson['requisicao'] == 'inserirnumbersdevot'){

  $query = $pdo->prepare("INSERT INTO votos SET cont_votosim1 = 0, cont_votonao1 = 0");
  $query->execute();
  
  $votid = $pdo->lastInsertId();
  
  if($query){
    $result = json_encode(array('success'=>true, 'voto_id'=>$votid));
    echo "inserido"
    }else{
      $result = json_encode(array('success'=>false));
    echo "Errooooo";
    }
    
    echo $result;
  
  }

/*Inserir linha da tabela de votacao*/

else if($postjson['requisicao'] == 'inserirnumbersdevota'){

$query = $pdo->prepare("INSERT INTO votacao SET cont_votosim = 0, cont_votonao = 0");
$query->execute();

$votaid = $pdo->lastInsertId();

if($query){
  $result = json_encode(array('success'=>true,'votacao_id'=>$votaid));
  echo "inserido"
  }else{
    $result = json_encode(array('success'=>false));
  echo "Errooooo";
  }
  
  echo $result;

}


/*Votacao*/ 

else if($postjson['requisicao'] == 'vtscomvotacao'){ 

  if($postjson['voto'] == 'sim'){

    $votaid = $pdo->lastInsertId();

    $query = $pdo->prepare("UPDATE votacao  SET cont_votosim = cont_votosim + 1, votacao_pauta_id = :votacao_pauta_id where (SELECT * from pautas where pauta_id LIKE '$postjson[pauta_id]') = '$postjson[pauta_id]' and votacao_id = '$votaid'");
    
    $query->bindValue(":votacao_pauta_id", $postjson['votacao_pauta_id']);
    $query->execute();

    if($query){
      $result = json_encode(array('success'=>true));
      echo "Acertou miseravi";
        
    }else{
      $result = json_encode(array('success'=>false));
      echo "Errooooo";
          
    }
      echo $result;

  }else{
    $votaid = $pdo->lastInsertId();

    $query = $pdo->prepare("UPDATE votacao  SET cont_votonao = cont_votonao + 1, votacao_pauta_id = :votacao_pauta_id where (SELECT * from pautas where pauta_id LIKE '$postjson[pauta_id]') = '$postjson[pauta_id]' and votacao_id = '$votaid'");
   
    $query->bindValue(":votacao_pauta_id", $postjson['votacao_pauta_id']);
    $query->execute();

    if($query){
      $result = json_encode(array('success'=>true));
      echo "Acertou miseravi";
        
    }else{
      $result = json_encode(array('success'=>false));
      echo "Errooooo";
          
    }
      echo $result;
  
    }
        

}



/*Votos*/ 
else if($postjson['requisicao'] == 'vtscomvoto'){ 

  if($postjson['voto'] == 'sim'){
    $votid = $pdo->lastInsertId();

    $query = $pdo->prepare("UPDATE votos SET cont_votosim1 = cont_votosim1 + 1, votacao_condomino_id = :votacao_condomino_id where voto_id = '$votid'");
    
    $query->bindValue(":votacao_condomino_id", $postjson['votacao_condomino_id']);
    $query->execute();

    if($query){
      $result = json_encode(array('success'=>true));
      echo "Acertou miseravi";
        
      }else{
      $result = json_encode(array('success'=>false));
      echo "Errooooo";
          
      }
      echo $result;

   }else{

    $votid = $pdo->lastInsertId();

    $query = $pdo->prepare("UPDATE votos SET cont_votonao1 = cont_votonao1 + 1, votacao_condomino_id = :votacao_condomino_id where voto_id = '$votid'");
   
    $query->bindValue(":votacao_condomino_id", $postjson['votacao_condomino_id']);
    $query->execute();

    if($query){
      $result = json_encode(array('success'=>true));
      echo "Acertou miseravi";
        
      }else{
      $result = json_encode(array('success'=>false));
      echo "Errooooo";
          
      }
      echo $result;
  
  }
      
}




/*Comentário*/ 
else if($postjson['requisicao'] == 'coment'){

 }






/*Listar mensagens > Usuário*/ 
    
if($postjson['requisicao'] == 'listarmsg'){

  if($postjson['mensagem'] == ''){
      $query = $pdo->query("SELECT * from historico order by id_msg desc limit $postjson[start], $postjson[limit]");
  }else{
    $busca = $postjson['mensagem'] . '%';
    $query = $pdo->query("SELECT * from historico where mensagem LIKE '$busca' order by id_msg desc limit $postjson[start], $postjson[limit]");
  }


  $res = $query->fetchAll(PDO::FETCH_ASSOC);

 for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }
    
   $dados[] = array(
     'id_msg' => $res[$i]['id_msg'],
     'mensagem' => $res[$i]['mensagem'],
     'dia' => $res[$i]['dia'],
     'hora' => $res[$i]['hora']
   );

  }

      if(count($res) > 0){
              $result = json_encode(array('success'=>true, 'result'=>$dados));

          }else{
              $result = json_encode(array('success'=>false, 'result'=>'0'));

          }
          echo $result;

}



/*Alerts mensagens > Usuário*/ 
    
if($postjson['requisicao'] == 'alemsgu'){


      $query = $pdo->prepare("SELECT * from historico where mensagem and dia and hora where id_msg");



  $res = $query->fetchAll(PDO::FETCH_ASSOC);

 for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }
    
   $dados[] = array(
     'id_msg' => $res[$i]['id_msg'],
     'mensagem' => $res[$i]['mensagem'],
     'dia' => $res[$i]['dia'],
     'hora' => $res[$i]['hora']
   );

  }

      if(count($res) > 0){
              $result = json_encode(array('success'=>true, 'result'=>$dados));

          }else{
              $result = json_encode(array('success'=>false, 'result'=>'0'));

          }
          echo $result;

}







        

?>

