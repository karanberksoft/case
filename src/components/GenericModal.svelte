<!-- src/lib/Modal.svelte -->
<script>
    export let show = false;
    export let close = () => {};
    export let title = "Modal Title";
  </script>
  
  {#if show}
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <!-- Background Overlay -->
      <div class="absolute inset-0 bg-gray-900 opacity-50" on:click={close}></div>
  
      <!-- Modal Content -->
      <div class="bg-white p-6 rounded-lg shadow-lg z-10 w-[640px] overflow-auto">
        <h2 class="text-xl font-bold mb-4">{title}</h2>
        <slot></slot> 
      </div>
    </div>
  {/if}
  