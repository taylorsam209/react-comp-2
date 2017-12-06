create table animals(
animal_id serial primary key, //serial was used so it would auto increment when new rows are created. Primary key was used to establish that this is the column for its unique identification
name varchar(40), //I used varchar because I want the data to be a string and limit it to 40 characters long
image text // I used text because image links can be very long, contain number and letters, and will account for most data types.
)