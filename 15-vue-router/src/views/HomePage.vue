<template>
    <h3>Home</h3>
    <input type="text" @keydown.enter="goToDetails">
</template>
<script>
export default {
    methods: {
        goToDetails(event){
            //this.$router.push("/details/"+event.target.value);
            this.$router.push({
                name: "DetailsPage",
                params : {
                    userID: event.target.value
                }
            })
        }
    },
}
</script>