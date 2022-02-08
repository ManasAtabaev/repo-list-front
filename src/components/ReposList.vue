<template>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <div
            class="input-group relative flex flex-wrap items-stretch w-full mb-4"
          >
            <input
              type="search"
              placeholder="Search by title"
              v-model="repositories.params.q"
              class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Search"
              aria-describedby="button-addon3"
            />
            <button
              @click="repositories.retrieveRepos(true)"
              class="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              type="button"
              id="button-addon3"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div class="mb-4 text-center text-red-900" v-if="repositories.isError">
        Something went wrong ...
      </div>

      <div class="flex flex-col mb-4" v-if="repositories.data">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
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
                  <tr v-for="(item, index) in repositories.data" :key="index">
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
                          class="h-5 w-5 text-grey-500 hover:text-red-500 cursor-pointer inline-block"
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

      <Loader v-if="repositories.isLoading" />

      <div class="text-right">
        <button
          @click="repositories.loadMore()"
          v-if="!repositories.isLastPage()"
          class="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          type="button"
          id="button-addon3"
        >
          Load More...
        </button>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import Loader from './Loader';
import { useRepositoriesStore } from '@/stores';
import { HeartIcon } from '@heroicons/vue/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/vue/solid';

const repositories = useRepositoriesStore();
repositories.retrieveRepos(true);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-group > .form-control {
  width: 1%;
}
</style>
