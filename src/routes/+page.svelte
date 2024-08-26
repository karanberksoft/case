<script lang="ts">
  import { activeButton } from "$lib/stores";
  import Dashboard from "../components/Dashboard.svelte";

  // Story şablonlarını tutacak dizi
  let stories: any[] = [];

  // Yeni bir story ekleme fonksiyonu
  function addStory() {
    stories = [
      ...stories,
      {
        id: stories.length + 1,
        title: currentTitle,
        story: currentStory,
        comment: currentComment,
      },
    ];

    // Formu temizle
    currentTitle = "";
    currentStory = "";
    currentComment = "";
  }

  // Belirli bir story'yi silme fonksiyonu
  function deleteStory(id: any) {
    stories = stories.filter((story) => story.id !== id);
  }

  let currentTitle = "";
  let currentStory = "";
  let currentComment = "";

  let cards = [
    {
      id: 1,
      title: "Introduction",
      description:
        "Welcome to our project management tutorial. Today, we'll guide you through the process of creating and managing projects efficiently. We'll be using the latest tools and techniques to streamline our project management process. Let's get started!",
      file: "intro.mp4",
      comments: [
        {
          id: 1,
          author: "Selahattin Çamiçi",
          text: "Great job!",
          date: "3d ago",
        },
      ],
    },
    {
      id: 2,
      title: "Create New Project",
      description:
        "To begin, let's create a new project. Click on the 'Create New Project' button to initiate the process. Enter the required project details, including the project name, description, and deadline. Once you've filled out the form, click on the 'Create' button to create your new project.",
      file: "",
      comments: [],
    },
  ];

  // Yeni bir kart ekleme fonksiyonu
  function addCard() {
    const newCard = {
      id: cards.length + 1,
      title: "Add Item to Project",
      description:
        "Now that we've created our project, let's start adding items to it. You can add various items to your project, including tasks, milestones, and resources. Let's start by adding tasks to our project.",
      file: "",
      comments: [],
    };
    cards = [...cards, newCard];
  }

  // Kartı silme fonksiyonu
  function deleteCard(cardId) {
    cards = cards.filter((card) => card.id !== cardId);
  }

  // Yorum ekleme fonksiyonu
  function addComment(cardId, comment) {
    cards = cards.map((card) => {
      if (card.id === cardId) {
        return {
          ...card,
          comments: [...card.comments, comment],
        };
      }
      return card;
    });
  }

  // Placeholder bir yorum ekleme fonksiyonu
  function handleAddComment(cardId) {
    const newComment = {
      id: Date.now(),
      author: "New User",
      text: "This is a new comment.",
      date: "Just now",
    };
    addComment(cardId, newComment);
  }
</script>

{#if $activeButton == null}
  <Dashboard />
{:else if $activeButton == 1}
<div
class="min-h-[calc(100vh-4rem)] bg-[#F4F4F5] flex items-center justify-center"
>
<div class="container mx-auto p-4">
  <div class="flex flex-row gap-6 justify-start items-start">
    {#each stories as story (story.id)}
      <div
        class="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
      >
        <div class="flex justify-between p-1">
          <div
            class="flex items-center justify-center w-6 h-6 ml-2 mt-2 rounded-full border border-[#E4E4E7]"
          >
            #1
          </div>
          <div
            on:click={() => deleteStory(story.id)}
            class="flex items-center justify-center w-6 h-6 mr-2 mt-2"
          >
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
            <img src="assets/atac.svg" alt="" />
            <img src="assets/arti.svg" alt="" class="pl-2" />
          </div>
        </div>
        <hr class="border-t border-gray-300" />
        <div class="p-4 flex flex-row justify-between">
          <div>Comments</div>
          <div class="flex w-24 items-center justify-center">
            <img src="assets/arti1.svg" alt="" />
            <span class="leading-5 text-[#71717A] text-sm"> Add New</span>
          </div>
        </div>
      </div>
    {/each}

    <div
      class="w-[366px] h-[655px] bg-[#DEDEE1] rounded-lg shadow-lg sm:w-[320px] md:w-[366px] flex justify-center items-center flex-col"
    >
      <div on:click={addStory}>
        <img src="assets/add-circle.svg" alt="" />
      </div>
      <div class="text-[#71717A]">Click to Add New Story</div>
    </div>
  </div>
</div>
</div>
{:else if $activeButton == 2}
  <div>Draft page</div>
{:else if $activeButton == 3}
<div>Review page</div>
{/if}
