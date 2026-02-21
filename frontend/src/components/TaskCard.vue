<template>
  <div class="bg-white shadow rounded p-4">
    <h3 class="font-semibold text-lg">{{ task.title }}</h3>
    <p class="text-gray-600">{{ task.description }}</p>
    <div class="mt-3 flex gap-2">
      <button @click="$emit('delete', task.id)" class="text-red-500">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"]
};
</script>
