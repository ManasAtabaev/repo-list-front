<template>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <BaseSearch @search="handleSearch" :q="repositories.params.q" />

      <div class="mb-4 text-center text-red-900" v-if="repositories.isError">
        Something went wrong ...
      </div>

      <ReposList :data="repositories.data" />

      <Loader v-if="repositories.isLoading" />

      <div class="text-right">
        <button
          @click="handleLoadMore"
          v-if="!repositories.isLastPage"
          class="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          type="button"
        >
          Load More...
        </button>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import BaseSearch from '@/components/BaseSearch';
import Loader from '@/components/Loader';
import ReposList from '@/components/ReposList';
import { useRepositoriesStore } from '@/stores';

const repositories = useRepositoriesStore();
repositories.retrieveRepos(true);

function handleSearch(q: string) {
  repositories.params.q = q;
  repositories.retrieveRepos(true);
}

function handleLoadMore() {
  repositories.loadMore();
}
</script>
