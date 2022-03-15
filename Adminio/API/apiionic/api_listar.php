<?php

include_once('conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);



// mostra lista de condomínio

if($postjson['requisicao'] == 'listarcond'){

  $query = $pdo->query("SELECT * from condominioo");

    while($d = $query->fetch(PDO::FETCH_ASSOC)){
      $data[] = $d;
    }
    
  exit(json_encode($data));

}

// mostra lista de sindico

else if($postjson['requisicao'] == 'listarsindico'){

  $query = $pdo->query("SELECT * from sindicos");

    while($d = $query->fetch(PDO::FETCH_ASSOC)){
      $data[] = $d;
    }
    
  exit(json_encode($data));

}

// mostra lista de condomino

else if($postjson['requisicao'] == 'listarcondomino'){

  $query = $pdo->query("SELECT * from condominos");

    while($d = $query->fetch(PDO::FETCH_ASSOC)){
      $data[] = $d;
    }
    
  exit(json_encode($data));

}



/*Listar pautas abertas*/ 
    
else if($postjson['requisicao'] == 'listarabertospaut'){

  if($postjson['assunto'] == ''){
      $query = $pdo->query("SELECT * from pautas where status LIKE 'Aberto' order by pauta_id desc limit $postjson[start], $postjson[limit]");
  }else{
    $busca = $postjson['assunto'] . '%';
    $query = $pdo->query("SELECT * from pautas where assunto LIKE '$busca' and status LIKE 'Aberto' order by pauta_id desc limit $postjson[start], $postjson[limit]");
  }


  $res = $query->fetchAll(PDO::FETCH_ASSOC);

 for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }
    
   $dados[] = array(
     'pauta_id' => $res[$i]['pauta_id'],
     'assunto' => $res[$i]['assunto'],
     'conteudo' => $res[$i]['conteudo'],
     'status' => $res[$i]['status'],
     'pautas_sindico_id' => $res[$i]['pautas_sindico_id']

   );

  }

      if(count($res) > 0){
              $result = json_encode(array('success'=>true, 'result'=>$dados));

          }else{
              $result = json_encode(array('success'=>false, 'result'=>'0'));

          }
          echo $result;

}


/*Listar pautas fechados*/ 
    
else if($postjson['requisicao'] == 'listarfechadospaut'){

  if($postjson['assunto'] == ''){
      $query = $pdo->query("SELECT * from pautas where status LIKE 'Fechado' order by pauta_id desc limit $postjson[start], $postjson[limit]");
  }else{
    $busca = $postjson['assunto'] . '%';
    $query = $pdo->query("SELECT * from pautas where assunto LIKE '$busca' and status LIKE 'Fechado' order by pauta_id desc limit $postjson[start], $postjson[limit]");
  }


  $res = $query->fetchAll(PDO::FETCH_ASSOC);

 for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }
    
   $dados[] = array(
     'pauta_id' => $res[$i]['pauta_id'],
     'assunto' => $res[$i]['assunto'],
     'conteudo' => $res[$i]['conteudo'],
     'status' => $res[$i]['status'],
     'pautas_sindico_id' => $res[$i]['pautas_sindico_id']

   );

  }

      if(count($res) > 0){
              $result = json_encode(array('success'=>true, 'result'=>$dados));

          }else{
              $result = json_encode(array('success'=>false, 'result'=>'0'));

          }
          echo $result;

}


/*Listar pautas em avaliação*/ 
    
else if($postjson['requisicao'] == 'listaravaliacaopaut'){

  if($postjson['assunto'] == ''){
      $query = $pdo->query("SELECT * from pautas where status LIKE 'Avaliação' order by pauta_id desc limit $postjson[start], $postjson[limit]");
  }else{
    $busca = $postjson['assunto'] . '%';
    $query = $pdo->query("SELECT * from pautas where assunto LIKE '$busca' and status LIKE 'Avaliação' order by pauta_id desc limit $postjson[start], $postjson[limit]");
  }


  $res = $query->fetchAll(PDO::FETCH_ASSOC);

 for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }
    
   $dados[] = array(
     'pauta_id' => $res[$i]['pauta_id'],
     'assunto' => $res[$i]['assunto'],
     'conteudo' => $res[$i]['conteudo'],
     'status' => $res[$i]['status'],
     'pautas_sindico_id' => $res[$i]['pautas_sindico_id']

   );

  }

      if(count($res) > 0){
              $result = json_encode(array('success'=>true, 'result'=>$dados));

          }else{
              $result = json_encode(array('success'=>false, 'result'=>'0'));

          }
          echo $result;

}


