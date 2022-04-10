import { ref } from "vue";
export default function () {
    const title = ref("TITLE");
    const counter = ref(0);
    const inc = () => {
        counter.value++;
    }
    const alertMe = (info) => { console.log('info', info) }

    return {title, counter, inc, alertMe}
}