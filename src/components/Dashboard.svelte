<script lang="ts">
  import GenericModal from "./GenericModal.svelte";
  let selectedOption = "file";
  let showModal = false;

  function toggleModal() {
    showModal = !showModal;
  }

  let showIA = false;

  function toggleIA() {
    showIA = !showIA;
  }

  let droppedFiles: any[] = [];

  function handleDrop(event: any) {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    droppedFiles = files;
    console.log(droppedFiles); // Dosyalar ile işlem yapabilirsiniz
  }

  function handleDragOver(event: any) {
    event.preventDefault();
  }

  function handleFiles(event: any) {
    const files = Array.from(event.target.files);
    droppedFiles = files;
    console.log(droppedFiles); // Dosyalar ile işlem yapabilirsiniz
  }

  function removeFile(index: any) {
    droppedFiles = droppedFiles.filter((_, i) => i !== index);
  }

  let isChecked = false;

  function toggle() {
    isChecked = !isChecked;
  }

  let lessonType = "Training";
  let lessonFor = "Employees";
  let tone = "Professional";

  // Seçim değiştirici fonksiyonlar
  function selectLessonType(type: any) {
    lessonType = type;
  }

  function selectLessonFor(target: any) {
    lessonFor = target;
  }

  function selectTone(toneType: any) {
    tone = toneType;
  }

  let stories:any[] = [];

  function addStory() {
    stories = [...stories, { id: stories.length + 1 }];
  }
</script>

<div
  class="min-h-[calc(100vh-4rem)] bg-[#F4F4F5] flex items-center justify-center"
>
  <div class="container mx-auto p-4">
    <div class="flex flex-col lg:flex-row gap-6 justify-center items-center">
      <div
        class="bg-white shadow-lg rounded-2xl overflow-hidden flex lg:flex-col sm:flex-row"
      >
        <img
          src="assets/AI.svg"
          alt="Image 1"
          class="w-full h-50 object-cover p-3"
        />
        <div class="p-4 flex flex-col justify-between">
          <h2
            class="text-lg font-bold mb-2 leading-9 font-inter font-medium font-size: 1.5rem text-[#18181B]"
          >
            Generate with AI
          </h2>
          <p class="text-gray-700 mb-4 text-[#71717A] font-inter">
            Use AI to create storyboard
          </p>
          <button
            class="rounded-lg w-[85px] h-[36px] bg-[#42B52E] text-white"
            on:click={toggleIA}>Create</button
          >
        </div>
      </div>

      <div
        class="bg-white shadow-lg rounded-2xl overflow-hidden flex lg:flex-col sm:flex-row"
      >
        <img
          src="assets/File.svg"
          alt="Image 2"
          class="w-full h-50 object-cover p-3"
        />
        <div class="p-4 flex flex-col justify-between">
          <h2
            class="text-lg font-bold mb-2 leading-9 font-inter font-medium font-size: 1.5rem text-[#18181B]"
          >
            Start with File
          </h2>
          <p class="text-gray-700 mb-4 text-[#71717A] font-inter">
            Import files to create storyboard from
          </p>
          <button
            class="rounded-lg w-[85px] h-[36px] bg-black text-white"
            on:click={toggleModal}>Import</button
          >
        </div>
      </div>

      <div
        class="bg-white shadow-lg rounded-2xl overflow-hidden flex lg:flex-col sm:flex-row"
      >
        <img
          src="assets/Manually.svg"
          alt="Image 3"
          class="w-full h-50 object-cover p-3"
        />
        <div class="p-4 flex flex-col justify-between">
          <h2
            class="text-lg font-bold mb-2 leading-9 font-inter font-medium font-size: 1.5rem text-[#18181B]"
          >
            Create Manually
          </h2>
          <p class="text-gray-700 mb-4 text-[#71717A] font-inter">
            Create storyboard from scratch
          </p>
          <button class="rounded-lg w-[85px] h-[36px] bg-black text-white"
            >Start</button
          >
        </div>
      </div>
    </div>
  </div>
