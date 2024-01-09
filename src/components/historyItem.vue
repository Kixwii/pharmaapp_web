<template>
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
</template>

<script>
export default {

}
</script>

<style>
.inner-history-container {
    border: none;
    border-radius: 20px;
    background-color: grey;
    padding: 5px;
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
</style>