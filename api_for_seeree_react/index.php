<?php
include('config.php');
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $password = $_REQUEST['password'];
    $age = $_REQUEST['age'];
    $phone = $_REQUEST['phone'];
    $sql = mysqli_query($con, "INSERT INTO user_master VALUES ('', '$name', '$email', '$password', '$age', '$phone')");

    if (mysqli_affected_rows($con) > 0) {
        echo json_encode('User Registered Successfully');
}
}
?>