<?php
  require_once('database_inc.php');

  $sql = "SELECT guests.fullname, countries.countryName, guests.status, guests.chartedFlight, guests.arrivalDate, guests.departureDate, guests.affiliation, flights.commercialFlight, guests.accomodation, guests.transport, guests.passport, guests.covid, guests.miscellaneous
  FROM guests
  LEFT OUTER JOIN countries
  ON guests.countryID = countries.countryID
  LEFT OUTER JOIN flights
  ON guests.flightID = flights.flightID;";
        
  $result = $con -> query($sql);

  $data = array();
  while($row = $result -> fetch_assoc()){
    $data[] = $row;
  }

  echo json_encode($data);
?>