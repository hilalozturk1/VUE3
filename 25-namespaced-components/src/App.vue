<script setup>
// import Input from "./components/Forms/Input.vue"
// import Label from "./components/Forms/Label.vue"
// import Select from "./components/Forms/Select.vue"
import * as Form from "./components/form-components";
</script>
<template>
  <!-- <Label>
    Title
    <Input />
  </Label>
  <Label>
    Category
    <Select />
  </Label> -->
  <Form.Label>
    Title
    <Form.Input />
  </Form.Label>
  <Form.Label>
    Category
    <Form.Select />
  </Form.Label>
</template>