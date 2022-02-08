import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { Repo, Params } from '@/types';
import { Repository } from '@/models';
import { RepoDataService } from '@/services';

export const useRepositoriesStore = defineStore('repositories', () => {
  const data = ref<Repository[]>([]);
  const total_count = ref(0);
  const isLoading = ref(false);
  const isError = ref(false);
  const maxPage = ref(0);
  const params = reactive<Params>({
    q: 'tetris',
    per_page: 10,
    page: 1,
  });

  async function retrieveRepos(refresh: boolean) {
    isLoading.value = true;
    if (refresh) {
      data.value = [];
      isError.value = false;
    }
    try {
      if (params.q) {
        const response = await RepoDataService.getAll(params);
        for (const item of response.data.items) {
          data.value.push(new Repository(item));
        }
        // data.value = data.value.concat(response.data.items);
        total_count.value = response.data.total_count;
        if (refresh) {
          maxPage.value = Math.ceil(total_count.value / params.per_page);
        }
      }
    } catch (e) {
      console.error(e);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  }

  function loadMore() {
    if (!isLastPage()) {
      params.page++;
      retrieveRepos(false);
    }
  }

  function isLastPage() {
    return params.page >= maxPage.value;
  }

  return {
    data,
    total_count,
    isLoading,
    params,
    retrieveRepos,
    loadMore,
    isLastPage,
  };
});
