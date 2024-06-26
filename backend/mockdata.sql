drop table "UserRelations" cascade;
drop table "EventRelations" cascade;
drop table "Events" cascade;
drop table "Users" cascade;
drop table "Locations" cascade;




INSERT INTO "Users"
    ("UserID", "Firstname", "Lastname", "DateBorn", "Phone", "RelationshipStatus", "Gender", "Description", "Email", "ProfileImage", "Password", "Salt", "EventsCreated", "EventsJoined", "EventBails", "Role")
VALUES
    ('user1', 'Petter', 'Pilgaard', '1990-01-01', '69696969', 2, 'M', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'petter@mail.no', 'https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg', 'password', 'salt', 0, 0, 0, 2),
    ('user2', 'Jan', 'Teigen', '1990-01-01', '12312344', 2, 'M', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'https://www.chaac.tf.fau.de/files/2021/02/1071625.jpg', 'image.png', 'password', 'salt', 0, 0, 0, 2),
    ('user3', 'Jan', 'Banan', '1990-01-01', '88991122', 2, 'M', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'banan@mail.no', 'https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg', 'password', 'salt', 0, 0, 0, 2),
    ('user4', 'Sigrid', 'Undset', '1990-01-01', '12121212', 2, 'F', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'sigrid@mail.no', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvuZAIa61TWle6ggRoAyEc3orgGLW9MAmtzv5lFGGLQ&s', 'password', 'salt', 0, 0, 0, 2),
    ('user5', 'Dennis', 'Fremming', '1990-01-01', '98989898', 2, 'F', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'pennis@mail.no', 'https://pbs.twimg.com/media/FE6-Y6JUUAgpjpW?format=jpg&name=4096x4096', 'password', 'salt', 0, 0, 0, 2),
    ('user6', 'Cato Salve', 'Pedersen', '1990-01-01', '22222222', 2, 'M', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'cato@mail.no', 'https://www.archiefoundationhome.org.uk/wp-content/uploads/2020/05/profile-photo-social-media.jpg', 'password', 'salt', 0, 0, 0, 2),
    ('user7', 'Emma', 'Ellingsen', '1990-01-01', '33333333', 2, 'M', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'emma@mail.no', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0Lnyc-f7bGVJwHblzWmBaxxan5I1MIOIklDHe9IoaQ&s', 'password', 'salt', 0, 0, 0, 2),
    ('user8', 'Edward', 'Snowden', '1990-01-01', '00000000', 2, '-', '-', 'snowden@mail.no', 'https://www.meshcc.com/wp-content/uploads/2022/02/Alex-Foord-e1644436249973.jpg', 'password', 'salt', 0, 0, 0, 2),
    ('user9', 'Nina', 'Fremming', '1990-01-01', '69698888', 2, 'F', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'nina@mail.no', 'https://scontent.fosl3-1.fna.fbcdn.net/v/t39.30808-6/358388611_6354992987881203_6976954052290684663_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SQ1xS5b9DvsAb7F6H1a&_nc_ht=scontent.fosl3-1.fna&oh=00_AfCq4aaRUHjmmX3iyLzZ5GHBjCbGytj1nr_B1K_1wZgPSA&oe=662DBE15', 'password', 'salt', 0, 0, 0, 2),
    ('user10', 'Dinosaurus', 'Rex', '1990-01-01', '11223344', 2, 'M', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'rex@mail.no', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzRTx65Hmgr8sj1z2M5Cw8Vb-Vd44JBBt1N7j9WsIyI_dYZD-j_iGK7JCtCC6H5Yi3QM&usqp=CAU', 'password', 'salt', 0, 0, 0, 2),
    ('user11', 'Håvard', 'Salsten', '2000-08-19', '99339933', 1, 'M', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'håvard.hockey@gmail.com', 'https://www.claconnect.com/en/-/media/claimages/people/v/dylan-valentine.jpg?rev=ea6fc1050f0c42dea3e5adbba67e42c9', 'håvard1', 'salt', 0, 0, 0, 2),
    ('user12', 'Vetle', 'Salsten', '2000-08-19', '99933311', 1, 'M', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'sally@gmail.com', 'https://pics.craiyon.com/2023-11-14/2bW17ubBS1ux3w7cqcBreQ.webp', 'sally1', 'salt', 0, 0, 0, 2),
    ('user13', 'Julie', 'Bjørneby', '2000-05-23', '45454545', 2, 'F', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'julie@gmail.com', 'https://img.freepik.com/free-photo/front-view-smiley-woman-with-earbuds_23-2148613052.jpg', 'julie1', 'salt', 0, 0, 0, 2),
    ('user14', 'Elise', 'Roise', '2000-04-21', '46464646', 4, 'F', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'elise@hotmail.com', 'https://img.freepik.com/photos-premium/portrait-belle-jeune-femme_63239-1684.jpg', 'elise1', 'salt', 0, 0, 0, 2),
    ('user15', 'Fredrik', 'Gyene', '2000-06-04', '90909090', 2, 'M', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'fred@gmail.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHojANYlKPn5JZ6A1iLj8SasjKA5iYKRxps1DweT5mhQTMAT3we_UnzXvr6ppJeL8daU0&usqp=CAU', 'fredrik1', 'salt', 0, 0, 0, 2),
    ('user16', 'Atif', 'Berget', '2000-11-20', '97979797', 2, 'M', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'atif@gmail.com', 'https://s3-us-west-1.amazonaws.com/co-directory-images/andrew-lefkowitz-3303018.jpg', 'atif1', 'salt', 0, 0, 0, 2),
    ('user17', 'Erna', 'Solberg', '1969-08-21', '99999999', 1, 'F', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'erna@hotmail.com', 'https://i.pinimg.com/originals/e8/b2/71/e8b271169214323595f5155a649884d2.jpg', 'erna1', 'salt', 0, 0, 0, 2),
    ('user18', 'Markus', 'Solbakken', '2000-06-06', '98765432', 3, 'M', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'markus@hotmail.com', 'https://img.freepik.com/free-photo/close-up-view-strict-young-handsome-caucasian-man-wearing-glasses-standing-profile-view-isolated-crimson-wall_141793-79811.jpg', 'markus1', 'salt', 0, 0, 0, 2),
    ('user19', 'Tiril', 'Blindheim', '2000-01-28', '46454645', 4, 'F', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'tiril@gmail.com', 'https://img.freepik.com/free-photo/close-up-smiley-woman-posing_23-2149178089.jpg', 'tiril1', 'salt', 0, 0, 0, 2),
    ('user20', 'Margrete', 'Roe', '2000-05-17', '42424242', 3, 'F', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'margrete@hotmail.com', 'https://randomuser.me/api/portraits/women/76.jpg', 'margrete1', 'salt', 0, 0, 0, 2),
    ('dennis10', 'Dennis', 'Osmani', '2000-09-06', '90414810', 2, 'M', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'dennisosmani@hotmail.com', 'hot.png', 'admin', 'salt', 0, 0, 0, 1); 


INSERT INTO "UserRelations"
    ("User_first_ID", "User_second_ID", "Type")
VALUES
    ('user1', 'user2', 2),
    ('user1', 'user3', 2),
    ('user1', 'user4', 2),
    ('user1', 'user5', 2),
    ('user1', 'user6', 2),
    ('user1', 'user7', 2),
    ('user1', 'user8', 0),
    ('user1', 'user9', 0),
    ('user10', 'user1', 1),
    ('user11', 'user1', 1),
    ('user1', 'user13', 3),
    ('user1', 'user14', 3),
    ('user15', 'user1', 4),
    ('user16', 'user1', 4),
    ('user14', 'user15', 2),
    ('user14', 'user16', 2),
    ('user14', 'user17', 2),
    ('user14', 'user18', 2),
    ('user14', 'user19', 2),
    ('user14', 'user20', 2),
    ('user14', 'user12', 0),
    ('user14', 'user13', 0),
    ('user10', 'user14', 1),
    ('user11', 'user14', 1),
    ('user14', 'user9', 3),
    ('user14', 'user8', 3),
    ('user2', 'user14', 4),
    ('user3', 'user14', 4);




INSERT INTO "Locations"
    ("Address", "Postalcode", "City", "Country")
VALUES
    ('Hillside Dr', '42582', 'CedarHaven', 'CountryA'),
    ('Lakeside Ct', '94103', 'AmundTown', 'CountryA'),
    ('River Rd', '84051', 'Brightville', 'CountryC'),
    ('Starlight Blvd', '95100', 'Brightville', 'CountryC'),
    ('Forest Ln', '34525', 'AmundTown', 'CountryA'),
    ('Hillside Dr', '32305', 'AmundTown', 'CountryB'),
    ('Forest Ln', '10110', 'Brightville', 'CountryA'),
    ('Starlight Blvd', '70861', 'Brightville', 'CountryC'),
    ('Moonlight Way', '48292', 'Brightville', 'CountryB'),
    ('Forest Ln', '21674', 'Brightville', 'CountryC'),
    ('Sunny Ave', '30135', 'Brightville', 'CountryB'),
    ('River Rd', '51642', 'Brightville', 'CountryC'),
    ('Starlight Blvd', '44676', 'Brightville', 'CountryC'),
    ('Starlight Blvd', '95957', 'CedarHaven', 'CountryA'),
    ('Main St', '58479', 'AmundTown', 'CountryB'),
    ('Lakeside Ct', '72594', 'Brightville', 'CountryB'),
    ('Moonlight Way', '80556', 'AmundTown', 'CountryC'),
    ('Hillside Dr', '34871', 'AmundTown', 'CountryC'),
    ('Sunny Ave', '33436', 'Brightville', 'CountryA'),
    ('Sunny Ave', '65737', 'AmundTown', 'CountryC');


INSERT INTO "Events"
    ("EventName", "EventDescription", "EventDateTimeStart", "EventDateTimeEnd", "Visibility", "InviteURL", "FrontImage", "MinCapacity", "MaxCapacity", "LocationID")
VALUES
    ('Event1', 'Description for Event1', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 0, 'http://invite.com', 'https://images.ctfassets.net/ixnx877zbpod/1CIFgbNF6md2MyrSs1WmYl/14f5ec68598a7618e6a88bc7a1a111fd/liwlig-6sans-eventhighlight-2023-1.jpg', '1', '50', 1),
    ('Event2', 'Description for Event2', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 0, 'http://invite.com', 'https://www.npg.no/wp-content/uploads/2023/03/et-vellykket-event.webp', '1', '20', 2),
    ('Event3', 'Description for Event3', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 0, 'http://invite.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxHJkQJaCJtjvjazytWGTPRxNgLzDAsjmEM2Bc9dEVw&s', '1', '40', 3),
    ('Event4', 'Description for Event4', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 0, 'http://invite.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Ug67vvxq8LeX2l3C3SvNXxDuRpqE4Cl6COHlO2Txxw&s', '1', '35', 4),
    ('Event5', 'Description for Event5', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 0, 'http://invite.com', 'https://i1.adis.ws/i/canon/canon-talks_publiek_web-4x3_23277bdfa3d24ae08a063b1ad759c94c?$70-30-header-4by3-dt-jpg$', '1', '25', 5),
    ('Event6', 'Description for Event6', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 0, 'http://invite.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxHJkQJaCJtjvjazytWGTPRxNgLzDAsjmEM2Bc9dEVw&s', '1', '15', 6),
    ('Event7', 'Description for Event7', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 0, 'http://invite.com', 'https://i1.adis.ws/i/canon/canon-talks_publiek_web-4x3_23277bdfa3d24ae08a063b1ad759c94c?$70-30-header-4by3-dt-jpg$', '1', '30', 7),
    ('Event8', 'Description for Event8', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 0, 'http://invite.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxHJkQJaCJtjvjazytWGTPRxNgLzDAsjmEM2Bc9dEVw&s', '1', '22', 8),
    ('Event9', 'Description for Event9', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 0, 'http://invite.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxHJkQJaCJtjvjazytWGTPRxNgLzDAsjmEM2Bc9dEVw&s', '1', '18', 9),
    ('Event10', 'Description for Event10', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 0, 'http://invite.com', 'https://i1.adis.ws/i/canon/canon-talks_publiek_web-4x3_23277bdfa3d24ae08a063b1ad759c94c?$70-30-header-4by3-dt-jpg$', '1', '28', 10),

    ('Event11', 'Description for Event11', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 1, 'http://invite.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxHJkQJaCJtjvjazytWGTPRxNgLzDAsjmEM2Bc9dEVw&s', '1', '50', 11),
    ('Event12', 'Description for Event12', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 1, 'http://invite.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Ug67vvxq8LeX2l3C3SvNXxDuRpqE4Cl6COHlO2Txxw&s', '1', '50', 12),
    ('Event13', 'Description for Event13', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 1, 'http://invite.com', 'https://i1.adis.ws/i/canon/canon-talks_publiek_web-4x3_23277bdfa3d24ae08a063b1ad759c94c?$70-30-header-4by3-dt-jpg$', '1', '50', 13),
    ('Event14', 'Description for Event14', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 1, 'http://invite.com', 'https://i1.adis.ws/i/canon/ise_canon_2023-2_05532e2ff1e2412ab4322f0c97dd7ac9?$block-grid-16by9-md-jpg$', '1', '50', 14),
    ('Event15', 'Description for Event15', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 1, 'http://invite.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxHJkQJaCJtjvjazytWGTPRxNgLzDAsjmEM2Bc9dEVw&s', '1', '50', 15),
    ('Event16', 'Description for Event16', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 2, 'http://invite.com', 'https://i1.adis.ws/i/canon/ise_canon_2023-2_05532e2ff1e2412ab4322f0c97dd7ac9?$block-grid-16by9-md-jpg$', '1', '50', 16),
    ('Event17', 'Description for Event17', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 2, 'http://invite.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxHJkQJaCJtjvjazytWGTPRxNgLzDAsjmEM2Bc9dEVw&s', '1', '50', 17),
    ('Event18', 'Description for Event18', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 2, 'http://invite.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxHJkQJaCJtjvjazytWGTPRxNgLzDAsjmEM2Bc9dEVw&s', '1', '50', 18),
    ('Event19', 'Description for Event19', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 2, 'http://invite.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Ug67vvxq8LeX2l3C3SvNXxDuRpqE4Cl6COHlO2Txxw&s', '1', '50', 19),
    ('Event20', 'Description for Event20', '2024-02-15 18:00:00', '2024-02-15 21:00:00', 2, 'http://invite.com', 'https://i1.adis.ws/i/canon/ise_canon_2023-2_05532e2ff1e2412ab4322f0c97dd7ac9?$block-grid-16by9-md-jpg$', '1', '50', 20);





INSERT INTO "EventRelations"
    ("EventID", "UserID", "EventRelationParticipation", "EventRole")
VALUES
    (1, 'user2', 0, 0),
    (2, 'user2', 0, 0),
    (3, 'user2', 0, 0),
    (4, 'user2', 0, 0),
    (5, 'user2', 0, 0),

    (6, 'user3', 0, 0),
    (7, 'user3', 0, 0),
    (8, 'user3', 0, 0),
    (9, 'user3', 0, 0),
    (10, 'user3', 0, 0),

    (11, 'user2', 0, 0),
    (12, 'user2', 0, 0),
    (13, 'user3', 0, 0),
    (14, 'user4', 0, 0),
    (15, 'user4', 0, 0),

    (16, 'user16', 0, 0),
    (17, 'user17', 0, 0),
    (18, 'user6', 0, 0),
    (19, 'user7', 0, 0),
    (20, 'user8', 0, 0),

    (1, 'user1', 0, 1),
    (1, 'user14', 0, 1),
    (1, 'user5', 0, 2),
    (1, 'user6', 0, 2),
    (1, 'user7', 0, 2),
    (1, 'user8', 0, 2),
    (1, 'user9', 0, 2),
    (1, 'user10', 0, 2),

    (6, 'user1', 0, 1),
    (6, 'user14', 0, 2),
    (6, 'user5', 0, 2),
    (6, 'user6', 0, 2),
    (6, 'user7', 0, 2),
    (6, 'user8', 0, 2),
    (6, 'user9', 0, 2),
    (6, 'user10', 0, 2),

    (11, 'user1', 2, 2),
    (11, 'user14', 2, 2),
    (13, 'user1', 2, 2),
    (13, 'user14', 2, 2),
    (15, 'user1', 2, 2),

    (1, 'user13', 1, 2),
    (1, 'user15', 1, 2),

    (1, 'user18', 3, 2),
    (1, 'user19', 3, 2);
