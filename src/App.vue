<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <header>
    <div class="wrapper">
      <nav class="navbar">
        <RouterLink to="/" class="nav-item"><i class="material-symbols-outlined">home</i></RouterLink>
          <RouterLink to="/history" class="nav-item"><i class="material-symbols-outlined">history</i></RouterLink>
          <RouterLink to="/cart" class="nav-item"><i class="material-symbols-outlined">shopping_cart</i></RouterLink>
          <RouterLink to="/account" class="nav-item"><i class="material-symbols-outlined">account_circle</i></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

/* The color red has been used in the image boxes as a placeholder */
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
