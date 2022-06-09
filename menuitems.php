<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, X-Token-Auth, Authorization");

    require_once "config/db.php";
    require_once "config/menuitem.php";


    $db = new DatabaseConnection();
    $conn = $db->getConnection();

    $data = json_decode(file_get_contents("php://input"));
    $req = $data->req;
    //echo "$req";

    $query = "SELECT * FROM `food`";
    $result = $conn->query($query);

    $menuitems;
    $counter = 0;

    while($row = $result->fetch_assoc()){
        $cur = new menuitem($row["id"], $row["name"],$row["description"] ,$row["type"], $row["price"],$row["image"]);
        $menuitems[$counter++] = $cur;
        // http_response_code(200);
        // echo json_encode($cur);
    }

    http_response_code(200);
    echo json_encode($menuitems);
    
?>