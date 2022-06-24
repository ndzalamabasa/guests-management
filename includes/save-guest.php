<?php
$errors = array('success'=>'','fullname' => '', 'stmt'=>'');

$data = array('fullname'=>$_POST["fullname"], 'country'=>$_POST["country"], 'chartedFlight'=>$_POST["flight"],'commercialFlight'=>$_POST["commercial-flight"], 'arrival'=>$_POST["arrival"],'departure'=>$_POST["departure"],'accomodation'=>$_POST["accomodation"],'transport'=>$_POST["transport"], 'status'=>$_POST["status"],'passport'=>$_POST["passport"],'covid'=>$_POST["covid"],'miscellaneous'=>$_POST["miscellaneous"],'affiliation'=>$_POST["affiliation"],'group'=>$_POST["group"],'invitedBy'=>$_POST["invited-by"]);


foreach($data as $key => $value) {
  if($data[$key] == '') {
    $data[$key] = NULL;
  }
}

  require_once('database_inc.php');

    
    $sql = "INSERT INTO guests (fullname,countryID,chartedFlight,flightID,arrivalDate,departureDate,accomodation,transport,status,passport,covid,miscellaneous,affiliation,groupID,inviterID) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    
    // Create a prepared statement
    $stmt = $con -> stmt_init();
    
    // Display an error if preparing statemnt failed
    if(!$stmt -> prepare($sql)){
      header("location: add_guest.php?error=stmtfailed"); 
      exit();
    }
    
    // Bind statement to variables
    $stmt -> bind_param("sssssssssssssss", $data['fullname'], $data['country'], $data['chartedFlight'], $data['commercialFlight'], $data['arrival'], $data['departure'], $data['accomodation'], $data['transport'], $data['status'], $data['passport'], $data['covid'], $data['miscellaneous'], $data['affiliation'], $data['group'], $data['invitedBy']);
    
    // Execute statement
    $stmt -> execute();
    
    // Close statement
    $stmt -> close();

  $errors['success'] = 'Guest added successfully';
  echo json_encode($errors);
?>