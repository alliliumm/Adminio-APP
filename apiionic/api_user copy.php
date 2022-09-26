<?php

include_once('conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);



/*Consultar condomino para votar nas pautas e sinalizar leitura*/
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




/*Inserir sinalização do comunicado*/

else if($postjson['requisicao'] == 'sinalizacao'){

  if($postjson['sinal'] == 'li'){

    $query = $pdo->prepare("UPDATE comunicados SET cont_sinalizacoes = cont_sinalizacoes + 1 where comunicado_id = '$postjson[comunicado_id]'");
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





















        

?>

