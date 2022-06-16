<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/style.css">
  <title>Add Guest</title>
</head>
<body>

  <main>
      <h1 class="page-heading">Add Guest</h1>
      <!-- Order Form -->
      <div class="container">
        <form id="group_form">
          <div class="messages">
            <p class="success" id ="message"></p>
            <p class="error" id ="err_message"></p>
          </div>

          <ul class="form-content add-guest">
            <!-- Fullname -->
            <li>
              <label for="fullname">Fullname</label>
              <input type="text" name="fullname" id="fullname" value="<?php echo htmlspecialchars($fullname)?>">
              <span><p><?php echo $errors['fullname'];?></p></span>
            </li>
            <!-- Country -->
            <li>
              <label for="country">Country</label>
              <select name="country" id="country">
                <option value="">Select Country</option>
                <option value="1">USA</option>
                <option value="2">Cape Town, RSA</option>
                <option value="3">Durban, RSA</option>
                <option value="4">RSA</option>
                <option value="5">Senegal</option>
                <option value="6">Kenya</option>
                <option value="7">Namibia</option>
                <option value="8">DRC</option>
                <option value="9">Ghana</option>
                <option value="10">UK</option>
                <option value="11">Dubai, UAE</option>
                <option value="12">Scotland</option>
                <option value="13">Choma, Zambia</option>
                <option value="14">Kabwe, Zambia</option>
                <option value="15">Ndola, Zambia</option>
                <option value="16">Petauke, Zambia</option>
                <option value="17">Livingstone</option>
                <option value="18">Lusaka, Zambia</option>
                <option value="19">Zambia</option>
                <option value="20">Zimbabwe</option>
                <option value="21">Bulgaria</option>
                <option value="22">Nigeria</option>
                <option value="23">Italy</option>
              </select>
            </li>
             <!-- Charted Flight -->
            <li>
              <label for="charted-flight">Charted Flight</label>
              <div class="charted-flight flex-row">
                <span class="check-flight">
                  <input type="radio" name="flight" id="yes" value="yes">Yes
                </span>    
                <span class="check-flight">
                  <input type="radio" name="flight" id="no" value="no">No
                </span>
              </div>
            </li>
            <!-- Commercial Flight -->
            <li>
              <label for="commercial-flight">Commercial Flight</label>
              <select name="commercial-flight" id="commercial-flight">
                <option value="">Select Flight</option>
                <option value="1">USA-RSA-RTN</option>
                <option value="2">SENEGAL-RSA-RTN</option>
                <option value="3">KENYA-RSA-RTN</option>
                <option value="4">GHANA-RSA-RTN</option>
                <option value="5">DUBAI-RSA-RTN</option>
                <option value="6">UK-LUN-RTN</option>
                <option value="7">USA-LUN-RTN</option>
                <option value="8">SCOTLAND-LUN-RTN</option>
                <option value="9">LVI-JNB-OW</option>
                <option value="10">JNB-LVI-JNB-RTN</option>
                <option value="11">JNB-LVI-LUN-JNB</option>
                <option value="12">NYC-JNB-LVI-NYC</option>
                <option value="13">NYC-LVI-NYC</option>
                <option value="14">LUN-JNB-OW</option>
                <option value="15">NYC-LUN-NYC</option>
                <option value="16">NYC-DBX-JNB-NYC</option>
              </select>
            </li>
            <!-- Arrival -->
            <li>
              <label for="arrival">Arrival Date</label>
              <input type="date" name="arrival" id="arrival" value="<?php echo htmlspecialchars($arrival)?>">
            </li>
            <!-- Departure -->
            <li>
              <label for="departure">Departure Date</label>
              <input type="date" name="departure" id="departure" value="<?php echo htmlspecialchars($departure)?>">
            </li>
            <!-- Accomodation -->
            <li>
              <label for="accomodation">Accomodation</label>
              <select name="accomodation" id="accomodation">
                <option value="">Accomodation Arrangements</option>
                <option value="Yes">YES</option>
                <option value="Yes-Sharing">YES-Sharing</option>
                <option value="No">NO</option>
              </select>
            </li>
            <!-- Transport -->
            <li>
              <label for="transport">Transportation</label>
              <select name="transport" id="transport">
                <option value="">Transport Arrangements</option>
                <option value="Yes">YES</option>
                <option value="By Road">By Road</option>
                <option value="NO">NO</option>
              </select>
            </li>
            <!-- Status -->
            <li>
              <label for="status">Status</label>
              <select name="status" id="status">
                <option value="">Select Status</option>
                <option value="VIP">VIP</option>
                <option value="Normal">Normal</option>
              </select>
            </li>
            <!-- Passport -->
            <li>
              <label for="passport">Passport</label>
              <div class="passport flex-row">
                <span class="check-passport">
                  <input type="radio" name="passport" id="yes" value="Yes">Yes
                </span>
                <span class="check-passport">
                  <input type="radio" name="passport" id="no" value="No">No
                </span>
              </div>
            </li>
            <!-- Covid -->
            <li>
              <label for="covid">Covid Results/Vaccination</label>
              <div class="covid flex-row">
                <span class="check-covid">
                  <input type="radio" name="covid" id="yes" value="Yes">Yes
                </span>
                <span class="check-covid">
                  <input type="radio" name="covid" id="no" value="No">No
                </span>
              </div>
            </li>
            <!-- Miscellaneous -->
            <li>
              <label for="miscellaneous">Miscellaneous</label>
              <input type="text" name="miscellaneous" id="miscellaneous" value="<?php echo htmlspecialchars($miscellaneous)?>">
            </li>
            <!-- Affiliation -->
            <li>
              <label for="affiliation">Affiliation</label>
              <input type="text" name="affiliation" id="affiliation" value="<?php echo htmlspecialchars($affiliation)?>">
            </li>
            <!-- Invited by -->
            <li>
              <label for="invited-by">Invited By</label>
              <select name="invited-by" id="invited-by">
                <option value="">Select Inviter</option>
                <option value="1">Mrs T.Ndambo</option>
                <option value="2">Mrs Dos antos</option>
                <option value="3">Matildah Pikiti</option>
                <option value="4">Linda Mtonga</option>
                <option value="5">Ms R.Ndambo</option>
                <option value="6">Mrs A.Masebo</option>
              </select>
            </li>
            <!-- Group -->
            <li>
              <label for="group">Group</label>
              <select name="group" id="group">
                <option value="">Select Group</option>
                <option value="1">AUC Namibia</option>
                <option value="2">AUC Durban</option>
                <option value="3">AUC Cape Town</option>
                <option value="4">Events Manager/Comm Members</option>
                <option value="5">Directors</option>
                <option value="6">Chairman's Office</option>
                <option value="7">AU Commercial Investments</option>
                <option value="8">AU Food Security</option>
                <option value="9">AU Aviation</option>
                <option value="10">AU Health</option>
                <option value="11">AU Technogies</option>
                <option value="12">AU Admin</option>
                <option value="13">AU Commodity House</option>
                <option value="14">AU Travel</option>
                <option value="15">QPay</option>
                <option value="16">AU Consultants</option>
                <option value="17">RSA International Guests</option>
              </select>
            </li>
          </ul>  

          <input class="dark" id="add_group" type="submit" value="Add Guest">
        </form>
        <button id="adding-group">Adding Group...</button>
        <a href="orders.php" class="dark" id="adding-complete">Go To My Groups</a>
      </div>
  </main>
  <script src="../scripts/add-guest.js"></script>
</body>
</html>