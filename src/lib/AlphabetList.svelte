<script>
  import { onMount } from "svelte";

  export let sampleItems = [];

  let selectedLetter = "";
  let filteredItems = [];

  // Alphabet array for the navigation bar, including #
  const alphabet = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Function to filter sampleItems based on selected letter
  function filter() {
    if (selectedLetter) {
      if (selectedLetter === "#") {
        filteredItems = sampleItems.filter(
          (item) => !/^[A-Za-z]/.test(item.name)
        );
      } else {
        filteredItems = sampleItems.filter((item) =>
          item.name.startsWith(selectedLetter)
        );
      }
    } else {
      filteredItems = sampleItems;
    }
  }

  // Initialize filteredItems on mount
  onMount(() => {
    filter();
  });

  // Reactive statement to watch selectedLetter and filter sampleItems accordingly
  $: selectedLetter, filter();
</script>

<div class="mainContainer">
  <!-- Alphabet Navigation -->
  <div class="alphabetContainer">
    {#each alphabet as letter}
      <button
        class="alphabetButton {selectedLetter === letter ? 'selected' : ''}"
        on:click={() => {
          selectedLetter = selectedLetter === letter ? "" : letter;
        }}
      >
        {letter}
      </button>
    {/each}
  </div>

  <!-- Item List -->
  <div class="sample-items-grid">
    {#if filteredItems.length === 0}
      <div class="sample-item-empty">
        No sample items found for the selected letter.
      </div>
    {:else}
      {#each filteredItems as item}
        <div class="sample-item">
          {item.name}
        </div>
      {/each}
    {/if}
  </div>
</div>

<style>
  .mainContainer {
    padding: 1rem;
  }
  .alphabetContainer {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .alphabetButton {
    padding: 0.5rem;
    margin: 0.25rem;
    border: 1px solid;
    border-radius: 0.25rem;
    text-align: center;
    cursor: pointer;
    background-color: white;
  }

  .selected {
    background-color: #38bdf8; /* Tailwind's blue-800 */
    color: white;
  }

  .sample-items-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 640px) {
    .sample-items-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    .sample-items-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .sample-items-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .sample-item {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 0.25rem;
  }

  .sample-item-empty {
    grid-column: 1 / -1; /* span full width */
    text-align: center;
    color: #6b7280; /* Tailwind's gray-500 */
  }
</style>
