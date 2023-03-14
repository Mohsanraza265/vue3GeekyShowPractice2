<template>
<input type="text" v-model="query">

    <TransitionGroup
        
        tag="ul"
        :css="false"
        @before-enter="onBeforeEnter" 
        @enter="onEnter" 
        @leave="onLeave"

        
    >
        <li v-for="(item, index) in comutedList" :key="item.msg" :data-index="index">
            {{ item.msg }}
        </li>
    </TransitionGroup>
    <h1>Mohsan Raza</h1>

</template>

<script setup>

import {ref, computed } from 'vue'
import gsap from "gsap";

const query = ref("")

const list = [
    {
        msg: "Bruce Lee"
    },
    {
        msg: "Jackie Chan"
    },
    {
        msg: "Jet Li"
    },
    {
        msg: "Mohsan"
    },
    {
        msg: "Rajper"
    },
    {
        msg: "Raza"
    },

]

const comutedList = computed(() => {
    return list.filter((item) => item.msg.toLowerCase().includes(query.value));
});

// javascript Hooks
function onBeforeEnter( el ) {
    el.style.opacity = 0;
    el.style.height = 0;
}

function onEnter( el, done ) {
    gsap.to( el, {
        opacity: 1,
        height: "1.6em",
        delay: el.dataset.index * 0.15,
        onComplete: done,

    });
}

function onLeave( el, done ) {
    gsap.to( el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done,

    });
    
}

</script>