<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MHT Pageant | Guests</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="/css/style.css" />
  </head>
  <body>
    <header>
      <nav class="container">
        <ul>
          <li class="logo">MHT Pageant</li>
          <?php 
            session_start();
          if(isset($_SESSION['user'])) {?>
          <li><button id="sign-out"><a href="/sign-out/">Sign Out</a></button></li>
          <?php } else {?>
          <li><button id="nav-sign-in"><a href="/">Sign In</a></button></li>
          <?php } ?>
        </ul>
      </nav>
    </header>

    <div class="main-content">
    <div class="container">
      <h1 class="page-heading">MHT Pageant Guests</h1>
    </div>
    <?php
    session_start();
    if(isset($_SESSION['user'])){
    ?>
    <div class="search-filter container">
      <input type="text" id="search" placeholder="Search By Name" />
      <div class="filter-button btns">
        <button id="toggle-sort" disabled>Sort</button>
        <button id="toggle-filter">Filter</button>
      </div>
    </div>
      <div class="filter filter-hidden">
        <div class="filter-results">
          <h2>Filter</h2>
          <ul class="results-filter">
            <li>
              <label for="country-filter">Country</label>
              <select name="country-filter" id="country-filter">
                <option value="all">All</option>
                <option value="--">None</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="DRC">DRC</option>
                <option value="Ghana">Ghana</option>
                <option value="Italy">Italy</option>
                <option value="Kenya">Kenya</option>
                <option value="Livingstone">Livingstone</option>
                <option value="Namibia">Namibia</option>
                <option value="Nigeria">Nigeria</option>
                <option value="RSA">RSA</option>
                <option value="Scotland">Scotland</option>
                <option value="Senegal">Senegal</option>
                <option value="UAE">UAE</option>
                <option value="UK">UK</option>
                <option value="USA">USA</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </li>
            <li>
              <label for="accomodation-filter">Accomodation</label>
              <select name="accomodation-filter" id="accomodation-filter">
                <option value="all">All</option>
                <option value="--">None</option>
                <option value="YES">YES</option>
                <option value="Yes-Sharing">Yes-Sharing</option>
                <option value="NO">NO</option>
              </select>
            </li>
            <li>
              <label for="transport-filter">Transportation</label>
              <select name="transport-filter" id="transport-filter">
                <option value="all">All</option>
                <option value="--">None</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
              </select>
            </li>
            <li>
              <label for="status-filter">Status</label>
              <select name="status-filter" id="status-filter">
                <option value="all">All</option>
                <option value="VIP">VIP</option>
                <option value="Normal">Normal</option>
                <option value="--">None</option>
              </select>
            </li>
            <li>
              <label for="commercial-filter">Commercial Flight</label>
              <select name="commercial-filter" id="commercial-filter">
                <option value="all">All</option>
                <option value="--">None</option>
                <option value="USA-RSA-RTN">USA-RSA-RTN</option>
                <option value="SENEGAL-RSA-RTN">SENEGAL-RSA-RTN</option>
                <option value="KENYA-RSA-RTN">KENYA-RSA-RTN</option>
                <option value="GHANA-RSA-RTN">GHANA-RSA-RTN</option>
                <option value="DUBAI-RSA-RTN">DUBAI-RSA-RTN</option>
                <option value="UK-LUN-RTN">UK-LUN-RTN</option>
                <option value="USA-LUN-RTN">USA-LUN-RTN</option>
                <option value="SCOTLAND-LUN-RTN">SCOTLAND-LUN-RTN</option>
                <option value="LVI-JNB-OW">LVI-JNB-OW</option>
                <option value="JNB-LVI-JNB-RTN">JNB-LVI-JNB-RTN</option>
                <option value="JNB-LVI-LUN-JNB">JNB-LVI-LUN-JNB</option>
                <option value="NYC-JNB-LVI-NYC">NYC-JNB-LVI-NYC</option>
                <option value="NYC-LVI-NYC">NYC-LVI-NYC</option>
                <option value="LUN-JNB-OW">LUN-JNB-OW</option>
                <option value="NYC-LUN-NYC">NYC-LUN-NYC</option>
                <option value="NYC-DBX-JNB-LVI-NYC">NYC-DBX-JNB-LVI-NYC</option>
              </select>
            </li>
            <li>
              <label for="group-filter">Group</label>
              <select name="group-filter" id="group-filter">
                <option value="all">All</option>
                <option value="--">None</option>
                <option value="AUC Namibia">AUC Namibia</option>
                <option value="AUC Durban">AUC Durban</option>
                <option value="AUC Cape Town">AUC Cape Town</option>
                <option value="Events Manager/Comm Members">
                  Events Manager/Comm Members
                </option>
                <option value="Directors">Directors</option>
                <option value="Chairman's Office">Chairman's Office</option>
                <option value="AU Commercial Investments">
                  AU Commercial Investments
                </option>
                <option value="AU Food Security">AU Food Security</option>
                <option value="AU Aviation">AU Aviation</option>
                <option value="AU Health">AU Health</option>
                <option value="AU Technogies">AU Technogies</option>
                <option value="AU Admin">AU Admin</option>
                <option value="AU Commodity House">AU Commodity House</option>
                <option value="AU Travel">AU Travel</option>
                <option value="QPay">QPay</option>
                <option value="AU Consultants">AU Consultants</option>
                <option value="RSA International Guests">
                  RSA International Guests
                </option>
              </select>
            </li>
          </ul>

          <div class="filter-button">
            <button class="cancel btn-transparent">Cancel</button>
            <button class="apply-filter">Apply</button>
          </div>
        </div>
      </div>
      <!-- Sorting -->
      <div class="sort sort-hidden">
        <div class="sort-results container">
          <ul class="results-sort">
            <li>
              <label for="sort-results">Filter By Country</label>
              <select name="sort-results" id="sort-results">
                <option value="all">All</option>
                <option value="Fullname">Fullname</option>
                <option value="Country">Country</option>
                <option value="Arrival Date">Arrival Date</option>
                <option value="Departure Date">Departure Date</option>
              </select>
            </li>
          </ul>

          <div class="sort-button">
            <button class="cancel btn-transparent">Cancel</button>
            <button class="apply-sort">Apply</button>
          </div>
        </div>
      </div>

      <div class="update-guest container hide-form">
        <div class="form-container">
          <div class="close-form">
            <i class="fa-solid fa-circle-xmark fa-2xl"></i>
          </div>
          <div class="hide-field guest-id" id="guest_id"></div>
          <form id="update_form">
            <ul class="form-content add-guest">
              <!-- Fullname -->
              <li>
                <label for="fullname">Fullname</label>
                <input type="text" name="fullname" id="fullname" value="" />
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
                    <input type="radio" name="flight" id="yes" value="yes" />Yes
                  </span>
                  <span class="check-flight">
                    <input type="radio" name="flight" id="no" value="no" />No
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
                <input type="date" name="arrival" id="arrival" value="" />
              </li>
              <!-- Departure -->
              <li>
                <label for="departure">Departure Date</label>
                <input type="date" name="departure" id="departure" value="" />
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
                    <input type="radio" name="passport" id="yes" value="Yes" />Yes
                  </span>
                  <span class="check-passport">
                    <input type="radio" name="passport" id="no" value="No" />No
                  </span>
                </div>
              </li>
              <!-- Covid -->
              <li>
                <label for="covid">Covid Results/Vaccination</label>
                <div class="covid flex-row">
                  <span class="check-covid">
                    <input type="radio" name="covid" id="yes" value="Yes" />Yes
                  </span>
                  <span class="check-covid">
                    <input type="radio" name="covid" id="no" value="No" />No
                  </span>
                </div>
              </li>
              <!-- Miscellaneous -->
              <li>
                <label for="miscellaneous">Miscellaneous</label>
                <input
                  type="text"
                  name="miscellaneous"
                  id="miscellaneous"
                  value=""
                />
              </li>
              <!-- Affiliation -->
              <li>
                <label for="affiliation">Affiliation</label>
                <input type="text" name="affiliation" id="affiliation" value="" />
              </li>
              <!-- Invited by -->
              <li>
                <label for="invited-by">Invited By</label>
                <select name="invited-by" id="invited-by">
                  <option value="">Select Inviter</option>
                  <option value="1">Mrs T.Ndambo</option>
                  <option value="2">Mrs Dos Santos</option>
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

            <div class="messages text-center">
              <p class="success" id="message"></p>
              <p class="error" id="err_message"></p>
            </div>

            <input id="update-guest" type="submit" value="Update Information" />
          </form>
        </div>
      </div>

      <div class="container headers">
        <div class="table-header scroller">
          <div class="name-header">
            <div class="table-header-cell">Fullname</div>
          </div>
          <div class="other-headers">
            <div class="table-header-cell">Country</div>
            <div class="table-header-cell">Charted Flight</div>
            <div class="table-header-cell">Commercial Flight</div>
            <div class="table-header-cell">Arrival Date</div>
            <div class="table-header-cell">Departure Date</div>
            <div class="table-header-cell">Accomodation</div>
            <div class="table-header-cell">Transportation</div>
            <div class="table-header-cell">Status</div>
            <div class="table-header-cell">Passport</div>
            <div class="table-header-cell">Covid Results/Vaccination</div>
            <div class="table-header-cell">Miscellaneous</div>
            <div class="table-header-cell">Affiliation</div>
          </div>
        </div>
      </div>

      <main class="container guest-list"></main>
      <?php
      } else {
        echo '<p class="text-center"><small class="text-center"><a href="/"><strong>Sign In</strong></a></small
        >
      To access guest list</p>';
      }
      ?>
    </div>
    
    <script src="/scripts/guest-info.js"></script>
    <script src="/scripts/get-data.js"></script>
    <!-- <script src="./scripts/get-guest.js"></script> -->
    <script src="/scripts/update-guest.js"></script>
  </body>
</html>
