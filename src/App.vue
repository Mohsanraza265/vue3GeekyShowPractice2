<template>
  <div>
    <LifeCycleHooks v-if="showHelloComp" />
    <button @click="showHelloComp =! showHelloComp">Show/Hide</button>
    <h3>Count : {{ count }}</h3>
    <button @click="count++">click</button>

    <Watchers />
    <TemplateRef />
    <h2 color="red">Parent Async Components</h2>
    <AsyncUserComp v-if="showUser" />
    <!---------------------------- for show & Hide AsyncUserComp -->
    <button @click="showUser =! showUser">
      Show/Hide
    </button>


    <ComposableExp />
    <CustomDirective />
    <TransitionAnimation />
    <TransitionAnim />
    <DynamicParentCompo />
    
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
  ref,
  defineAsyncComponent

} from 'vue';
import ComposableExp from './components/ComposableExp.vue';
import CustomDirective from './components/CustomDirective.vue';
import LifeCycleHooks from './components/LifeCycleHooks.vue'
import TemplateRef from './components/TemplateRef.vue';
import TransitionAnimation from './components/TransitionAnimation.vue';
import TransitionAnim from './components/TransitionAnim.vue'
import Watchers from './components/Watchers.vue';
import DynamicParentCompo from './components/DynamicParentCompo.vue';


const showHelloComp = ref(true)
const count = ref(0)

// Async Component
const AsyncUserComp = defineAsyncComponent(() => 
  import("./components/AsyncComponents.vue")
);

const showUser = ref(false)

onBeforeMount(() => {
  console.log("OnBeforeMounted Called - Parent")
});
onMounted(() => {
  console.log("onMounted Called - Parent")
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate Called - Parent")
});
onUpdated(() => {
  console.log("onUpdated Called - Parent")
});
onBeforeUnmount(() => {
  console.log("onBeforeUnmount Called - Parent")
});
onUnmounted(() => {
  console.log("onUnmounted Called - Parent")
});


</script>
