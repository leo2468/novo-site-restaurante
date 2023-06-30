<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>recebedados</title>
</head>
<body>
    
<?php

$conexao = mysqli_connect("localhost", "root", "", "celke");

//Checar  conexao



if(!$conexao){
    echo "nao conectado";
}

echo "conectado ao banco>>>>>";

//recuperar e verificar ser o CPF foi já foi cadastrado

$cpf = $_POST['cpf'];
$cpf = mysqli_real_escape_string($conexao, $cpf);

$sql = "SELECT  cpf FROM celke.outro WHERE cpf = '$cpf'";
$retorno = mysqli_query($conexao, $sql);


if(mysqli_num_rows($retorno)>0){
echo "CPF ja cadastrado! <br>";
echo "<a href ='cadastro.html'>VOLTAR</a>";

}else {

$nome = $_POST['nome'];    
$cpf = $_POST['cpf'];   
$email = $_POST['email'];  
$senha = $_POST['senha'];   

$sql = "INSERT INTO celke.outro(nome, cpf, email, senha) values ('$nome', '$cpf', '$email', '$senha')";
$resulltado = mysqli_query($conexao, $sql);
echo "usuario cadastrado com sucesso <br>";
echo "<a href ='cadastro.html'>VOLTAR</a>";


}
 
?>

</body>
</html>