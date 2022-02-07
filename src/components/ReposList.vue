<template>
  <div class="hello">
    <p>
      <input
        type="text"
        class="form-control"
        placeholder="Search by title"
        v-model="params.q"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        @click="retrieveRepos"
      >
        Search
      </button>
    </p>

    <h4>Repos List</h4>
    <ul class="list-group">
      <li class="list-group-item" v-for="(repo, index) in repos" :key="index">
        {{ repo.full_name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Options, Vue } from 'vue-class-component';
import { RepoDataService } from '@/services';
import { ResponseData, Repo } from '@/types';

export default defineComponent({
  name: 'repos-list',
  data() {
    return {
      repos: [] as Repo[],
      params: {
        q: 'tetris',
        per_page: 10,
        page: 1,
      },
    };
  },
  methods: {
    retrieveRepos() {
      RepoDataService.getAll(this.params)
        .then((response: ResponseData) => {
          this.repos = response.data['items'];
          console.log(this.repos);
          console.log(response.data['items']);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveRepos();
  },
});
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
