<template>
    <div>
        <h2 v-font-size="50">Custom Directive</h2>
    </div>
</template>

<script setup>
    // custom directive
    const vFontSize = {
        mounted: (el, binding) => {
            el.style.fontSize = binding.value + "px"; 
        }
    }
</script>