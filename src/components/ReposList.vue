<template>
  <div class="hello">
    <p>
      <input
        type="text"
        class="form-control"
        placeholder="Search by title"
        v-model="repositories.params.q"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        @click="repositories.retrieveRepos"
      >
        Search
      </button>
    </p>

    <div v-if="!repositories.isLoading">
      <h4>Repos List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(repo, index) in repositories.state.items"
          :key="index"
        >
          {{ repo.full_name }}
          {{ repo.size }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRepositoriesStore } from '@/stores';
const repositories = useRepositoriesStore();
repositories.retrieveRepos();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
