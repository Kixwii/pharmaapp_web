<template>
<head>
   <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

</head>
<body>
    <div class="patient-signup-text">
        <h1>Don't have an account? Create one.</h1>
    </div>

    <div class="patient-signup-container">

        <form class="signup-form">
            <input type="text" name="username" placeholder="Username" required>
            <input type="text" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>

            <div class="signup-button">
                <button>Create Account
                    <i class="material-symbols-outlined">arrow_forward</i>
                </button>
            </div>
        </form>
</body>
</template>

<script>
export default {

}
</script>

<style>
body {
    background-color: rgb(25, 30, 30);
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    color: white;

}

.patient-signup-text {
    font-size: 40px;
    font-weight: bold;
}



.patient-signup-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.signup-form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    align-items: center;
}

.signup-form input{
    height: 40px;
    width: 200px;
    margin-bottom: 20px;
    border: none;
    border-radius: 30px;
    padding: 10px;
}
.signup-button{
    align-items: middle;
}
.signup-button button{
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    height: 60px;
    width: 300px;
    border: none;
    border-radius: 30px;
    padding: 10px;
    background-color: greenyellow;
}

</style>