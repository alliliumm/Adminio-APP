<?php

include_once('conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);


// mostra lista 

if($postjson['requisicao'] == 'listarcond'){

  $query = $pdo->query("SELECT * from condominioo");

    while($d = $query->fetch(PDO::FETCH_ASSOC)){
      $data[] = $d;
    }
    
  exit(json_encode($data));

}

/*Listar pautas > Usuário*/ 
    
else if($postjson['requisicao'] == 'listarpaut'){

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

/*Listar usuário > Administrador*/ 
    
else if($postjson['requisicao'] == 'listar'){

  if($postjson['nome'] == ''){
      $query = $pdo->query("SELECT * from morador order by morador_id desc limit $postjson[start], $postjson[limit]");
  }else{
    $busca = $postjson['nome'] . '%';
    $query = $pdo->query("SELECT * from morador where nome LIKE '$busca' or usuario LIKE '$busca' order by morador_id desc limit $postjson[start], $postjson[limit]");
  }


  $res = $query->fetchAll(PDO::FETCH_ASSOC);

 for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }
   $dados[] = array(
     'morador_id' => $res[$i]['morador_id'],
     'nome' => $res[$i]['nome'],
    'usuario' => $res[$i]['usuario'],
    'senha' => $res[$i]['senha'],
    'senha_crip' => $res[$i]['senha_crip'],
    'apartamento' => $res[$i]['apartamento'],
    'bloco' => $res[$i]['bloco']
          
      
   );

  }

      if(count($res) > 0){
              $result = json_encode(array('success'=>true, 'result'=>$dados));

          }else{
              $result = json_encode(array('success'=>false, 'result'=>'0'));

          }
          echo $result;

}

/*Listar mensagens > Usuário*/ 
    
else if($postjson['requisicao'] == 'listarmsg'){

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



?>