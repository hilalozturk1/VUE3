import { ref, onMounted } from "vue";
export default function () {
    const title = ref("TITLE");
    const counter = ref(0);
    const inc = () => {
        counter.value++;
    }
    const alertMe = (info) => { console.log('info', info) }

    onMounted(() => {
        console.log("onMounted func.")
    })
    return {title, counter, inc, alertMe}
}