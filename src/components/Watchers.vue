<template>
    <div>
        <h2 style="color: red;">Watchers</h2>

        <!-------------------------- for ref only -->
        <h2>Heart Rate Tracking System</h2>
        <!-- <h2 v-if="heartRate > 0">Heart Beats per Minute: {{ heartRate }}</h2>
        <h2 v-if="heartRate <= 0">Sorry You are Dead...  {{ heartRate }} </h2>
        <button @click="heartRate += 5">Increase</button>
        <button @click="heartRate -= 5">Decrease</button> -->

        <!-------------------------- for reactive only -->
        <!-- <h2>Heart Rate Tracking System</h2>
        <h2 v-if="state.heartRates > 0">Heart Beats per Minute: {{ state.heartRates }}</h2>
        <h2 v-if="state.heartRates <= 0">Sorry You are Dead...  {{ state.heartRates }} </h2>
        <button @click="state.heartRates += 5">Increase</button>
        <button @click="state.heartRates -= 5">Decrease</button> -->

         <!-------------------------- for reactive only with getter function -->
         <!-- <h2>Heart Rate Tracking System</h2>
        <h2 v-if="state.heartRates > 0">Heart Beats per Minute: {{ state.heartRates }}</h2>
        <h2 v-if="state.heartRates <= 0">Sorry You are Dead...  {{ state.heartRates }} </h2>
        <button @click="state.heartRates += 5">Increase</button>
        <button @click="state.heartRates -= 5">Decrease</button> -->

        <!-------------------------- for Multiple Data sourse An Array  -->
        <!-- <h2 v-if="heartRates > 0">Heart Beats per Minute: {{ heartRates }} Fear {{ fear }}</h2>
        <h2 v-if="heartRates <= 0">Sorry You are Dead...  {{ heartRates }} </h2>
        <button @click="increaseHeartRatesFear">Increase</button>
        <button @click="decreaseHeartRatesFear">Decrease</button> -->


        <!--------------------------------------------------- Immediate -->
        <!-- <h3>Count : {{ count }}</h3>
        <button @click="count++">Change Data</button> -->


        <!--------------------------------------------------- Deep -->
        <h3>Hospital Charge : {{ state.patient.bedCharge }}</h3>
        <button @click="state.patient.bedCharge += 500">Change Room</button><br /><br />

        <!-- // for watchEffect -->
        <button @click="count++">Change watchEffect</button>
    </div>
</template>

<script setup>

    import { ref, reactive, watch, watchEffect } from 'vue';

// In ref
    // const heartRate = ref(85);
    // watch(heartRate, ( newHeartValue , oldHeartValue ) => {
    //     console.log( "NewValue", newHeartValue );
    //     console.log( "OldValue", oldHeartValue );
    //     if( newHeartValue > oldHeartValue && newHeartValue >= 120 ){
    //         alert("Calm Down.. Take Deep Breath...... Breath In.... Breath out....");
    //     }
    // });


// In reactive
    // const state = reactive({
    //     heartRates : 85
    // })

    // watch(state, ( newHeartValue , oldHeartValue ) => {
    //     console.log( "NewValue", newHeartValue.heartRates );
    //     console.log( "OldValue", oldHeartValue );
    //     if( newHeartValue.heartRates >= 120 ){
    //         alert("Calm Down.. Take Deep Breath...... Breath In.... Breath out....");
    //     }
    // });
    
// In reactive with getter function b/c if we want to add some feature 

// const state = reactive({
//         heartRates : 85
// })
// // this is getter function () => state.heartRates
//     watch( () => state.heartRates, ( newHeartValue , oldHeartValue ) => {
//         console.log( "NewValue", newHeartValue );
//         console.log( "OldValue", oldHeartValue );
//         if( newHeartValue >= 120 ){
//             alert("Calm Down.. Take Deep, Breath...... Breath, In.... Breath out....");
//         }
//     });


// Multiple data Sourse - An Array 

// const heartRates = ref(85);
// const fear = ref(10);

// watch([heartRates, fear], ( newHeartValue , oldHeartValue ) => {
//     console.log( "NewValue", newHeartValue[0] );
//     console.log( "OldValue", oldHeartValue[1] );
// })

// function increaseHeartRatesFear() {
//     heartRates.value += 5;
//     fear.value += 5;
// }
// function decreaseHeartRatesFear() {
//     heartRates.value -= 5;
//     fear.value -= 5;
// }

//  Keywords (Immediate, Deep, ) which we use in watch...................
// Immediate

// watch call only when change any property But if we want to call on reload window then we use keyword (Immediate) as a third arguments


    // const count = ref(0)
    // watch(count, async(newValue, oldValue) => {
    //         try {
    //             const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    //             const data = await res.json();
    //             console.log(data)
    //         } catch (error) {
    //             console.log("Error could not reach API" + error)
    //         }
    //     }, 
    //     {
    //         immediate: true
    //     }
    // )


    // Deep
    const state = reactive({
        heartRate : 85,
        fear : 10,
        patient: { bedCharge : 500 },
    })
    watch( () => state, ( newHeartValue , oldHeartValue ) => {
            console.log( "NewValue", newHeartValue );
            console.log( "OldValue", oldHeartValue );
            
        },
        {
            deep: true
        }
    );

    // watchEffect 
    const count = ref(0);
    watchEffect( () => console.log( "Count : ", count.value ) );
    

</script>