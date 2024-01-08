<template>
  <div name="account">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </head>
    <body>

      <div class="account_settings_title">
          <h1>Account Settings</h1>
      </div>
      <div class="account-profile-container">
          <img alt="Image"/>
      </div>
      <div class="account-settings-button-container">
          <div>
              <button class="logout-button">Log Out</button>
          </div>
          <div>
              <button class="change-profile-button">Change Profile Photo</button>
          </div>
      </div>

      <div class="outer-conatiner">
          <div class="setup-mobile-money-tile">
              <h3>Set up Mobile Money</h3>
              <i class="material-symbols-outlined">payments</i>
          </div>
          <div class="card-tile">
              <h3>Your cards</h3>
          </div>
      </div>
    </body>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body {
    padding: 40px;
    background-color: rgb(25,30,30);
    font-family: 'Poppins', sans-serif;
    color: white;
}

.navbar {
    position: fixed;
    top:0;
    left: 0;
    width: 40px;
    height: 100vh;
    background-color: greenyellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
}

.nav-item {
    text-decoration: none;
    color: black;
    font-size: 24px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-tile {
    width: 420px;
    height: 205px;
    right: 10px;
    bottom: 30px;
    position: absolute;
    background-color: #D7DBEE;
    border: none;
    border-radius: 35px;
    padding: 20px;
}

.card-tile h3 {
    color: black;

}
.setup-mobile-money-tile{
    width: 130px;
    height: 130px;
    position: absolute;
    right: 10px;
    margin: 10px;
    border-radius: 20px;
    color: black;
    background-color: #2AB41F;
    padding: 10px;
}
.account-profile-container {
    position: absolute;
    margin: 60px;
    left: 10px;
    width: 250px;
    height: 250px;
    overflow: hidden;
    border-radius: 50%;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
}
.account-settings-button-container {
    position: absolute;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    bottom: 30px;
    margin: 2px;
    margin-left: 30px;
}
.account-settings-button-container button {
    border: none;
    border-radius: 20px;
    padding: 10px;
    width: 160px;
    margin: 10px;
}
.account-settings-button-container button:hover {
    cursor: pointer;
}

.logout-button {
    font-weight: bold;
    background-color: red;
    color: white;
}
.logout-button:hover{
    background-color: maroon;
}
</style>