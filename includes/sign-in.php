<?php
$errors = array('success'=>'', 'password'=> '', 'email'=>'', 'user'=>'');

$data = array('email'=>$_POST["email"], 'password'=>$_POST["password"]);

require_once('database_inc.php');

function userExist($con, $email){
  $sql = "SELECT * FROM users WHERE email = ?;";
  
  $stmt = $con -> stmt_init();

  if(!$stmt -> prepare($sql)){
    $errors['stmt'] = 'stmtfailed';
  }

  $stmt -> bind_param("s", $email);

  $stmt -> execute();

  $resultData = $stmt -> get_result();

  if($row = $resultData -> fetch_assoc()){
    return $row; 
  } else{
    $result = false;
    return $result;
  }

  $stmt -> close();
}

$userExists = userExist($con, $data['email']);

$pwdHashed = $userExists['password'];
$checkPassword = password_verify($data['password'], $pwdHashed);


if(empty($data['email']) ) {
  $errors['email'] = 'required';
}
if(empty($data['password']) ) {
  $errors['password'] = 'required';
}

else if(!$userExists){
  $errors['user'] = 'User does not exist, please sign up';
}

else if(!$checkPassword){
  $errors['password'] = 'email or password is incorrect';
}

if($checkPassword){
  session_start();
  $_SESSION['user'] = $userExists['email'];
  
}

if(isset($_SESSION['user'])){
  $errors['success'] = 'success';
}
echo json_encode($errors);

?>