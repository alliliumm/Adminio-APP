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




/*Apresentar Votos*/ 
    
else if($postjson['requisicao'] == 'apresentarvotos'){
    
  $query = $pdo->query("SELECT cont_votosim, cont_votonao from votacao where votacao_pauta_id = '$postjson[pauta_id]'"); 

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
  foreach ($res[$i] as $key => $value) {
  }
  
 $dados[] = array(
   'cont_votosim' => $res[$i]['cont_votosim'],
   'cont_votonao' => $res[$i]['cont_votonao']

 );

}

    if(count($res) > 0){
            $result = json_encode(array('success'=>true, 'result'=>$dados));

        }else{
            $result = json_encode(array('success'=>false, 'result'=>'0'));

        }
        echo $result;

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
      $query = $pdo->query("SELECT pauta_id, assunto, conteudo, status, pautas_sindico_id,cont_votosim, cont_votonao FROM pautas INNER JOIN votacao ON pautas.pauta_id = votacao.votacao_pauta_id where status LIKE 'Resultado' order by pauta_id desc limit $postjson[start], $postjson[limit]");
  }else{
    $busca = $postjson['assunto'] . '%';
    $query = $pdo->query("SELECT pauta_id, assunto, conteudo, status, pautas_sindico_id,cont_votosim, cont_votonao FROM pautas INNER JOIN votacao ON pautas.pauta_id = votacao.votacao_pauta_id where assunto LIKE '$busca' and status LIKE 'Resultado' order by pauta_id desc limit $postjson[start], $postjson[limit]");
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
     'pautas_sindico_id' => $res[$i]['pautas_sindico_id'],
     'cont_votosim' => $res[$i]['cont_votosim'],
     'cont_votonao' => $res[$i]['cont_votonao']
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




/*Listar usuário > Sindico*/ 
    
else if($postjson['requisicao'] == 'listarusersin'){

  if($postjson['nome'] == ''){
      $query = $pdo->query("SELECT * from sindicos order by sindico_id desc limit $postjson[start], $postjson[limit]");
  }else{
    $busca = $postjson['nome'] . '%';
    $query = $pdo->query("SELECT * from sindicos where nome LIKE '$busca' order by sindico_id desc limit $postjson[start], $postjson[limit]");
  }


  $res = $query->fetchAll(PDO::FETCH_ASSOC);

 for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }
   $dados[] = array(
    'sindico_id' => $res[$i]['sindico_id'],
    'nome' => $res[$i]['nome'],
    'email_sin' => $res[$i]['email_sin'],
    'senha_sin' => $res[$i]['senha_sin'],
    'tipo_sindico' => $res[$i]['tipo_sindico'],
    'sindico_condominioo_id' => $res[$i]['sindico_condominioo_id']
          
      
   );

  }

      if(count($res) > 0){
              $result = json_encode(array('success'=>true, 'result'=>$dados));

          }else{
              $result = json_encode(array('success'=>false, 'result'=>'0'));

          }
          echo $result;

}


/*Listar usuário > Condômino*/ 
    
else if($postjson['requisicao'] == 'listarusercond'){

  if($postjson['condnome'] == ''){
      $query = $pdo->query("SELECT * from condominos order by condomino_id desc limit $postjson[start], $postjson[limit]");
  }else{
    $busca = $postjson['condnome'] . '%';
    $query = $pdo->query("SELECT * from condominos where condnome LIKE '$busca' order by condomino_id desc limit $postjson[start], $postjson[limit]");
  }


  $res = $query->fetchAll(PDO::FETCH_ASSOC);

 for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }
   $dados[] = array(
    'condomino_id' => $res[$i]['condomino_id'],
    'condnome' => $res[$i]['condnome'],
    'email_cond' => $res[$i]['email_cond'],
    'senha_cond' => $res[$i]['senha_cond'],
    'tipo_condomino' => $res[$i]['tipo_condomino'],
    'condominos_condominioo_id' => $res[$i]['condominos_condominioo_id'],
    'conjunto' => $res[$i]['conjunto'],
    'bloco' => $res[$i]['bloco'],
    'andar' => $res[$i]['andar'],
    'apartamento' => $res[$i]['apartamento']

          
      
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