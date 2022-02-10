import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Repo } from '@/types';
import { favoriteDataService } from '@/services';

export const useFavoritesStore = defineStore('favorites', () => {
  const data = ref<number[]>([]);
  const isLoading = ref(false);
  const isError = ref(false);

  async function fetchData() {
    isLoading.value = true;
    try {
      const response = await favoriteDataService.get();
      if (response.data.success) {
        data.value = response.data.result;
      }
    } catch (e) {
      console.error(e);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  }

  async function add(payload: Repo) {
    isLoading.value = true;
    try {
      const response = await favoriteDataService.create(payload);
      data.value.push(payload.id);
    } catch (e) {
      console.error(e);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    data,
    isLoading,
    fetchData,
    add,
  };
});
