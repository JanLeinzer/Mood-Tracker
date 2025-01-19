<script>
  import { onMount } from "svelte";
  import { moodEntries } from "../lib/stores";
  import { fetchEntries, createEntry, deleteEntry } from "../lib/api";
  import { writable } from "svelte/store";

  const MOODS = {
    "😊": "Happy",
    "😔": "Sad",
    "😤": "Angry",
    "😴": "Tired",
    "🤔": "Thoughtful",
    "😎": "Cool",
  };

  let selectedMood = "😊";
  let note = "";
  let moodStats = {};
  const isDarkMode = writable(false);

  onMount(async () => {
    const entries = await fetchEntries();
    moodEntries.set(entries);
  });

  moodEntries.subscribe((entries) => {
    moodStats = entries.reduce((acc, entry) => {
      acc[entry.mood] = (acc[entry.mood] || 0) + 1;
      return acc;
    }, {});
  });

  async function handleSubmit() {
    if (note.trim()) {
      const newEntry = {
        mood: selectedMood,
        note: note,
        timestamp: new Date().toISOString(),
      };
      const savedEntry = await createEntry(newEntry);
      moodEntries.update((entries) => [savedEntry, ...entries]);
      note = "";
    }
  }

  async function handleDelete(id) {
    await deleteEntry(id);
    moodEntries.update((entries) =>
      entries.filter((entry) => entry._id !== id)
    );
  }
</script>

<div class="container mx-auto p-4 max-w-2xl min-h-screen">
  <div class="text-right mb-4">
    <button
      on:click={() => isDarkMode.update((val) => !val)}
      class={`px-4 py-2 rounded-lg backdrop-blur-sm ${
        $isDarkMode ? "bg-gray-800/50 text-white" : "bg-white/50 text-black"
      }`}
    >
      {#if $isDarkMode}
        ☀️
      {/if}
      {#if !$isDarkMode}
        🌙
      {/if}
    </button>
  </div>

  <div
    class={`rounded-xl shadow-2xl p-6 backdrop-blur-md h-[80vh] flex flex-col ${
      $isDarkMode ? "bg-gray-900/70 text-white" : "bg-white/70 text-black"
    }`}
  >
  <h1 class="text-3xl font-bold mb-6 text-center font-sans tracking-wide">
    Mood Tracker
  </h1>

    <div class="space-y-6 flex-none">
      <!-- Mood Selection -->
      <div class="flex flex-wrap justify-center gap-4">
        {#each Object.entries(MOODS) as [mood, label]}
          <button
            class={`text-3xl p-4 rounded-full transition-all duration-300 hover:scale-110 ${
              selectedMood === mood
                ? "bg-blue-500 text-white scale-110 shadow-lg"
                : "hover:bg-blue-100/20"
            }`}
            on:click={() => (selectedMood = mood)}
          >
            {mood}
          </button>
        {/each}
      </div>

      <!-- Note Input -->
      <div class="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          bind:value={note}
          placeholder="How are you feeling?"
          class={`flex-1 px-4 py-3 rounded-lg font-['Inter'] ${
            $isDarkMode
              ? "bg-gray-800/50 text-white placeholder:text-gray-400"
              : "bg-gray-200/50 text-black placeholder:text-gray-600"
          }`}
        />
        <button
          on:click={handleSubmit}
          class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-['Inter'] font-medium"
        >
          Add
        </button>
      </div>

      <!-- Mood Statistics -->
      {#if $moodEntries.length > 0}
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {#each Object.entries(moodStats) as [mood, count]}
            <div
              class={`p-3 rounded-lg text-center ${
                $isDarkMode
                  ? "bg-gray-800/50 text-white"
                  : "bg-gray-100/50 text-black"
              }`}
            >
              <div class="text-2xl">{mood}</div>
              <div class="text-sm font-['Inter']">{count} times</div>
            </div>
          {/each}
        </div>
      {/if}
    </div>

    <!-- Scrollable Entries List -->
    <div class="mt-6 flex-grow overflow-y-auto space-y-3 custom-scrollbar">
      {#each $moodEntries as entry}
        <div
          class={`flex items-center justify-between p-4 rounded-lg ${
            $isDarkMode
              ? "bg-gray-800/50 text-white"
              : "bg-gray-50/50 text-black"
          }`}
        >
          <div class="flex items-center gap-3">
            <span class="text-2xl">{entry.mood}</span>
            <div class="flex flex-col">
              <span class="font-medium font-['Inter']">{entry.note}</span>
              <span class="text-sm text-gray-500 font-['Inter']">
                {new Date(entry.timestamp).toLocaleString()}
              </span>
            </div>
          </div>
          <button
            on:click={() => handleDelete(entry._id)}
            class="p-2 text-red-500 hover:bg-red-100/20 rounded-full transition-colors"
          >
            🗑️
          </button>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  /* Light mode gradient animation */
  :global(body) {
    @apply transition-colors duration-500;
  }

  :global(body:not(.dark)) {
    background: linear-gradient(270deg, #ff7eb3, #ff758c, #c1dbf5, #85a5cc);
    background-size: 400% 400%;
    animation: gradient-animation 15s ease infinite;
  }

  /* Dark mode gradient animation */
  :global(body.dark) {
    background: linear-gradient(270deg, #1a1a2e, #16213e, #1f3a5f, #2c5282);
    background-size: 400% 400%;
    animation: gradient-animation 15s ease infinite;
  }

  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* Custom scrollbar styles */
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(156, 163, 175, 0.5);
    border-radius: 20px;
  }
</style>
