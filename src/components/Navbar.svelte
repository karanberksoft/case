<script lang="ts">
  import Modal from "./Modal.svelte";
  import { activeButton } from '$lib/stores';
  export let setActiveButton : (buttonIndex: number)  => void

  let isOpen = false;

  const toggleDropdown = () => {
    isOpen = !isOpen;
  };
  
  let version: string = "V1";
  
  const setVersion = (versionIndex: string): void => {
    version = versionIndex;
  };

  let isMobileModalOpen: boolean = false;

  const openModal = (): void => {
    isMobileModalOpen = true;
  };

  const closeMobileModal = (): void => {
    isMobileModalOpen = false;
  };
</script>

<nav
  class="bg-white dark:bg-gray-900  w-full z-20 top-0 start-0 border-b border-gray-200"
>
  <div class="flex flex-wrap items-center justify-between mx-auto p-4">
    <div class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/assets/Vector.svg" alt="Logo" class="h-8 w-8" />
      <div class="h-16 w-px bg-gray-300 hidden md:block"></div>
      <span
        class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden md:block"
        >Lesson</span
      >

      <div class="relative inline-block text-left hidden md:block">
        <div>
          <button
            type="button"
            class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            id="menu-button"
            on:click={toggleDropdown}
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            {version}
            <svg
              class="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        {#if isOpen}
          <div
            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <div
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                on:click={() => setVersion("V1")}
              >
                V1
              </div>
              <div
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                on:click={() => setVersion("V0")}
              >
                V0
              </div>
            </div>
          </div>
        {/if}
      </div>
      <div class="flex justify-center items-center">
        <button class="w-5 hidden md:block">
          <img src="/assets/DownIcon.svg" alt="Logo" class="h-8 w-8 mr-2" />
        </button>
      </div>
    </div>

    <div
      class="h-[44px] bg-[#F4F4F5] rounded-lg flex justify-center gap-2 px-2 hidden md:flex"
    >
      <div class={"flex justify-center items-center"}>
        <button
          class={`py-2 px-4 rounded-lg ${$activeButton === 1 ? "bg-[#FFFFFF] text-[#09090B]" : "bg-[#F4F4F5] text-[#71717A]"}`}
          on:click={() => setActiveButton(1)}
        >
          Storyboard</button
        >
      </div>
      <div class={"flex justify-center items-center"}>
        <button
          class={`py-2 px-4 rounded-lg ${$activeButton === 2 ? "bg-[#FFFFFF] bg-[#FFFFFF]" : "bg-[#F4F4F5] text-[#71717A]"}`}
          on:click={() => setActiveButton(2)}
        >
          Draft</button
        >
      </div>
      <div class={`flex justify-center items-center`}>
        <button
          class={` flex justify-center items-center py-2 px-4 rounded-lg ${$activeButton === 3 ? "bg-[#FFFFFF] bg-[#FFFFFF]" : "bg-[#F4F4F5] text-[#71717A]"}`}
          on:click={() => setActiveButton(3)}
          ><img
            src="/assets/gm.svg"
            alt="Logo"
            class="h-5 w-5 mr-2"
          />Review</button
        >
      </div>
    </div>
    <div class="flex gap-1">
      <button
        type="button"
        class="text-black font-medium rounded-lg text-sm text-center w-9 h-9 flex justify-center items-center"
      >
        <img src="/assets/LeftIcon.svg" alt="" /></button
      >
      <button
        type="button"
        class="text-black font-medium rounded-lg text-sm text-center w-9 h-9 flex justify-center items-center"
      >
        <img src="/assets/RightIcon.svg" alt="" /></button
      >
      <button
        type="button"
        on:click={openModal}
        class="text-black font-medium rounded-lg text-sm text-center w-9 h-9 sm:block md:hidden flex justify-center items-center"
      >
        <img src="/assets/more.svg" alt="" /></button
      >
      <button
        type="button"
        class="text-black font-medium rounded-lg text-sm text-center w-9 h-9 flex justify-center items-center"
      >
        <img src="/assets/button.svg" alt="" /></button
      >

      <button
        type="button"
        class="text-black font-medium rounded-lg text-sm text-center w-9 h-9 border-solid border-2 flex justify-center items-center"
      >
        <img src="/assets/share.svg" alt="" /></button
      >
      <button
        type="button"
        class="text-white bg-[#42B52E] none font-medium rounded-lg text-sm text-center w-20 h-9"
        >Submit</button
      >
    </div>
  </div>

  <hr class="border-t border-gray-300 my-4 md:hidden" />

  <div class="flex flex-wrap items-center justify-center mx-auto p-4 md:hidden">
    <div
      class="h-[44px] bg-[#F4F4F5] rounded-lg flex justify-center gap-2 px-2"
    >
      <div class={"flex justify-center items-center"}>
        <button
          class={`py-2 px-4 rounded-lg ${$activeButton === 1 ? "bg-[#FFFFFF] text-[#09090B]" : "bg-[#F4F4F5] text-[#71717A]"}`}
          on:click={() => setActiveButton(1)}
        >
          Storyboard</button
        >
      </div>
      <div class={"flex justify-center items-center"}>
        <button
          class={`py-2 px-4 rounded-lg ${$activeButton === 2 ? "bg-[#FFFFFF] bg-[#FFFFFF]" : "bg-[#F4F4F5] text-[#71717A]"}`}
          on:click={() => setActiveButton(2)}
        >
          Draft</button
        >
      </div>
      <div class={`flex justify-center items-center`}>
        <button
          class={` flex justify-center items-center py-2 px-4 rounded-lg ${$activeButton === 3 ? "bg-[#FFFFFF] bg-[#FFFFFF]" : "bg-[#F4F4F5] text-[#71717A]"}`}
          on:click={() => setActiveButton(3)}
          ><img
            src="/assets/gm.svg"
            alt="Logo"
            class="h-5 w-5 mr-2"
          />Review</button
        >
      </div>
    </div>
  </div>
</nav>
<Modal
  {setVersion}
  {version}
  isOpen={isMobileModalOpen}
  onClose={closeMobileModal}
/>
