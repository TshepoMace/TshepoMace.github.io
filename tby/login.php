<?php

require "dbconfig.php";
require "session.php";

$error = '';

if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit']))
{

    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    //validate if email is empty
    if(empty($email))
    {
        $error .= '<p class="error">Please enter your email.</p>';
    }

    if(empty($password))
    {
        $error .= '<p class="error">Enter your password</p>';
    }

    if(empty($error))
    {
        if($query = $db->prepare("SELECT * FROM users WHERE email = ?"))
        {
            $query->bind_param('s',$email);
            $query->execute();
            $row = $query->fetch();

            if($row)
            {
                if(password_verify($password, $row['password']))
                {
                    $_SESSION["userid"] = $row['id'];
                    $_SESSION["user"] = $row;

                    //redirect to home page
                    header("location:home.php");
                }else
                {
                    $error .= '<p class="error">Password not valid</p>';
                }
            }else
            {
                $error .= '<p class="error">User does not exist. Please register</p>';
            }
        }
        $query->close();
    }

    //close db connection
    mysqli_close($db);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">

    <style>
        h1 {
            margin-top: 10%;
        }

        .reg {
            font-weight: bold;
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Login</h1>
    <form action="" method="post">
        <input type="email" name="email" id="email" placeholder="email" required>
        <input type="password" name="password" id="password" placeholder="password" required>
        <button class="submit" value="submit" type="submit">Login</button>
        <p>Dont have an Account? <span class="reg"><a href="register.php">Register</a></span></p>
    </form>

    
</body>
</html>