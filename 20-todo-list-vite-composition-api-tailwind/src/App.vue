<template>
  <div class="w-screen h-screen bg-gray-400 pt-10">
    <div class="bg-gray-700 rounded-md shadow-md text-white w-1/3 mx-auto p-3">
      <h3 class="text-center text-2xl">TODO List</h3>
      
      <section class="mt-4">
        <input type="text" placeholder="What?" class="w-full p-2 bg-gray-700 border-[1px] border-gray-400 rounded-md">
      </section>

      <section class="mt-4">
        <div class="flex justify-between items-center even:bg-gray-600 px-2">
          <label for="completed" id="">
            <input type="checkbox" id="completed" class="mr-2"/>
            <span class="text-lg">Todo1</span>
          </label>
          <button class="bg-indigo-500 px-2 py-1 rounded-md active:bg-indigo-800">Delete</button>
        </div>

        <div class="text-green-300 px-2">Completed</div>
        <div class="text-red-400 px-2">Uncompleted</div>
      </section>

    </div>
  </div>
</template>