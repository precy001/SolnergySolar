<?php

   header("Access-Control-Allow-Origin: http://localhost:5174"); // Allow requests from any origin
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Allow specific HTTP methods
    header("Access-Control-Allow-Headers: Content-Type, Authorization");  // Allow specific headers
    
   
    $host = "localhost";
    $user = "root";
    $password = '';
    $dbname = "solnergy_solar";

    $conn = mysqli_connect($host, $user, $password, $dbname);
   

    $username = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
    $usermail = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $usermessage = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);
    $current_date_time =  date('Y-m-d H:i:s');
    $current_date = date('Y-m-d');

        $add = "INSERT into messages_data(
        username,
        usermail, 
        usermessage, 
        datesent,
        query_date
        )

        VALUES(
        '$username', 
        '$usermail', 
        '$usermessage', 
        '$current_date_time', 
        '$current_date'
        )";  

        $res = mysqli_query($conn, $add);
        if($res){
            echo "Success";
        }else{
            echo "error";
        }

    mysqli_close($conn);
?>