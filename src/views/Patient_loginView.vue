<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link href="patient_login.css" rel="stylesheet">
    <title>Document</title>
</head>
<body>
    <div class="login-text">
        <h1>Welcome back !!</h1>
    </div>

    <div class="login-container">

        <form class="login-form">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>

            <div class="login-button">
                <button>Log In</button>
            </div>
        </form>
    </div>
</body>

</template>

<script>
export default {

}
</script>

<style>
body{
    padding: 0;
    margin: 0;
    background-color: rgb(25, 30, 30);
    color: white;
    font-family: 'Poppins', sans-serif;
}

.login-text {
    font-size: 40px;
    font-weight: bold;
}

.login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.login-form{
    display: flex;
    flex-direction: column;
    margin: 10px;
    justify-content: center;
    align-items: center;
}
.login-form input{
    border: none;
    border-radius: 30px;
    margin-bottom: 20px;
    height: 30px;
    width: 150px;
    padding: 10px;
}

.login-button{
    padding: 10px;
}

.login-button button {
    border: none;
    border-radius: 30px;
    height: 40px;
    width: 200px;
    padding: 10px;
    color: rgb(221, 205, 151);
    background-color: rgb(20, 41, 70); 
}
</style>