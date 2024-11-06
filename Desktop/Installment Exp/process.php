<?php


    $host = "localhost";
    $username = "u956338012_usr_instalment";
    $password = "4O&@XNyFlo#";
    $database = "u956338012_db_instalmente";
    
    header('Content-Type: application/json'); // Set JSON header
    
    $conn = new mysqli($host, $username, $password, $database);
    
    // Check connection
    if ($conn->connect_error) {
        error_log("Database connection error: " . $conn->connect_error); // Log the error (production-safe)
        echo json_encode(['error' => 'Database connection failed.']);
        exit();
    }
    
    echo $_SERVER['REQUEST_METHOD'];
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = isset($_POST['name']) ? $conn->real_escape_string(trim($_POST['name'])) : null;
        $mobile = isset($_POST['mobile']) ? $conn->real_escape_string(trim($_POST['mobile'])) : null;
        $email = isset($_POST['email']) ? $conn->real_escape_string(trim($_POST['email'])) : null;
        $loantype = isset($_POST['loantype']) ? $conn->real_escape_string(trim($_POST['loantype'])) : null;

    
        // Validate required fields
        if ($name && $mobile) {
            $sql = "INSERT INTO enquiries (`name`, `mobile`, `email`, `loantype`) VALUES (?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
            
            if ($stmt) {
                $stmt->bind_param("ssss", $name, $mobile, $email, $loantype);
    
                // Execute the statement and handle response
                if ($stmt->execute()) {
                    if ($stmt->affected_rows > 0) {
                        $redirectUrl = $finalasset ?? '/thank-you';
                        echo json_encode(['status' => 'success', 'message' => 'Form submitted successfully!']);
                    } else {
                        echo json_encode(['error' => 'No rows affected.']);
                    }
                } else {
                    echo json_encode(['error' => 'Database execution failed: ' . $stmt->error]);
                }
                $stmt->close();
            } else {
                echo json_encode(['error' => 'Failed to prepare statement: ' . $conn->error]);
            }
        } else {
            echo json_encode(['error' => 'Name and mobile are required.']);
        }
    } else {
        echo json_encode(['error' => 'Invalid request method.']);
    }
    

    
?>