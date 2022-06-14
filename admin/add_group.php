<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/style.css">
  <title>Add Group</title>
</head>
<body>

  <main>
    <div class="container">
    <div>
      <h1>Add Group</h1>
    </div>

    <div>
      <!-- Order Form -->
      <div class="froup-form">
        <form id="group_form">
          <div class="messages">
            <p class="success" id ="message"></p>
            <p class="error" id ="err_message"></p>
          </div>

          <ul class="add-group">
            <li>
              <label for="group_name">Your Order: </label>
              <input type="text" name="group_name" id="group_name" value="<?php echo htmlspecialchars($groupName)?>">
            </li>
          </ul>   
          <input class="dark" id="add_group" type="submit" value="Add Group">
        </form>
        <button id="adding-group">Adding Group...</button>
        <a href="orders.php" class="dark" id="adding-complete">Go To My Groups</a>
      </div>
    </div>
    
  </main>

  <!-- <script src="scripts/menu.js"></script> -->
  <script src="../scripts/add-group.js"></script>
</body>
</html>