<template>
  <div name="cart">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </head>
    <body>
        <div>
            <div class="cart-page-title">
                <h3>Your Cart</h3>
            </div>
            <div class="items-container">
                <cartItem></cartItem>
            </div>
            <div class="proceed-button">
                <button>Proceed to Check-out</button>
            </div>
        </div>
    </body>

  </div>
</template>

<script>
import cartItem from '@/components/cartItem.vue';

export default {
  components: {
    cartItem
  },
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
.proceed-button{
position: fixed;
bottom: 10px;
right: 10px;
}

.proceed-button button {
    border: none;
    border-radius: 30px;
    padding: 10px;
    background-color: rgb(20, 41, 70);
    width: 150px;
    color: rgb(221, 205, 151);
}

.delete-button{
 display: flex;
 flex-direction: row-reverse;
}
.delete-button button{
    color: red;
    height: 40px;
    width: 40px;
    border: none;
    border-radius: 30px;
}

.items-container{
 background-color: darkgrey;
 padding: 20px;
 border-radius: 30px;
 height: 100vh;
}

</style>