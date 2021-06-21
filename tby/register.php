
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
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

    <h1>Register</h1>
    <form action="reg_script.php" method="POST">
        <input type="text" name="name" id="name" placeholder="Name" required>
        <input type="email" name="email" id="email" placeholder="Email">
        <input type="tel" name="number" id="number" placeholder="Phone Number" required>
        <input type="password" name="password" id="password" placeholder="Password" required>
        <button class="submit" value="submit" type="submit">Register</button>
        <p>Already have an Account? <span class="reg"><a href="login.php">Login</a></span></p>
    </form>
    
</body>
</html>