-- Invitors:
INSERT INTO inviters (invitorName)
VALUES('Mrs T.Ndambo'),
('Mrs Dos antos'),
('Matildah Pikiti'),
('Linda Mtonga'),
('Ms R.Ndambo'),
('Mrs A.Masebo');

-- Countries:
INSERT INTO countries (countryName)
VALUES('USA'),
('Cape Town, RSA'),
('Durban, RSA'),
('RSA'),
('Senegal'),
('Kenya'),
('Namibia'),
('DRC'),
('Ghana'),
('UK'),
('Dubai, UAE'),
('Scotland'),
('Choma, Zambia'),
('Kabwe, Zambia'),
('Ndola, Zambia'),
('Petauke, Zambia'),
('Livingstone'),
('Lusaka, Zambia'),
('Zambia'),
('Zimbabwe'),
('Bulgaria'),
('Nigeria'),
('Italy');

INSERT INTO groups (groupName)
VALUES('AUC Namibia'),
('AUC Durban'),
('AUC Cape Town'),
('Events Manager/Comm Members'),
('Directors'),
("Chairman's Office"),
('AU Commercial Investments'),
('AU Food Security'),
('AU Aviation'),
('AU Health'),
('AU Technogies'),
('AU Admin'),
('AU Commodity House'),
('AU Travel'),
('QPay'),
('AU Consultants'),
('RSA International Guests');

INSERT INTO flights (commercialFlight)
VALUES('USA-RSA-RTN'),
('SENEGAL-RSA-RTN'),
('KENYA-RSA-RTN'),
('GHANA-RSA-RTN'),
('DUBAI-RSA-RTN'),
('UK-LUN-RTN'),
('USA-LUN-RTN'),
('SCOTLAND-LUN-RTN'),
('LVI-JNB-OW'),
('JNB-LVI-JNB-RTN'),
('JNB-LVI-LUN-JNB'),
('NYC-JNB-LVI-NYC'),
('NYC-LVI-NYC'),
('LUN-JNB-OW'),
('NYC-LUN-NYC'),
('NYC-DBX-JNB-NYC');

INSERT INTO guests (fullname, countryID, chartedFlight, flightID, arrivalDate, departureDate, accomodation, transport, status, affiliation)
VALUES('Dr Toni Luck', 1, 'Yes', 1, '2022-06-16', '2022-07-04', 'Yes', 'Yes', 'VIP', 'MHT & MHT AFRICA LEGACY FUND');

INSERT INTO guests (fullname, countryID,chartedFlight, flightID, arrivalDate, departureDate, accomodation, transport, status, affiliation)
VALUES('Curet Megan Ashley', 1, 'Yes', 1, '16/06/2022', '03/07/2022', 'Yes', 'Yes', 'VIP', 'JUDGE');

INSERT INTO guests (fullname, countryID, chartedFlight, flightID, arrivalDate, departureDate, accomodation, transport, status, affiliation)
VALUES('Maier Johnson', 1, "Yes", 1, '16/06/2022', '03/07/2022', 'Yes', 'Yes', 'VIP', 'JUDGE');