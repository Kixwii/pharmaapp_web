<template>
  <div name="history">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </head>
    <body>
        <div class="history-page-title">
            <h1>Order History</h1>
        </div>
        <div class="outer-history-container">
           <historyItem></historyItem>
        </div>
    </body>

  </div>
</template>

<script>
import historyItem from '../components/historyItem.vue'


export default {
    components: {
        historyItem
    }
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

</style>