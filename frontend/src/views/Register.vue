<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <form @submit.prevent="register" class="bg-white p-6 rounded shadow w-full max-w-md">
      <h2 class="text-2xl font-bold mb-4 text-center">Register</h2>

      <input v-model="name" placeholder="Name" class="w-full p-2 mb-3 border rounded" />
      <input v-model="email" type="email" placeholder="Email" class="w-full p-2 mb-3 border rounded" />
      <input v-model="password" type="password" placeholder="Password" class="w-full p-2 mb-4 border rounded" />

      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded">Register</button>

      <p v-if="message" :class="{'text-green-600': success, 'text-red-600': !success}" class="mt-3">
        {{ message }}
      </p>
    </form>
  </div>
</template>

<script>
import api from "../api/api";

export default {
  data() {
    return { name: "", email: "", password: "", message: "", success: false };
  },
  methods: {
    async register() {
      try {
        const res = await api.post("/auth/register", {
          name: this.name,
          email: this.email,
          password: this.password
        });
        this.message = res.data.message;
        this.success = true;
      } catch (err) {
        this.message = err.response?.data?.message || "Failed to register";
        this.success = false;
      }
    }
  }
};
</script>
