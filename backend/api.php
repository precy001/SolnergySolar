<?php 
       header("Access-Control-Allow-Origin: http://localhost:5175");
    $host = "localhost";
    $user = "root";
    $pasword = "";
    $dbname = 'solnergy_solar';

    $conn = mysqli_connect($host, $user, $pasword, $dbname);

    $response = array();
    $current_date =  date('Y-m-d');

    if($conn){
        $query = "SELECT * FROM messages_data WHERE query_date = '$current_date'";
        $result = mysqli_query($conn, $query);

        if($result){
            header("Content-Type: JSON");
            $i = 0;
            while($row = mysqli_fetch_assoc($result)){
                $response[$i]['username'] = $row['username'];
                $response[$i]['usermail'] = $row['usermail'];
                $response[$i]['usermessage'] = $row['usermessage'];
                $response[$i]['datesent'] = $row['datesent'];
                $i++;
            }
        }
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
?>