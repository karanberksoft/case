<script lang="ts">
  import { activeButton } from "$lib/stores";
  import Dashboard from "../components/Dashboard.svelte";
</script>

{#if $activeButton == null}
  <Dashboard />
{:else if $activeButton == 1}
  <div
    class="min-h-[calc(100vh-4rem)] bg-[#F4F4F5] flex items-center justify-center"
  >
    <div class="container mx-auto p-4">
      <div class="flex flex-row gap-6 justify-start items-start">
        <div
          class="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
        >
          <div class="flex justify-between p-1">
            <div
              class="flex items-center justify-center w-6 h-6 ml-2 mt-2 rounded-full border border-[#E4E4E7]"
            >
              #1
            </div>
            <div class="flex items-center justify-center w-6 h-6 mr-2 mt-2">
              <img src="/assets/remove.svg" alt="" />
            </div>
          </div>
          <div
            class="w-full h-48 sm:h-56 md:h-64 bg-[url('assets/Upload.svg')] bg-cover bg-center"
          ></div>
          <div class="px-4 pt-3 flex items-start justify-start pb-3">
            <img src="assets/quill-pen.svg" alt="" class="pt-2" />
            <div
              class="flex justify-center items-center pt-2 pl-2 font-inter font-medium text-base text-[#71717A] leading-6"
            >
              Title
            </div>
          </div>
          <hr class="border-t border-gray-300" />
          <div class="px-4 pt-3 h-48 flex items-start justify-start pb-3">
            <img src="assets/play-list.svg" alt="" class="pt-2" />
            <div
              class="flex justify-center items-center pt-2 pl-2 font-inter font-medium text-base text-[#71717A] leading-6"
            >
            Story
            </div>
          </div>
          <hr class="border-t border-gray-300" />
          <div class="px-4 pt-3 flex items-start justify-start pb-3">
            <div class="flex">
              <img src="assets/atac.svg" alt="">
              <img src="assets/arti.svg" alt="" class="pl-2">
            </div>  
          </div>
          <hr class="border-t border-gray-300" />
          <div class="p-4 flex flex-row justify-between">
            <div>Comments</div>
            <div class="flex w-24 items-center justify-center">
              <img src="assets/arti1.svg" alt="">
             <span class="leading-5 text-[#71717A] text-sm"> Add New</span>
              
            </div>
          </div>
        </div>

        <div class="w-[366px] h-[655px] bg-[#DEDEE1] rounded-lg shadow-lg sm:w-[320px] md:w-[366px] flex justify-center items-center flex-col">
         <div><img src="assets/add-circle.svg" alt=""></div>
         <div class="text-[#71717A]">Click to Add New Story</div>
        </div>

      </div>
    </div>
  </div>
{:else if $activeButton == 2}

{:else if $activeButton == 3}
  <div>active button 3</div>
{/if}
