<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <title>Guest Management</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <h1 class="page-heading">Guests</h1>
    <main>
      <select name="sort" id="sort">
        <option value="all">All</option>
        <option value="USA">USA</option>
        <option value="RSA">RSA</option>
        <option value="Senegal">Senegal</option>
        <option value="Kenya">Kenya</option>
        <option value="Namibia">Namibia</option>
        <option value="DRC">DRC</option>
        <option value="Ghana">Ghana</option>
        <option value="UK">UK</option>
        <option value="UAE">UAE</option>
        <option value="Scotland">Scotland</option>
        <option value="Livingstone">Livingstone</option>
        <option value="Zambia">Zambia</option>
        <option value="Zimbabwe">Zimbabwe</option>
        <option value="Bulgaria">Bulgaria</option>
        <option value="Nigeria">Nigeria</option>
        <option value="Italy">Italy</option>

      </select>

      <button id="apply-sort">Apply</button>
    <?php
      require_once('./includes/database_inc.php');

      ?>
      <p id="results">
        <?php
        $sql = "SELECT guests.fullname, countries.countryName, guests.status, guests.chartedFlight, guests.arrivalDate, guests.departureDate, guests.affiliation, flights.commercialFlight, guests.accomodation, guests.transport, guests.passport, guests.covid, guests.miscellaneous
        FROM guests
        LEFT OUTER JOIN countries
        ON guests.countryID = countries.countryID
        LEFT OUTER JOIN flights
        ON guests.flightID = flights.flightID;";
        ?>
      </p>
      
    <?php
      $result = $con -> query($sql);

      if($result == TRUE){
        $count = $result -> num_rows;

        if($count > 0){
          $guestID = 1;

          while($row = $result -> fetch_assoc()){
            $fullname = $row['fullname'];
            $countryName = $row['countryName'];
            $status = $row['status'];
            $chartedFlight = $row['chartedFlight'];
            $arrivalDate = $row['arrivalDate'];
            $departureDate = $row['departureDate'];
            $affiliation = $row['affiliation'];
            $commercialFlight = $row['commercialFlight'];
            $accomodation = $row['accomodation'];
            $transport = $row['transport'];
            $passport = $row['passport'];
            $covid = $row['covid'];
            $miscellaneous = $row['miscellaneous'];

    ?>
      <div class="guest guest-info-hidden container">
        <header class="flex-row guest-header">
          <h2><?php echo $fullname;?></h2>
          <p>
            <span><i class="fa-solid fa-circle fa-2xs"></i></span>
            <span class="country"><?php echo $countryName;?></span>
          </p>
          <i class="fa-solid fa-circle-chevron-down fa-lg"></i>
        </header>
        <div class="guest-info">
          <div class="intro-info">
            <div class="status-flight flex-row">
              <p>Status: <strong><?php echo $status;?></strong></p>
              <p>Charted Flight: <strong><?php echo strtoupper($chartedFlight);?></strong></p>
            </div>
            <div class="dates flex-row">
              <p>Arrival: <strong><?php echo $arrivalDate;?></strong></p>
              <p>Departure: <strong><?php echo $departureDate;?></strong></p>
            </div>
            <p class="text-center affiliation">Affiliation: <strong><?php echo $affiliation;?></strong></p>
          </div>
          <div class="more-info">
            <p>Commercial Flight: <strong><?php echo strtoupper($commercialFlight);?></strong></p>
            <p>Accomodation: <strong><?php echo strtoupper($accomodation);?></strong></p>
            <p>Transport: <strong><?php echo strtoupper($transport);?></strong></p>
            <p>Passport: <strong><?php echo strtoupper($passport);?></strong></p>
            <p>Covid Test/Vaccination: <strong><?php echo strtoupper($covid);?></strong></p>
            <p>Miscellaneous: <strong><?php echo strtoupper($miscellaneous);?></strong></p>
          </div>
        </div>
      </div>
      <?php
        $guestID++;
        }
      }
    }
  ?>
    </main>

    <script src="/scripts/guest-info.js"></script>
    <script src="./scripts/filter.js"></script>
  </body>
</html>