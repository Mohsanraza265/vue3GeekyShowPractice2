<template>
    <div>
        <h2>Template Ref</h2>
        <label for="username">Username: </label>
        <input type="text" id="username" ref="inputRef" />
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';

    const inputRef = ref("");
 
    onMounted( () => {

        console.log( inputRef.value );
        inputRef.value.focus();
        
    })
    

</script>

<style scoped>

    h2 {
        color: red;
    }

</style>