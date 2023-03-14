// composable function with ref

import { ref, isRef, unref, watchEffect } from "vue";

// using Async await
export function useFetch( url ) {
    const data = ref(null);
    const error = ref(null);
    const getData = async () => {
        // reset state before fetching
        data.value = null
        error.value = null
        try {
          const res = await fetch( unref(url) );
          const resData = await res.json();
          data.value = resData
        } catch (err) {
            error.value = err;
        }
    }

    if( isRef(url) ) {
        watchEffect(getData)
    } else {
        getData();
    }

    return { data, error }

}