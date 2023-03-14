<script setup>
    // import { useName } from '../composables/name.js'
    import { ref } from "vue";
    import { useFetch } from '../composables/fetchRef.js'
    let url = ref("https://jsonplaceholder.typicode.com/posts/1");
    const { data, error } = useFetch(url);
    function changeUrl() {
        url.value = "https://dummyjson.com/products/1";
    }

    // const { firstName, lastName } = useName();

</script>

<template>
    <div>
        <h2>From Composable </h2>
        <!-- <h2>FullName: {{ firstName }} {{ lastName }}</h2> -->
        <div v-if="error">Opps {{ error }}</div>
        <div v-else-if="data">{{ data }}</div>
        <div v-else>Loading....</div>
        <button @click="changeUrl">Click</button>

 
        
    </div>
</template>