
<?php
mysql_connect('SERVER_ADDRESS', 'USER_NAME', 'PASSWORD_HERE') or die('Could not connect: ' . mysql_error());

mysql_select_db('SELECTED_DATABASE_NAME') or die('Could not select database');

$cell = $_POST['cell'];
$valuecell = $_POST['valuecell'];

mysql_query("INSERT INTO `KPIdata` (`$cell`) VALUES ('$valuecell');");
mysql_close();
?>