</div>
<GenericModal show={showIA} close={toggleIA} title="Generate with AI">
  <div>
    <div>
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-[#71717A] text-sm font-normal"
        >What should this lesson be about?</label
      >
      <textarea
        id="message"
        rows="7"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Create a storyboard for a customer education lesson on designing an effective curriculum using our platform. Highlight the process of creating courses, organizing materials, and sharing content with learners, incorporating visual elements and step-by-step guides."
      ></textarea>
    </div>
    {#if isChecked == true}
      <div class="mt-4">
        <div class="space-y-6">
          <!-- Lesson Type -->
          <div>
            <h3 class="mb-2 font-semibold">Lesson Type</h3>
            <div class="flex space-x-2">
              {#each ["Training", "Marketing", "Explainer", "Product Tour", "Corporate"] as type}
                <button
                  class={`w-[100px] font-normal text-sm leading-4 px-4 py-2 rounded-lg ${lessonType === type ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
                  on:click={() => selectLessonType(type)}
                >
                  {type}
                </button>
              {/each}
            </div>
          </div>

          <!-- Lesson For -->
          <div>
            <h3 class="mb-2 font-semibold">Lesson For</h3>
            <div class="flex space-x-2">
              {#each ["Customers", "Employees", "Partners", "Sales Enablement"] as target}
                <button
                  class={`w-[100px] font-normal text-sm leading-4 px-4 py-2 rounded-lg ${lessonFor === target ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
                  on:click={() => selectLessonFor(target)}
                >
                  {target}
                </button>
              {/each}
            </div>
          </div>

          <!-- Tone -->
          <div>
            <h3 class="mb-2 font-semibold">Tone</h3>
            <div class="flex space-x-2">
              {#each ["Professional", "Informative", "Confident", "Positive", "Friendly", "Helpful"] as toneType}
                <button
                  class={`w-[100px] font-normal text-sm leading-4 px-4 py-2 rounded-lg ${tone === toneType ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
                  on:click={() => selectTone(toneType)}
                >
                  {toneType}
                </button>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/if}
    <div class="flex justify-between mt-4">
      <div>
        <label class="flex items-center cursor-pointer">
          <!-- Toggle -->
          <div class="relative">
            <input type="checkbox" class="sr-only" bind:checked={isChecked} />
            <div
              class="block w-10 h-6 bg-gray-400 rounded-full transition-colors duration-300"
              class:bg-green-400={isChecked}
            ></div>
            <div
              class="dot absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300"
              class:translate-x-full={isChecked}
            ></div>
          </div>
          <!-- Label -->
          <span class="ml-3 text-gray-700">Advance</span>
        </label>
      </div>
      <div>
        <button
          class="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600"
        >
          Create
        </button>
      </div>
    </div>
  </div>
</GenericModal>

<GenericModal show={showModal} close={toggleModal} title="Import File">
  <div>
    {#if droppedFiles.length > 0}
      <div class="mt-4">
        <ul>
          <div
            class={`border-2 ${selectedOption == "file" ? "border-green-400" : ""}  p-4 rounded-lg mb-4`}
          >
            <label class="flex items-center mb-2 cursor-pointer">
              <input
                type="radio"
                name="import-option"
                value="file"
                bind:group={selectedOption}
                class="mr-2"
              />
              <span class="font-bold">Upload File</span>
            </label>
            {#each droppedFiles as file, index}
              <div
                class="w-5/5 h-[52px] border-2 border-[#E4E4E7] rounded-lg flex items-center"
              >
                <img
                  src={`assets/${file.name.split(".")[1] == "pdf" ? "Pdf.svg" : file.name.split(".")[1] == "docx" ? "Word.svg" : file.name.split(".")[1] == "xlsx" ? "Excel.svg" : file.name.split(".")[1] == "pptx" ? "Powerpoint.svg" : ""}`}
                  alt="PDF"
                  class="w-6 h-6 ml-2"
                />
                <li class="ml-2">{file.name}</li>
                <button class="ml-auto" on:click={() => removeFile(index)}>
                  <img src="assets/remove.svg" alt="" />
                </button>
              </div>
            {/each}
          </div>
        </ul>
      </div>
    {:else}
      <div
        class={`border-2 ${selectedOption == "file" ? "border-green-400" : ""}  p-4 rounded-lg mb-4`}
        on:drop={handleDrop}
        on:dragover={handleDragOver}
        on:click={() => document.getElementById("fileInput").click()}
      >
        <label class="flex items-center mb-2 cursor-pointer">
          <input
            type="radio"
            name="import-option"
            value="file"
            bind:group={selectedOption}
            class="mr-2"
          />
          <span class="font-bold">Upload File</span>
        </label>
        <div
          class="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center cursor-pointer"
        >
          <p class="text-gray-500 mb-2">Click to Upload</p>
          <p class="text-gray-400">or drag and drop</p>
          <!-- File icons -->
        </div>
        <div class="flex justify-start mt-4 space-x-2">
          <img src="assets/Pdf.svg" alt="PDF" class="w-6 h-6" />
          <img src="assets/Word.svg" alt="Word" class="w-6 h-6" />
          <img src="assets/Excel.svg" alt="Excel" class="w-6 h-6" />
          <img src="assets/Powerpoint.svg" alt="PowerPoint" class="w-6 h-6" />
        </div>
      </div>
    {/if}

    <!-- Import from URL Section -->
    <div
      class={`border-2 ${selectedOption == "url" ? "border-green-400" : ""} p-4 rounded-lg mb-4 flex flex-col`}
    >
      <div>
        <label class="flex items-center cursor-pointer">
          <input
            type="radio"
            name="import-option"
            value="url"
            bind:group={selectedOption}
            class="mr-2"
          />
          <span class="font-bold">Import from URL</span>
        </label>
      </div>
      {#if selectedOption == "url"}
        <div>
          <input
            type="text"
            id="text"
            class="mt-3 mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Add file URL"
            required
          />
        </div>
        <div class="flex flex-row">
          <img src="assets/information.svg" alt="" />
          <div class="ml-2 text-sm font-normal text-[#A1A1AA]">
            Sharing option of the file must be “Public”.
          </div>
        </div>
        <div class="flex mt-3">
          <img src="assets/Docs.svg" alt="" />
          <img src="assets/Sheets.svg" alt="" />
          <img src="assets/Slides.svg" alt="" />
          <img src="assets/Youtube.svg" alt="" />
          <img src="assets/GoogleMeet.svg" alt="" />
          <img src="assets/Zoom.svg" alt="" />
          <img src="assets/Vimeo.svg" alt="" />
        </div>
      {/if}
    </div>

    <!-- About Lesson Section -->
    <div class="mb-4">
      <label for="about" class="block mb-1 font-semibold"
        >About Lesson (Optional)</label
      >
      <textarea
        id="about"
        rows="4"
        class="w-full border rounded-lg p-2"
        placeholder="Tell us more about the lesson you want to create"
      ></textarea>
    </div>

    <!-- Create Button -->
    <div class="text-right">
      <button
        class="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600"
      >
        Create
      </button>
    </div>
  </div>
</GenericModal>
