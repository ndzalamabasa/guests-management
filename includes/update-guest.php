<?php
$errors = array('success'=>'','fullname' => '', 'stmt'=>'');

$data = array('fullname'=>$_POST["fullname"], 'country'=>$_POST["country"], 'chartedFlight'=>$_POST["flight"],'commercialFlight'=>$_POST["commercial-flight"], 'arrival'=>$_POST["arrival"],'departure'=>$_POST["departure"],'accomodation'=>$_POST["accomodation"],'transport'=>$_POST["transport"], 'status'=>$_POST["status"],'passport'=>$_POST["passport"],'covid'=>$_POST["covid"],'miscellaneous'=>$_POST["miscellaneous"],'affiliation'=>$_POST["affiliation"],'group'=>$_POST["group"],'invitedBy'=>$_POST["invited-by"]);


foreach($data as $key => $value) {
  if($data[$key] == '') {
    $data[$key] = NULL;
  }
}

  require_once('database_inc.php');

    
    $sql = "UPDATE guests SET fullname = ?, countryID = ?, chartedFlight = ?, flightID = ?, arrivalDate = ?, departureDate = ?, accomodation = ?, transport = ?, status = ?, passport = ?, covid = ?, miscellaneous = ?, affiliation = ?, groupID = ?, inviterID = ? WHERE guestID = '$_GET[g]';";
    
    // Create a prepared statement
    $stmt = $con -> stmt_init();
    
    /* check connection */
// if ( mysqli_connect_errno() ) {
//   printf("Connect failed: %s\n", mysqli_connect_error());
// } 
    // // Display an error if preparing statemnt failed
    if(!$stmt -> prepare($sql)){
      header("location: ../now.html?error=stmtfailed"); 
      exit();
    }

    // Bind statement to variables
    $stmt -> bind_param("sssssssssssssss", $data['fullname'], $data['country'], $data['chartedFlight'], $data['commercialFlight'], $data['arrival'], $data['departure'], $data['accomodation'], $data['transport'], $data['status'], $data['passport'], $data['covid'], $data['miscellaneous'], $data['affiliation'], $data['group'], $data['invitedBy']);
    
    // Execute statement
    $stmt -> execute();
    
    // Close statement
    $stmt -> close();

  $errors['success'] = 'Details updated successfully';
  echo json_encode($errors);
?>