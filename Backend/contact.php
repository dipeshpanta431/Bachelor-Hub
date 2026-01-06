<?php
$conn=mysqli_connect('localhost','root','') or die('connection error');

 $create="create database if not exists bachelor_Hub ";
 mysqli_query($conn,$create) or die('Database creation error');
 
  mysqli_select_db($conn,'bachelor_Hub');

  $createtbl = "CREATE TABLE IF NOT EXISTS contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
     message varchar(400)
)";

mysqli_query($conn, $createtbl) or die("Tale Creation Error");
    if (!mysqli_query($conn, $createtbl)) {
        die("Table creation error: " . mysqli_error($conn));
    }
    

    if(isset($_POST['submit']))
    {

    $name = $_POST["uname"];
    $email = $_POST["umail"];
    $message = $_POST["umessage"];
    $insert = "INSERT INTO contact (name, email, message) 
        VALUES('$name', '$email', '$message')";

    mysqli_query($conn,$insert) or die('insertion failed');
    echo ' message sucessfully send';
    }
  ?>