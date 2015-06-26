# Work not finished yet

# KPI_library
Library that stores Key Performance Indicators for any business, uses Google Spreadsheets as a source, and stores search outputs in the database. Below you can see the tips on how to download and use it for your own.

# How to fork it?

If you don't have a GitHub account, sign up! You'll need a Google account, too. If you want to follow the users' search activities, you'll also need to create your own MySQL database. You can do it, for example, here: <<LINK TO ANY POPULAR SITE>>

1. 'Fork' in the upper right corner. Now you have copy on your account.
2. Go to your forked repository and open the file "js/click.php"  and in the line 2 of code make relevant changes of variables names (you'll find instructions in the respective file).
3. Now go the Google spreadsheet that's going to be the basis of your library. Copy the headers from the original spreadsheet, and paste them into a new spreadsheet you created on your Google account.
3. Click File -> Publish to Web -> Start Publishing for you spreadsheet. Copy the key in the URL it gives you. get key
Return to your forked copy of this repository and click the index.html file. Then click 'Edit'.
4. On line XX of the file "index.html" in your repository, replace the existing key with the one from your spreadsheet.
5. Click 'Commit' to save your change.
6. Now visit your site at: youGitHubName.github.io/KPIlibrary. It should work just fine!

# Development ideas
I'm still working on the library to enrich it structure and make its use easy for any user wishing to fork it.
