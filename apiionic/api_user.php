<?php

include_once('conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);


/*Listar pautas > Usuário*/ 
    
if($postjson['requisicao'] == 'listarpaut'){

  if($postjson['assunto'] == ''){
      $query = $pdo->query("SELECT * from pautas order by pauta_id desc limit $postjson[start], $postjson[limit]");
  }else{
    $busca = $postjson['assunto'] . '%';
    $query = $pdo->query("SELECT * from pautas where assunto LIKE '$busca' order by pauta_id desc limit $postjson[start], $postjson[limit]");
  }


  $res = $query->fetchAll(PDO::FETCH_ASSOC);

 for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }
    
   $dados[] = array(
     'pauta_id' => $res[$i]['pauta_id'],
     'assunto' => $res[$i]['assunto'],
     'conteudo' => $res[$i]['conteudo']
   );

  }

      if(count($res) > 0){
              $result = json_encode(array('success'=>true, 'result'=>$dados));

          }else{
              $result = json_encode(array('success'=>false, 'result'=>'0'));

          }
          echo $result;

}


/*Voto*/ 

else if($postjson['requisicao'] == 'vtscom'){ 

  if($postjson['voto'] == 'sim'){
    $query = $pdo->prepare("UPDATE pautas  SET cont_sim = cont_sim + 1 where pauta_id = :pauta_id");
   }else{
    $query = $pdo->prepare("UPDATE pautas  SET cont_nao = cont_nao + 1 where pauta_id = :pauta_id");
   }

    $query->bindValue(":pauta_id", $postjson['pauta_id']);
    $query->execute();

    //  unset($query);

    // $query = $pdo->prepare("INSERT INTO voto SET voto = :voto,  fk_pauta_id = :pauta_id");
        
    //   $query->bindValue(":voto", $postjson['voto']);
    //   $query->bindValue(":pauta_id", $postjson['pauta_id']);
    //   $query->execute();
        
             
        
      if($query){
      $result = json_encode(array('success'=>true));
        
      }else{
      $result = json_encode(array('success'=>false));
          
      }
      echo $result;
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

