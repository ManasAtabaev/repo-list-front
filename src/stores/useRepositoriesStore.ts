import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { ResponseData, Params } from '@/types';
import { RepoDataService } from '@/services';

export const useRepositoriesStore = defineStore('repositories', () => {
  const state = reactive<ResponseData>({
    incomplete_results: false,
    items: [],
    total_count: 0,
  });
  const isLoading = ref(false);
  const params = reactive<Params>({
    q: 'tetris',
    per_page: 10,
    page: 1,
  });

  async function retrieveRepos() {
    isLoading.value = true;
    try {
      const response = await RepoDataService.getAll(params);
      console.log(response);
      Object.assign(state, response.data);
    } catch (e) {
      console.error(e);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    state,
    isLoading,
    params,
    retrieveRepos,
  };
});
