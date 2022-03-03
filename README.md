# D&D Characters

This started as a hackathon project but I polished it to show the work that can be done with a more complex database.  I created a PostgreSQL relational database 
and wrote SQL queries in Rails to get the information needed when viewing a character.

The application lists all characters and allows a user to filter by class.  Once a character is selected, it pulls their basic information, attributes, armor, weapons, and inventory.  The items were randonly generated from a Rails seed file.

The deployed build can be found here: https://dnd-characters-db.herokuapp.com/
