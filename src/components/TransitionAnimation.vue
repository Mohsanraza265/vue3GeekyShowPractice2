<template>
    <div>
        <!-- Transition Class -->
        <!-- <button @click="show =! show">Click</button>
        <Transition>
            <h2 v-if="show">
                Hello World
            </h2>
        </Transition> -->

        <!-- Named Transition -->
        <!-- <button @click="show =! show">Click</button>
        <Transition name="fade">
            <h2 v-if="show">
                Hello World
            </h2>
        </Transition> -->

        <!-- css Transition -->
        <!-- <button @click="show =! show">Click</button>
        <Transition name="slide-fade">
            <h2 v-if="show">
                Hello World
            </h2>
        </Transition> -->

        <!-- css Animation -->
        <!-- <button @click="show =! show">Click</button>
        <Transition name="bounce">
            <h2 v-if="show">
                Hello World
            </h2>
        </Transition> -->

        <!-- Javascript Hooks -->
        <button @click="show =! show">Click</button>
        <Transition 
            @before-enter="onBeforeEnter" 
            @enter="onEnter" 
            @leave="onLeave"
            :css="false"
            appear
        >
            <h2 class="gsap-box" v-if="show">
            </h2>
        </Transition>


    </div>
</template>

<script setup>

import { ref } from 'vue';
import gsap from "gsap";
const show = ref(true);


// javascript Hooks
function onBeforeEnter( el ) {
    gsap.set( el, {
        scaleX: 0.25,
        scaleY: 0.25,
        opacity: 1
    });
}

function onEnter( el, done ) {
    gsap.to( el, {
        duration: 1,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        ease: "elastic.inOut(2.5, 1)",
        onComplete: done,

    });
}

function onLeave( el, done ) {
    gsap.to( el, {
        duration: .7,
        scaleX: 1,
        scaleY: 1,
        x: 300,
        ease: "elastic.inOut(2.5, 1)",

    });
    gsap.to( el, {
        duration: .2,
        delay: 0.5,
        opacity: 0,
        ease: "elastic.inOut(2.5, 1)",
        onComplete: done,

    });
}

</script>

<style>

/* Transition Class */
/* .v-enter-active,
.v-leave-active {
    transition: opacity .5s ease;
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
} */


/* Named Transition */
/* .fade-enter-active,
.fade-leave-active {
    transition: opacity .5s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
} */


/* css Transition */
/* .slide-fade-enter-active {
    transition: all .3s ease-out;
}
.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
} */


/* css animation */
/* .bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
} */
.gsap-box {
    width: 30px;
    height: 30px;
    background-color: aqua;
    border-radius: 50%;
}


</style>