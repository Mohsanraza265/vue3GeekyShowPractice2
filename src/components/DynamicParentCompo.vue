<template>
    <div>
        <h2 style="color: red;">Dynamic Components</h2>
        <!-- Dynamic components -->
        <button @click="current = 'Dynamic1'">Dynamic 1</button>
        <button @click="current = 'Dynamic2'">Dynamic 2</button>
        <component :is="tabs[current]" />


        <h2>for only KeepAlive</h2>
        <button @click="KeepAlive = 'Dollar'">Dollar</button>
        <button @click="KeepAlive = 'Rupees'">Rupees</button>

        <!--------- if we includes for cache only one component then use keyword include But if exclude any one then use exclude  -------->
        <KeepAlive include="Dollar">
            <component :is="tabsKeepAlive[KeepAlive]" />
        </KeepAlive>


        <!-- <KeepAlive>
            <component :is="tabsKeepAlive[KeepAlive]" />
        </KeepAlive> -->
    </div>
</template>

<script setup>
import Dynamic1 from './Dynamic1.vue';
import Dynamic2 from './Dynamic2.vue';
import Dollar from './Dollar.vue';
import Rupees from './Rupees.vue';


import {ref} from 'vue'
const current = ref("Dynamic1");

const tabs = {
    Dynamic1: Dynamic1,
    Dynamic2: Dynamic2
}
// for only KeepAlive
const KeepAlive = ref("Dollar");
const tabsKeepAlive = {
    Dollar: Dollar,
    Rupees: Rupees
}

</script>