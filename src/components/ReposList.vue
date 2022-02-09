<template>
  <div class="flex flex-col mb-4">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Owner
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                >
                  Size (b)
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                >
                  Estimated Download Time
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                ></th>
              </tr>
            </thead>
            <tbody class="table-auto bg-white divide-y divide-gray-200">
              <tr v-for="(item, index) in props.data" :key="index">
                <td class="px-6 py-4 whitespace-nowrap text-right">
                  <div class="text-sm font-medium text-gray-900">
                    <a
                      target="_blank"
                      :href="item.html_url"
                      class="no-underline hover:underline text-blue-500"
                    >
                      {{ item.full_name }}
                    </a>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    <a
                      target="_blank"
                      :href="item.owner.html_url"
                      class="no-underline hover:underline text-blue-500"
                    >
                      {{ item.owner.login }}
                    </a>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <div class="text-sm text-gray-900">
                    {{ item.size }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <div class="text-sm text-gray-900">
                    {{ item.estDownloadTime() }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    <HeartIcon
                      v-if="!favorites.data.includes(item.id)"
                      @click="handleFavorite(item)"
                      class="h-5 w-5 text-grey-500 hover:text-red-500 cursor-pointer inline-block"
                    />
                    <SolidHeartIcon
                      v-if="favorites.data.includes(item.id)"
                      class="h-5 w-5 text-red-500 inline-block"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { HeartIcon } from '@heroicons/vue/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/vue/solid';
import { useFavoritesStore } from '@/stores';
import { Repo } from '@/types';

interface Props {
  data: Repo[];
}

const props = defineProps<Props>();
const favorites = useFavoritesStore();
favorites.fetchData();

function handleFavorite(payload: Repo) {
  favorites.add(payload);
}
</script>
