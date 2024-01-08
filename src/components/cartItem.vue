<template>
              <div class="item-container">
                <div class="image-container">
                    <img alt="img"/>
                </div>
                <div class="item-text-field">

                </div>
                <div class="delete-button">
                    <button><i class="material-symbols-outlined">delete</i></button>
                </div>
            </div>

</template>

<script>
export default {

}
</script>

<style>
/* Image container component*/
.item-container {
 background-color: grey;
 padding: 10px;
 border-radius: 10px;
}

.image-container{
 background-color: red;
 border-radius: 10px;
 display: flex;
 height: 100px;
 width: 100px;
 justify-content: center;
 align-items: center;
}
</style>