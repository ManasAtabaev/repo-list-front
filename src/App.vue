<template>
  <div class="min-h-full">
    <MainMenu />
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>
    </header>
    <ReposList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MainMenu from './components/MainMenu.vue';
import ReposList from './components/ReposList.vue';

@Options({
  components: {
    MainMenu,
    ReposList,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
}
</style>
