import { defineStore } from 'pinia';
import { ref, reactive, computed } from 'vue';
import { ResponseData, Params } from '@/types';
import { Repository } from '@/models';
import { RepoDataService } from '@/services';

export const useRepositoriesStore = defineStore('repositories', () => {
  const data = ref<Repository[]>([]);
  const total_count = ref(0);
  const isLoading = ref(false);
  const isError = ref(false);
  const maxPage = computed(() =>
    total_count.value > 0 ? Math.ceil(total_count.value / params.per_page) : 0
  );
  const params = reactive<Params>({
    q: 'tetris',
    per_page: 10,
    page: 1,
  });
  const isLastPage = computed(() => params.page >= maxPage.value);

  async function retrieveRepos(refresh: boolean) {
    isLoading.value = true;
    if (refresh) {
      reset();
    }
    try {
      if (params.q) {
        const response = await RepoDataService.getAll(params);
        setData(response.data);
      }
    } catch (e) {
      console.error(e);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  }

  function reset() {
    data.value = [];
    total_count.value = 0;
    params.page = 1;
    isError.value = false;
  }

  function setData(response: ResponseData) {
    for (const item of response.items) {
      data.value.push(new Repository(item));
    }
    // data.value = data.value.concat(response.data.items);
    total_count.value = response.total_count;
  }

  function loadMore() {
    if (!isLastPage.value) {
      params.page++;
      retrieveRepos(false);
    }
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
