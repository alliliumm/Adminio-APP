<?php

include_once('conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);


/*Listar usuário > Administrador*/ 
    
if($postjson['requisicao'] == 'listar'){

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



/*Criar mensagens pop*/ 
else if($postjson['requisicao'] == 'newmsg'){

    $query = $pdo->prepare("INSERT INTO historico SET mensagem = :mensagem");
          
        $query->bindValue(":mensagem", $postjson['mensagem']);
        $query->execute();
          
        $id = $pdo->lastInsertId();
               
          
        if($query){
        $result = json_encode(array('success'=>true, 'id_msg'=>$id));
          
        }else{
        $result = json_encode(array('success'=>false));
            
        }
        echo $result;
        }
        

/*Criar Pautas*/ 
/*
else if($postjson['requisicao'] == 'newpaut'){

    $query = $pdo->prepare("INSERT INTO pautas SET assunto = :assunto, conteudo =:conteudo, cont_sim = 0, cont_nao = 0");
          
        $query->bindValue(":assunto", $postjson['assunto']);
        $query->bindValue(":conteudo", $postjson['conteudo']);
        $query->execute();
          
        $id = $pdo->lastInsertId();
               
          
        if($query){
        $result = json_encode(array('success'=>true, 'pauta_id'=>$id));
          
        }else{
        $result = json_encode(array('success'=>false));
            
        }
        echo $result;
        }
*/

else if($postjson['requisicao'] == 'newpaut'){

  if($query = $pdo->query("SELECT * from sindicos where sindico_id = '$postjson[pautas_sindico_id]' and senha_sin = '$postjson[senha]'")){
    $res = $query->fetchAll(PDO::FETCH_ASSOC);
  
    for ($i=0; $i < count($res); $i++) { 
        foreach ($res[$i] as $key => $value) {
        }
       $dados = array(
        'sindico_id' => $res[$i]['sindico_id'],
        'senha_sin' => $res[$i]['senha_sin']
        );
   }  
  
        if(count($res) > 0){
                $result = json_encode(array('success'=>true, 'result'=>$dados, 'pageadm'=>true));
                echo $result;
  
        }else{
          $result = json_encode(array('success'=>false, 'msg'=>'Dados Incorretos!'));
          echo "Dados inválidos";
        }

    $query = $pdo->prepare("INSERT INTO pautas SET assunto = :assunto, conteudo =:conteudo, status = :status, pautas_sindico_id = :pautas_sindico_id");
        
      $query->bindValue(":assunto", $postjson['assunto']);
      $query->bindValue(":conteudo", $postjson['conteudo']);
      $query->bindValue(":status", $postjson['status']);
      $query->bindValue(":pautas_sindico_id", $postjson['pautas_sindico_id']);
      $query->execute();
        
      $pautid = $pdo->lastInsertId();
             
        
      if($query){
      $result = json_encode(array('success'=>true, 'pauta_id'=>$pautid));
        
      }else{
      $result = json_encode(array('success'=>false));
          
      }
      echo $result;
      }
}


/*Excluir usuário . Administrador*/ 

    else if($postjson['requisicao'] == 'excluir'){
    
            
        $query = $pdo->query("DELETE FROM morador where morador_id = '$postjson[morador_id]'");
      
                 
      
          if($query){
            $result = json_encode(array('success'=>true));
      
            }else{
            $result = json_encode(array('success'=>false));
        
            }
         echo $result;
    
        }


/*Editar usuário > Administrador*/ 

    else if($postjson['requisicao'] == 'editar'){
    
        $senha_cript = md5($postjson['senha']);
      
        $query = $pdo->prepare("UPDATE morador SET nome = :nome, usuario = :usuario, senha = :senha, senha_crip = :senha_crip, apartamento = :apartamento, bloco =:bloco where morador_id = :morador_id");
        
            $query->bindValue(":nome", $postjson['nome']);
            $query->bindValue(":usuario", $postjson['usuario']);
            $query->bindValue(":senha", $postjson['senha']);
            $query->bindValue(":senha_crip", $senha_cript );
            $query->bindValue(":apartamento", $postjson['apartamento']);
            $query->bindValue(":bloco", $postjson['bloco']);
            $query->bindValue(":morador_id", $postjson['morador_id']);
            $query->execute();
        
            $id = $pdo->lastInsertId();
             
        
          if($query){
            $result = json_encode(array('success'=>true, 'morador_id'=>$id));
        
            }else{
            $result = json_encode(array('success'=>false));
          
            }
          echo $result;
      
        }


/*Editar administrador > Administrador*/ 

    else if($postjson['requisicao'] == 'editarsin'){
    
        $senha_cript = md5($postjson['senha']);
      
        $query = $pdo->prepare("UPDATE sindico SET nome = :nome, usuario = :usuario, senha = :senha, senha_crip = :senha_crip, administradora = :administradora, condominio =:condominio where id = :id");
        
            $query->bindValue(":nome", $postjson['nome']);
            $query->bindValue(":usuario", $postjson['usuario']);
            $query->bindValue(":senha", $postjson['senha']);
            $query->bindValue(":senha_crip", $senha_cript );
            $query->bindValue(":administradora", $postjson['administradora']);
            $query->bindValue(":condominio", $postjson['condominio']);
            $query->bindValue(":id", $postjson['id']);
            $query->execute();
        
            $id = $pdo->lastInsertId();
             
        
          if($query){
            $result = json_encode(array('success'=>true, 'id'=>$id));
        
            }else{
            $result = json_encode(array('success'=>false));
          
            }
          echo $result;
      
        }


/*Listar pautas pro resultado > Usuário*/ 
    
if($postjson['requisicao'] == 'listaresult'){

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
       'conteudo' => $res[$i]['conteudo'],
       'cont_sim' => $res[$i]['cont_sim'],
       'cont_nao' => $res[$i]['cont_nao']
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