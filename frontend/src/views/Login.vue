<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <form @submit.prevent="login" class="bg-white p-6 rounded shadow w-full max-w-md">
      <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>

      <input v-model="email" type="email" placeholder="Email"
        class="w-full p-2 mb-3 border rounded" />

      <input v-model="password" type="password" placeholder="Password"
        class="w-full p-2 mb-4 border rounded" />

      <button class="w-full bg-blue-600 text-white py-2 rounded">
        Login
      </button>

      <p class="mt-3 text-center text-sm">
        No account?
        <span @click="$router.push('/register')" class="text-blue-600 cursor-pointer">
          Register
        </span>
      </p>
    </form>
  </div>
</template>

<script>
import api from "../api/api";

export default {
  data() {
    return { email: "", password: "" };
  },
  methods: {
    async login() {
      try {
        const res = await api.post("/auth/login", {
          email: this.email,
          password: this.password
        });

        localStorage.setItem("token", res.data.token);
        this.$router.push("/dashboard");
      } catch {
        alert("Invalid credentials");
      }
    }
  }
};
</script>
