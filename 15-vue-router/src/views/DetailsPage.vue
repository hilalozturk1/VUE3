<template>
    <h3>Details</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p> {{$route.params.userID}} </p>
    <button @click="$router.push('/')">Back</button>
</template>
<script>
export default {
    created() {
        console.log(this.$route);
        //console.log(this.$router); navigation
    },
}
</script>