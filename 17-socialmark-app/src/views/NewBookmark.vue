<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Add New</h3>
    <input type="text" placeholder="Title" class="input mb-3" />
    <input type="text" placeholder="URL" class="input mb-3" />
    <select class="input mb-3">
      <option disabled value="" selected>Categori</option>
      <option value="">Vue</option>
      <option value="">React</option>
      <option value="">Social</option>
    </select>
    <textarea
      placeholder="Description"
      class="input mb-3"
      cols="30"
      rows="10"
    ></textarea>
    <div class="flex items-center justify-end gap-x-1">
      <button class="secondary-button">Cancel</button>
      <button class="default-button">Save</button>
    </div>
  </div>
</template>