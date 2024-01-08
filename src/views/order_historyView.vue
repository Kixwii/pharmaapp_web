<template>
  <div name="history">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="order_history.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <title>Document</title>
</head>
<body>
    <div class="navbar">
        <a href="#" class="nav-item"><i class="material-symbols-outlined">home</i></a>
        <a href="#" class="nav-item"><i class="material-symbols-outlined">history</i></a>
        <a href="#" class="nav-item"><i class="material-symbols-outlined">shopping_cart</i></a>
        <a href="#" class="nav-item"><i class="material-symbols-outlined">account_circle</i></a>
    </div>
    <div class="history-page-title">
        <h1>Order History</h1>
    </div>
    <div class="outer-history-container">
        <div class="inner-history-container">
            <div class="history-image-container">
                <img/>
            </div>
            <div class="history-component-text-container">
                <div>
                    <h3>{{history_component_name}}</h3>
                    <p>{{ history_component_text }}</p>
                </div>
            </div>
            <div class="recall-button-container">
                <div class="recall-button">
                    <button><i class="material-symbols-outlined">arrow_forward</i></button>
                </div>
            </div>
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

.inner-history-container {
    border: none;
    border-radius: 20px;
    background-color: grey;
    padding: 5px;
}

.recall-button-container {
    display: flex;
    flex-direction: row-reverse;
}

.recall-button button{
    border: none;
    border-radius: 20px;
    height: 40px;
    width: 40px;
    background-color:  rgb(20, 41, 70);
    color: rgb(221, 205, 151);
}

.history-component-text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.history-image-container {
    display: flex;
    flex-direction: row;
    background-color: red;
    border-radius: 20px;
}
</style>