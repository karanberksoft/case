<script lang="ts">
    export let isOpen: boolean = false;
    export let onClose: () => void;
    export let setVersion: (versionIndex: string) => void;
    export let version: string = "V1";
    const closeModal = (): void => {
      onClose(); 
    };
  </script>
  
  {#if isOpen}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end  md:hidden" on:click={closeModal}>
      <div class="bg-white w-full p-4 rounded-t-lg" on:click|stopPropagation>
        <div class="flex  items-center gap-2">
          <h2 class="text-lg font-bold mb-2">Lesson Name </h2>
          <img src="assets/kalem.svg" alt="">
        </div>
        <hr class="border-t border-gray-300 my-4"/>
        <button class={`w-full py-2 px-4 text-black font-semibold rounded-lg ${version === "V1" ? " bg-[#F4F4F5]" : "bg-[#FFFFFF]"}`} 
        on:click={() => setVersion("V1")}>
          V1
        </button>
        <button class={`w-full py-2 px-4 text-black font-semibold rounded-lg ${version === "V0" ? " bg-[#F4F4F5]" : "bg-[#FFFFFF]"}`}
        on:click={() => setVersion("V0")}>
          V0
        </button>
        
      </div>
    </div>
  {/if}
  