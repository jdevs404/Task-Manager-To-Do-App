<template>
  <nav class="bg-blue-600 text-white p-4 flex justify-between items-center">
    <h1 class="font-bold text-lg">Task Manager</h1>
    <button @click="logout" class="bg-white text-blue-600 px-3 py-1 rounded">
      Logout
    </button>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    }
  }
};
</script>
