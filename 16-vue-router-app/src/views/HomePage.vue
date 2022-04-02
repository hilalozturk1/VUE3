<template>
    <button class="btn btn-primary btn-sm" @click="$router.push({name:'NewBookmark'})">+ New Add</button>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">URL</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="i in 10" :key="i">
                <th scope="row">1</th>
                <td>Vue3</td>
                <td>https://v3.vuejs.org</td>
                <td>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>