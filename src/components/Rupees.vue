<template>
    <h2>KeepAlive</h2>
    <h2>Rupees to Dollar converter</h2>
    <div>
        <label for="dollarMoney">Rupees: </label>
        <input type="text" id="dollarMoney" v-model="dollarMoney" />
    </div>
    <div>
        <p>
            IND: <span v-if="dollarMoney">{{ dollarMoney / 81 }}</span>
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const dollarMoney = ref("");
</script>