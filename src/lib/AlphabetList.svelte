<script>
  import { onMount } from "svelte";

  export let sampleItems = [];
  export let customStyles = {};
  export let onItemClick = () => {};
  export let loading = false;
  export let emptyStateMessage = "No sample items found.";
  export let itemsPerPage = 30;
  export let searchBarOn = true;

  let selectedLetter = "";
  let searchQuery = "";
  let filteredItems = [];
  let currentPage = 1;

  const alphabet = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  function filter() {
    filteredItems = sampleItems.filter((item) => {
      const matchesLetter =
        selectedLetter === "#"
          ? !/^[A-Za-z]/.test(item.name)
          : item.name.startsWith(selectedLetter) || selectedLetter === "";

      const matchesSearchQuery = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesLetter && matchesSearchQuery;
    });
  }

  onMount(() => {
    filter();
  });

  $: selectedLetter, filter();
  $: searchQuery, filter();

  $: paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function handlePageChange(newPage) {
    currentPage = newPage;
  }
</script>

<div class="mainContainer" style={customStyles.mainContainer}>
  {#if searchBarOn}
    <div class="searchContainer" style={customStyles.searchContainer}>
      <input
        type="text"
        placeholder="Search items..."
        bind:value={searchQuery}
        class="searchBar"
        style={customStyles.searchBar}
      />
    </div>
  {/if}
  <div class="alphabetContainer" style={customStyles.alphabetContainer}>
    {#each alphabet as letter}
      <button
        class="alphabetButton {selectedLetter === letter ? 'selected' : ''}"
        on:click={() => {
          selectedLetter = selectedLetter === letter ? "" : letter;
          currentPage = 1;
        }}
        style={customStyles.alphabetButton}
      >
        {letter}
      </button>
    {/each}
  </div>

  {#if loading}
    <div class="loading" style={customStyles.loading}>Loading...</div>
  {:else}
    <div class="sample-items-grid" style={customStyles.sampleItemsGrid}>
      {#if filteredItems.length === 0}
        <div class="sample-item-empty" style={customStyles.sampleItemEmpty}>
          {emptyStateMessage}
        </div>
      {:else}
        {#each paginatedItems as item}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            class="sample-item"
            on:click={() => onItemClick(item)}
            style={customStyles.sampleItem}
          >
            {item.name}
          </div>
        {/each}
      {/if}
    </div>

    {#if filteredItems.length > itemsPerPage}
      <div class="pagination" style={customStyles.pagination}>
        {#each Array(Math.ceil(filteredItems.length / itemsPerPage)).fill() as _, i}
          <button
            class="pageButton {currentPage === i + 1 ? 'current' : ''}"
            on:click={() => handlePageChange(i + 1)}
            style={customStyles.pageButton}
          >
            {i + 1}
          </button>
        {/each}
      </div>
    {/if}
  {/if}
</div>

<style>
  .mainContainer {
    padding: 1rem;
  }
  .searchContainer {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  .searchBar {
    padding: 0.5rem;
    border: 2px solid #000;
    border-radius: 0.25rem;
    width: 100%;
    max-width: 50%;
  }
  .alphabetContainer {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
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
    background-color: #38bdf8;
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
    cursor: pointer;
  }
  .sample-item-empty {
    grid-column: 1 / -1;
    text-align: center;
    color: #6b7280;
  }
  .loading {
    text-align: center;
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .pageButton {
    padding: 0.5rem;
    margin: 0.25rem;
    border: 1px solid;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  .current {
    background-color: #38bdf8;
    color: white;
  }
</style>
