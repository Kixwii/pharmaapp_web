<script setup>
</script>

<template>
  <div name="home">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </head>
    <body>
        <div class="search-segment">
            <i class="material-symbols-outlined">search</i>
            <input type="text" placeholder="Search">
        </div>

        <div class="patient-welcome-text">
            <h1>Welcome, {{ username }}</h1>
        </div>

        <div class="home-container">
            <div class="notifications-container">
                <h3>Enjoy Discounts of up to 50%</h3>
                <div class="notifications-button">
                    <button>Buy Now</button>
                </div>
            </div>

            <div class="order-container">
                <h3>View your order</h3>
                <div class="view-order-button">
                    <button> <i class="material-symbols-outlined">arrow_forward</i>
                    </button>
                </div>
            </div>
        </div>

        <div class="scan-button">
            <button class="please-scan">
                <i class="material-symbols-outlined">document_scanner</i>
            </button>
        </div>
    </body>
  </div>
</template>

<style>
body {
    background-color: rgb(25,30,30);
    padding: 10px;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    color: white;
}

.search-segment input{
  padding: 10px;
  border: none;
  border-radius: 20px;

}

.patient-welcome-text {
    top: 0;
    left: 10;
    padding: 10px;
}
.patient-welcome-text h1 {
    font-size: 60px;
    font-weight: bold;
}

.notifications-container {
    border: none;
    border-radius: 30px;
    padding: 10px;
    color: black;
    background-color: grey;
    width: 350px;
    height: 200px;
    right: 20px;
    top: 20px;
}
.notifications-container h3{
    font-size: 30px
}

.notifications-container button {
   background-color: greenyellow;
   padding: 10px;
   border: none;
   border-radius: 20px;
}

.order-container {
    border: none;
    border-radius: 20px;
    padding: 10px;
    background-color: rgb(20, 41, 70);
    width: 130px;
    height: 130px;
    margin: 20px;

}
.home-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    top: 10px;
    right: 10px;
    margin: 20px;
    padding: 20px;
}

.order-container h3{
 color: rgb(221,
  205, 151);
}
.order-container button {
    border: none;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    /* position: absolute;
    bottom: 10px;
    right: 10px; */
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
.scan-button{
    position: absolute;
    bottom: 20px;
    right: 20px;
}
/* .scan-button button {
    bottom: 20px;
    right: 20px;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 10px;
} */
.please-scan{
    bottom: 20px;
    right: 20px;
    color: black;
    border: none;
    padding: 10px;
    height: 50px;
    width: 50px;
    border-radius: 30px;
}
</style>
