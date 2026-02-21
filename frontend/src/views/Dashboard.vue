<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar />

    <div class="p-4 max-w-4xl mx-auto">
      <div class="flex flex-col md:flex-row gap-2 mb-4">
        <input v-model="title" placeholder="Task title"
          class="flex-1 p-2 border rounded" />
        <input v-model="description" placeholder="Description"
          class="flex-1 p-2 border rounded" />
        <button @click="addTask"
          class="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        <TaskCard
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @delete="deleteTask"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import TaskCard from "../components/TaskCard.vue";
import api from "../api/api";

export default {
  components: { Navbar, TaskCard },
  data() {
    return {
      tasks: [],
      title: "",
      description: ""
    };
  },
  async mounted() {
    this.fetchTasks();
  },
  methods: {
    async fetchTasks() {
      const res = await api.get("/tasks");
      this.tasks = res.data;
    },
    async addTask() {
      await api.post("/tasks", {
        title: this.title,
        description: this.description
      });
      this.fetchTasks();
      this.title = "";
      this.description = "";
    },
    async deleteTask(id) {
      await api.delete(`/tasks/${id}`);
      this.fetchTasks();
    }
  }
};
</script>
