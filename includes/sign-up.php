<?php
  $errors = array('success'=>'','fullname' => '', 'password'=> '', 'cpassword'=>'' , 'stmt'=>'','email'=>'', 'user'=>'');

  $data = array('fullname'=>$_POST["fullname"], 'email'=>$_POST["email"], 'password'=>$_POST["password"], 'confirm-password'=>$_POST["confirm-password"]);

  require_once('database_inc.php');

  function userExist($con, $email){
    // SQL statement to get data from staff members table from the database
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

  function addUser($con, $data) {

    $sql = "INSERT INTO users (fullname,email,password) VALUES (?,?,?)";
    
    $stmt = $con -> stmt_init();
    
    if(!$stmt -> prepare($sql)){
      header("location: sign-up.php?error=stmtfailed"); 
      exit();
    }
    
    $hashedPassword = password_hash($data['password'], PASSWORD_DEFAULT);
    $stmt -> bind_param("sss", $data['fullname'], $data['email'], $hashedPassword);
    
    $stmt -> execute();
    
    $stmt -> close();
  }

  if(empty($data['fullname']) ) {
    $errors['fullname'] = 'required';
  }

  elseif(!empty($data['fullname']) && (!preg_match('/^[a-zA-Z ]+$/', $data['fullname']))) {
    $errors['fullname'] = 'name should be only letters';
  }

  if(empty($data['email']) ) {
    $errors['email'] = 'required';
  }

  elseif(!empty($data['email'])) {
    if(!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
      $errors['email'] = 'invalid email';
   } elseif(!preg_match('/(gmail.com)$/', $data['email'])) {
      $errors['email'] = 'email should be gmail';
    }
  }

  if(empty($data['password']) ) {
    $errors['password'] = 'required';
  }

  elseif(!empty($data['password'])){
    if(strlen($data['password']) < 8){
      $errors['password'] = 'password should be at least 8 characters';
    }
      elseif(!preg_match('/[A-Z]/', $data['password'])){
        $errors['password'] = 'password should contain at least one uppercase letter';
      }
      elseif(!preg_match('/[a-z]/', $data['password'])){
        $errors['password'] = 'password should contain at least one lowercase letter';
      }
      elseif(!preg_match('/[0-9]/', $data['password'])){
        $errors['password'] = 'password should contain at least one number';
      }
      elseif(!preg_match('/[^a-zA-Z0-9]/', $data['password'])){
        $errors['password'] = 'password should contain at least one special character';
      }
  }

  if(empty($data['confirm-password']) ) {
    $errors['cpassword'] = 'required';
  }

  if($data['password'] != $data['confirm-password']) {
    $errors['cpassword'] = 'passwords do not match';
  }

  elseif(userExist($con, $data['email'])){
    $errors['user'] = 'user already exists';
  }

  elseif((preg_match('/^[a-zA-Z ]+$/', $data['fullname'])) && !userExist($con, $data['email']) && filter_var($data['email'], FILTER_VALIDATE_EMAIL) && !(strlen($data['password']) < 8) && preg_match('/[A-Z]/', $data['password']) && preg_match('/[a-z]/', $data['password']) && preg_match('/[0-9]/', $data['password']) && preg_match('/[^a-zA-Z0-9]/', $data['password']) && ($data['password'] == $data['confirm-password'])) {

    addUser($con, $data);
    $errors['success'] = 'Successfully Signed Up';

    session_start();
    $_SESSION['user'] = $data['email'];

  }
  
  echo json_encode($errors);
?>