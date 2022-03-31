<template>
    <small class="mt-2 d-flex justify-content-end" >There are {{itemCount}} todo</small>
</template>
<script>
export default {
    props : ["itemCount"]
}
</script>