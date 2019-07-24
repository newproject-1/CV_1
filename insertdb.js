
<?php
//open php script
//name of server , username and password of phpmyadmin // we have to chane to mongoDB
//usually root and pass is none , name of DB
$servername = "localhost";
$username = "root";
$password = "";
//change here if differant DB
$dbname = "#";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

?>
<?php

$firstName = $_POST ['firstName'];
$lastName = $_POST ['lastName'];
$email = $_POST ['email'];
$occupation = $_POST ['occupation'];
$city = $_POST ['city'];
$bio = $_POST ['bio'];
if (! empty ( $ firstName) || (! empty ( $ lastName) || (! empty ( $ email) ||(! empty ( $ occupation) || (! empty ( $ city) ||(! empty ( $ bio)){
#code...
}else{
echo "All field are required";
die();
}
?>
