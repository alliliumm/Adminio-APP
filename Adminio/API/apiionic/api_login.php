<?php

include_once('conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

/*Login*/ 

if($postjson['requisicao'] == 'login'){
         
    if($query = $pdo->query("SELECT * from sindicos where email_sin = '$postjson[email]' and senha_sin = '$postjson[senha]'")){
        $res = $query->fetchAll(PDO::FETCH_ASSOC);
      
        for ($i=0; $i < count($res); $i++) { 
            foreach ($res[$i] as $key => $value) {
            }
           $dados = array(
            'sindico_id' => $res[$i]['sindico_id'],
            'nome' => $res[$i]['nome'],
            'email_sin' => $res[$i]['email_sin'],
            'senha_sin' => $res[$i]['senha_sin']
            );
       }  
      
            if(count($res) > 0){
                    $result = json_encode(array('success'=>true, 'result'=>$dados, 'pageadm'=>true));
                    echo $result;
      
            }else if($query = $pdo->query("SELECT * from condominos where email_cond = '$postjson[email]' and senha_cond = '$postjson[senha]'")){
                    $res = $query->fetchAll(PDO::FETCH_ASSOC);
                
                   for ($i=0; $i < count($res); $i++) { 
                      foreach ($res[$i] as $key => $value) {
                      }
                     $dados = array(
                        'condomino_id' => $res[$i]['condomino_id'],
                        'condnome' => $res[$i]['condnome'],
                        'email_cond' => $res[$i]['email_cond'],
                        'senha_cond' => $res[$i]['senha_cond']
                      
                        
                     );
                
                    }
                
                        if(count($res) > 0){
                                $result = json_encode(array('success'=>true, 'result'=>$dados, 'pagemor'=>true));
                                echo $result;
                        }
                        
                
            }else{
                $result = json_encode(array('success'=>false, 'msg'=>'Dados Incorretos!'));
                echo "Dados inválidos";
            }
            
                
                
                  
    }

}



?>

