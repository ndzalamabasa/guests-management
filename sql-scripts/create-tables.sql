CREATE TABLE IF NOT EXISTS countries(
  countryID INT AUTO_INCREMENT NOT NULL,
  countryName VARCHAR(50) NOT NULL,
  PRIMARY KEY(countryID)
);

CREATE TABLE IF NOT EXISTS flights(
  flightID INT AUTO_INCREMENT NOT NULL,
  commercialFlight VARCHAR(50) NOT NULL,
  PRIMARY KEY(flightID)
);

CREATE TABLE IF NOT EXISTS inviters(
  inviterID INT AUTO_INCREMENT NOT NULL,
  invitorName VARCHAR(50) NOT NULL,
  PRIMARY KEY(inviterID)
);

CREATE TABLE IF NOT EXISTS groups(
  groupID INT AUTO_INCREMENT NOT NULL,
  groupName VARCHAR(50) NOT NULL,
  PRIMARY KEY(groupID)
);

CREATE TABLE IF NOT EXISTS guests(
  guestID INT AUTO_INCREMENT NOT NULL,
  fullname VARCHAR(50) NOT NULL,
  countryID INT,
  chartedFlight VARCHAR(50),
  flightID INT,
  arrivalDate DATE,
  departureDate DATE,
  accomodation VARCHAR(50),
  transport VARCHAR(10),
  status VARCHAR(20),
  passport VARCHAR(10),
  covid VARCHAR(10),
  miscellaneous VARCHAR(100),
  affiliation VARCHAR(100),
  groupID INT,
  inviterID INT,
  PRIMARY KEY(guestID),
  FOREIGN KEY(countryID) REFERENCES countries(countryID),
  FOREIGN KEY(flightID) REFERENCES flights(flightID),
  FOREIGN KEY(groupID) REFERENCES groups(groupID),
  FOREIGN KEY(inviterID) REFERENCES inviters(inviterID)
);

