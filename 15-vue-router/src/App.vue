<template>
  <div class="container">
    <router-link to="/" class="nav-link" active-class="active">Home</router-link>
    <router-link to="/about" class="nav-link" active-class="active">About</router-link>
    <router-link to="/details/1213" class="nav-link" active-class="active">Details</router-link>
    <router-view></router-view>
  </div>
</template>
<style >
  .nav-link{
    padding: 5px 10px;
    text-decoration: none;
    border: 1px solid #fa6558;
    color: #fa6558;
    margin-right: 5px;
    display: inline-block;
    margin-top: 5px;
  }
  .active {
    background-color: #fa6558;
    color: white;
  }
</style>