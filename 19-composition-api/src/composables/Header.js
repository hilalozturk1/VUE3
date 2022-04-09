import { ref, computed } from "vue";
export default function () {
    const title = ref("Setup Title") // needs to return an object
    const titleLengthMessage = computed(() => {
        return title.value.length + "character"
    });

    return { title, titleLengthMessage };
}