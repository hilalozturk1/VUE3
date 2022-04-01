<template>
    <h3 class="bg-red"> {{msg}} </h3>
</template>
<script>
export default {
    props : ["msg"],
    mounted() {
        console.log("red mounted")
    },
}
</script>