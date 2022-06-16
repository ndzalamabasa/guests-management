<?php
// Variables to make inputs persist in the form
// $fullname = $country = $status = $chartedFlight = $arrival = $departure = $affiliation = $commercialFlight = $accomodation = $transport = $passport = $covid = $miscellaneous = $invitedBy = $group = '';

// Array to errors error messages
$errors = array('coffee' => '', 'quantity'=>'', 'sugar'=>'', 'milk'=>'', 'office'=>'', 'success'=>'', 'sign_in'=>'', 'stmt'=>'');
// $errors = array('fullname' => '', 'stmt'=>'');
$data = array('fullname'=>$_POST["fullname"], 'country'=>$_POST["country"], 'chartedFlight'=>$_POST["flight"],'commercialFlight'=>$_POST["commercial-flight"], 'arrival'=>$_POST["arrival"],'departure'=>$_POST["departure"],'accomodation'=>$_POST["accomodation"],'transport'=>$_POST["transport"], 'status'=>$_POST["status"],'passport'=>$_POST["passport"],'covid'=>$_POST["covid"],'miscellaneous'=>$_POST["miscellaneous"],'affiliation'=>$_POST["affiliation"],'group'=>$_POST["group"],'invitedBy'=>$_POST["invited-by"]);


foreach($data as $key => $value) {
  if($data[$key] == '') {
    $data[$key] = NULL;
  }
}
// $data = array('fullname'=>$_POST["group_name"]);
// Check if the submit button have been clicked and process the form  $fullname = ($_POST["fullname"]);
  // $fullname = $_POST["fullname"];
  // $country = $_POST["country"];
  // $status = $_POST["status"];
  // $chartedFlight = $_POST["flight"];
  // $arrival = $_POST["arrival"];
  // $departure = $_POST["departure"];
  // $affiliation = $_POST["affiliation"];
  // $commercialFlight = $_POST["commercial-flight"];
  // $accomodation = $_POST["accomodation"];
  // $transport = $_POST["transport"];
  // $passport = $_POST["passport"];
  // $covid = $_POST["covid"];
  // $miscellaneous = $_POST["miscellaneous"];
  // $invitedBy = $_POST["invited-by"];
  // $group = $_POST["group"];

  // Connect to the database
  require_once('database_inc.php');

    // SQL statement to get data from staff members table from the database
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

  // Error to display if fullname is empty
  // if(empty($fullname)){
  //   $errors['fullname'] = 'Fullname is required';
  // }
  // else{
  //   addGuest($con, $fullname, $country, $status, $chartedFlight, $arrival, $departure, $affiliation, $commercialFlight, $accomodation, $transport, $passport, $covid, $miscellaneous, $invitedBy, $group);

  //   $fullname = $country = $status = $chartedFlight = $arrival = $departure = $affiliation = $commercialFlight = $accomodation = $transport = $passport = $covid = $miscellaneous = $invitedBy = $group = '';
  // }
  $errors['success'] = 'Your order was successful!';
  echo json_encode($errors);
?>