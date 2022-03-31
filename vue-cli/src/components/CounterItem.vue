<template>
    <div class="container-sm">
        <h3> {{counter}} </h3>
        <button @click="counter++" class="red">+</button>
        <button @click="counter--" class="green">-</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            counter : 0
        }
    },
}
</script>