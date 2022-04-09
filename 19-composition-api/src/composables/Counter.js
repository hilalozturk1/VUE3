import { ref, watch, computed } from "vue";
export default function () {
    const counter = ref(0);
    const oddOrEven = computed(() => (counter.value % 2 == 0 ? "even" : "odd"));
    watch([counter, oddOrEven], ([newC, new0], [oldC, old0]) => { console.log(new0, old0) })

    return { counter, oddOrEven };
}