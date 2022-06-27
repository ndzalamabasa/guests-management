<?php
  require_once('database_inc.php');

  $sql = "SELECT guests.guestID, guests.fullname, countries.countryName, guests.status, guests.chartedFlight, guests.arrivalDate, guests.departureDate, guests.affiliation, flights.commercialFlight, guests.accomodation, guests.transport, guests.passport, guests.covid, guests.miscellaneous, groups.groupName
  FROM guests
  LEFT OUTER JOIN countries
  ON guests.countryID = countries.countryID
  LEFT OUTER JOIN flights
  ON guests.flightID = flights.flightID
  LEFT OUTER JOIN groups
  ON guests.groupID = groups.groupID;";
        
  $result = $con -> query($sql);

  $data = array();
  while($row = $result -> fetch_assoc()){
    $data[] = $row;
  }

  echo json_encode($data);
?>