/*Listar pautas resultados*/ 
    
else if($postjson['requisicao'] == 'listarresultadospaut'){

  if($postjson['assunto'] == ''){
      $query = $pdo->query("SELECT * from pautas where status LIKE 'Resultado' order by pauta_id desc limit $postjson[start], $postjson[limit]");
  }else{
    $busca = $postjson['assunto'] . '%';
    $query = $pdo->query("SELECT * from pautas where assunto LIKE '$busca' and status LIKE 'Resultado' order by pauta_id desc limit $postjson[start], $postjson[limit]");
  }


  $res = $query->fetchAll(PDO::FETCH_ASSOC);

 for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }
    
   $dados[] = array(
     'pauta_id' => $res[$i]['pauta_id'],
     'assunto' => $res[$i]['assunto'],
     'conteudo' => $res[$i]['conteudo'],
     'status' => $res[$i]['status'],
     'pautas_sindico_id' => $res[$i]['pautas_sindico_id']

   );

  }

      if(count($res) > 0){
              $result = json_encode(array('success'=>true, 'result'=>$dados));

          }else{
              $result = json_encode(array('success'=>false, 'result'=>'0'));

          }
          echo $result;

}






/*Listar Comunicados abertas*/ 
    
else if($postjson['requisicao'] == 'listardisponivelcomunicado'){

  if($postjson['assunto'] == ''){
      $query = $pdo->query("SELECT * from comunicados where status LIKE 'Disponível' order by comunicado_id desc limit $postjson[start], $postjson[limit]");
  }else{
    $busca = $postjson['assunto'] . '%';
    $query = $pdo->query("SELECT * from comunicados where assunto LIKE '$busca' and status LIKE 'Disponível' order by comunicado_id desc limit $postjson[start], $postjson[limit]");
  }


  $res = $query->fetchAll(PDO::FETCH_ASSOC);

 for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }
    
   $dados[] = array(
     'comunicado_id' => $res[$i]['comunicado_id'],
     'assunto' => $res[$i]['assunto'],
     'conteudo' => $res[$i]['conteudo'],
     'status' => $res[$i]['status'],
     'comunicados_sindico_id' => $res[$i]['comunicados_sindico_id'],
     'cont_sinalizacoes' => $res[$i]['cont_sinalizacoes'],
     'data_enviado' => $res[$i]['data_enviado'],
     'hora_enviado' => $res[$i]['hora_enviado']
   );

  }

      if(count($res) > 0){
              $result = json_encode(array('success'=>true, 'result'=>$dados));

          }else{
              $result = json_encode(array('success'=>false, 'result'=>'0'));

          }
          echo $result;

}


/*Listar Comunicados fechados*/ 
    
else if($postjson['requisicao'] == 'listarfechadoscomunicados'){

  if($postjson['assunto'] == ''){
      $query = $pdo->query("SELECT * from comunicados where status LIKE 'Encerrado' order by comunicado_id desc limit $postjson[start], $postjson[limit]");
  }else{
    $busca = $postjson['assunto'] . '%';
    $query = $pdo->query("SELECT * from comunicados where assunto LIKE '$busca' and status LIKE 'Encerrado' order by comunicado_id desc limit $postjson[start], $postjson[limit]");
  }


  $res = $query->fetchAll(PDO::FETCH_ASSOC);

 for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }
    
   $dados[] = array(
     'comunicado_id' => $res[$i]['comunicado_id'],
     'assunto' => $res[$i]['assunto'],
     'conteudo' => $res[$i]['conteudo'],
     'status' => $res[$i]['status'],
     'comunicados_sindico_id' => $res[$i]['comunicados_sindico_id'],
     'cont_sinalizacoes' => $res[$i]['cont_sinalizacoes'],
     'data_enviado' => $res[$i]['data_enviado'],
     'hora_enviado' => $res[$i]['hora_enviado']

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