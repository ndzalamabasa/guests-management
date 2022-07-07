<?php
  $errors = array('success'=>'','fullname' => '', 'password'=> '', 'stmt'=>'');

  $data = array('fullname'=>$_POST["fullname"], 'email'=>$_POST["email"], 'password'=>$_POST["password"], 'confirm-password'=>$_POST["confirm-password"]);

  require_once('database_inc.php');

  function addUser($con, $data) {

    $sql = "INSERT INTO users (fullname,email,password) VALUES (?,?,?)";
    
    // Create a prepared statement
    $stmt = $con -> stmt_init();
    
    // Display an error if preparing statemnt failed
    if(!$stmt -> prepare($sql)){
      header("location: sign-up.php?error=stmtfailed"); 
      exit();
    }
    
    $hashedPassword = password_hash($data['password'], PASSWORD_DEFAULT);
    $stmt -> bind_param("sss", $data['fullname'], $data['email'], $hashedPassword);
    
    // Execute statement
    $stmt -> execute();
    
    // Close statement
    $stmt -> close();
  }

  if($data['password'] != $data['confirm-password']) {
    $errors['password'] = 'Passwords do not match';
  }

  else if(!empty($data['fullname']) && !empty($data['email']) && !empty($data['password']) && !empty($data['confirm-password'])) {
    addUser($con, $data);
    $errors['success'] = 'Successfully Signed Up';
  }
  
  echo json_encode($errors);
?>