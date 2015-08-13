# KPI_library
Library that stores Key Performance Indicators for any business, uses Google Spreadsheets as a source, and stores search results in the database. Below you can see the tips on how to download and use it for your own.
The main library used is SheetSee by jLord (huge thanks for creating it!). Also accompanying examples of SheetSee usages were a great inspiration and largely helped me structuring the code (especially: shetsee-pocket and lending-library examples).  The other libraries used were: Tabletop, ICanHaz, jQuery. The project makes use of Node.js. 

It is important to underscore that I commited few changes to original SheetSee library, adding $ajax command making it possible to store search results in the database.

# How to fork it?

If you don't have a GitHub account, sign up! You'll need a Google account, too. If you want to follow the users' search activities, you'll also need to create your own MySQL database (on any popular site).

## Setting Google Spreadsheet 
1. 'Fork' in the upper right corner. Now you have copy on your account.
2. Now go the Google spreadsheet that's going to be the basis of your library. Copy the headers from the original spreadsheet: https://docs.google.com/spreadsheets/d/1N6pYVGLx542q-L2Zepr3p15GSViRnHL0qCPYwkcf6bg/pubhtml, and paste them into a new spreadsheet you created on your Google account.
3. Click File -> Publish to Web -> Start Publishing for you spreadsheet. Copy the key in the URL it gives you. get key
Return to your forked copy of this repository and click the index.html file. Then click 'Edit'.
4. On line 122 of the file "index.html" in your repository, replace the existing key with the one from your spreadsheet.
5. Click 'Commit' to save your change.
6. Now visit your site at: youGitHubName.github.io/KPIlibrary. It should work just fine!

## Setting database
1. Set an account on any popular site offering data storage. Create a database and table inside it with the following SQL code:

CREATE DATABASE database_name;
CREATE TABLE KPIdata
(
searchbar varchar(100)
category_field varchar(255),
subcategory_field varchar(255),
threshold_field varchar(255),
figure_field varchar(255),
price_field varchar(255),
view_field varchar(255)
);

2. Now populate the table with some initial values:

INSERT INTO KPIdata (searchbar, category_field, subcategory_field, threshold_field, figure_field, price_field, view_field)
VALUES (abc, abc, abc, abc, abc, abc, abc);

3. Go to your forked repository and open the file "js/click.php"  and in the line 2 of code make relevant changes of database credentials (you'll find instructions in the respective file).
4. Now it should work just fine - try to search something in KPI library and check if the results are stored in the database.
 
## Other
In index.html file there is a script (on lines 24-36) which introduces and executes password to the library. Right now, the password is set as "abc", which is not the safest one:) The script (i.e. password) might be changed or deleted. 

For changing e.g. the width of the table with data, colors, fonts etc. please manipulate style.css file.
The number and names of the columns might be changed in index.html file.

# Development ideas
 - get rid of case sensitivity while typing keywords into the searchbar
