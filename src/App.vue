<template>
  <div class="min-h-full">
    <MainMenu />
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>
    </header>

    <Dashboard />
  </div>
</template>

<script lang="ts" setup>
import MainMenu from './components/MainMenu.vue';
import Dashboard from './pages/Dashboard.vue';
</script>
