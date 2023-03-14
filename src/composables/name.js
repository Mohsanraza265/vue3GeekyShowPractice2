// if we use one composable
// import { ref, onMounted, onUnmounted } from 'vue'
// import { faker } from '@faker-js/faker'

// export function useName() {
//     const firstName = ref("Mohsan");
//     const lastName = ref("Raza");

//     function updateName () {
//         firstName.value = faker.name.firstName();
//         lastName.value = faker.name.lastName();
//     }

//     onMounted( () => window.addEventListener
//     ("mousemove", updateName ));

//     onUnmounted( () => window.removeEventListener
//     ("mousemove", updateName ))

//     return {
//         firstName,
//         lastName
//     }

// }



import { ref } from 'vue'
import { faker } from '@faker-js/faker'
import { useEventListener } from './event';

export function useName() {
    const firstName = ref("Mohsan");
    const lastName = ref("Raza");

    // function updateName () {
    //     firstName.value = faker.name.firstName();
    //     lastName.value = faker.name.lastName();
    // }

   // if use here other composable then
    useEventListener(window, 'mousemove', () => {
        firstName.value = faker.name.firstName();
        lastName.value = faker.name.lastName();
    });

    return {
        firstName,
        lastName
    }

}