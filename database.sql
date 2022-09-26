-- SQL to create required table
CREATE TABLE "gallery" (
	id serial PRIMARY KEY NOT NULL,
	path varchar NOT NULL,
	title varchar(200) NOT NULL,
	description varchar(500),
	likes int default(0))
	;

-- Test data of mostly my imgs from my phone
INSERT INTO "public"."gallery"("path","title","description","likes")
VALUES
(E'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',E'Harley Davidson',E'Photo fo a Harley Davidson from front',0),
(E'https://live.staticflickr.com/65535/52383385472_a333dda432_b.jpg',E'Wanda',E'Photo of Wanda out fishing',0),
(E'https://live.staticflickr.com/65535/52381758482_4a5afa76c4_h.jpg',E'Fishing in BWCA',E'Fishing/Camping trip in the Boundary Water Canoe Area',0),
(E'https://live.staticflickr.com/65535/52384746590_c71027a48a_b.jpg',E'The Softball Team',E'2022 State Softball Team',0),
(E'https://live.staticflickr.com/65535/52384629039_4f164ee4ce_b.jpg',E'Heinrich',E'The big guy on a couch',0),
(E'https://live.staticflickr.com/65535/52383385587_228232aa3b_b.jpg',E'Computer',E'Gaming Computer',0),
(E'https://live.staticflickr.com/65535/52384747665_60dc11d492_b.jpg',E'Twins Game',E'Photo of the field from a Twins game',0);

-- Random Internet IMG Test Data
INSERT INTO "gallery" ("path", "title", "description")
VALUES ('https://live.staticflickr.com/65535/52381758482_4a5afa76c4_h.jpg','BWCA','Canoe in the Boundary Waters'),
('https://images.unsplash.com/photo-1558980394-4c7c9299fe96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80','Harley Davidson','Photo fo a Harley Davidson from front'),
('https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80','Gaming Computer','Photo of a gaming computer'),
('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80','2 Dogs','Two dogs running on a country road'),
('https://images.unsplash.com/photo-1532015917327-c7c46aa1d930?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80','Fishing a stream','A man fishing in a stream');