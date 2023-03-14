<template>
    <div>
        <h2 color="red">Child Async Components</h2>
        <h3 v-for="(user, i) in users" :key="i">
            {{ user }}
        </h3>
    </div>
</template>

<script setup>
import { ref } from  'vue'



</script>