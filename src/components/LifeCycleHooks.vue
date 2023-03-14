<template>
    <div>
        <h2>Lifecycle Hooks</h2>
    </div>
</template>

<script setup>
    import { 
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    
    } from 'vue';


    onBeforeMount(() => {
    console.log("OnBeforeMounted Called - Child")
    });
    onMounted(() => {
    console.log("onMounted Called - Child")
    });
    onBeforeUpdate(() => {
    console.log("onBeforeUpdate Called - Child")
    });
    onUpdated(() => {
    console.log("onUpdated Called - Child")
    });
    onBeforeUnmount(() => {
    console.log("onBeforeUnmount Called - Child")
    });
    onUnmounted(() => {
    console.log("onUnmounted Called - Child")
    });


</script>