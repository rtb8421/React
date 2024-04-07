<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type');

    include('config.php');
    if ($_SERVER['REQUEST_METHOD'] == 'POST')
    {
        $rawdata = file_get_contents("php://input");
        $data = json_decode($rawdata,true);
        $name = $data['name'];
        $email = $data['email'];
        $password = $data['password'];
        $age = $data['age'];
        $phone = $data['phone'];
        $sql = mysqli_query($con,"INSERT INTO user_master values('','$name','$email','$password','$age','$phone')");
        if(mysqli_affected_rows($con)>0) {
            echo 'User Registerd Successfully';
        } else {
            echo 'failed';
        }
    }