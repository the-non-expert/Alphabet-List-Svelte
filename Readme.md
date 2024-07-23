# Alphabet List Svelte Component

Alphabet List is a versatile and customizable Svelte component designed to enhance your application's user experience. It provides an intuitive alphabet navigation bar, allowing users to quickly filter and navigate through a list of items by their starting letter. The component includes powerful features like search functionality, pagination, and customizable styles, making it an ideal solution for large datasets and interactive lists.

[Demo Link](https://alphabet-list-svelte-demo.netlify.app/)

# Key features

1. Alphabet Navigation: Quickly filter items by selecting letters from an A-Z and # navigation bar.
2. Search Bar: Integrated search functionality to filter items by name.
3. Pagination: Efficiently handle large datasets with built-in pagination.
4. Loading State: Display a loading indicator while data is being fetched or processed.
5. Customizable Styles: Easily apply custom styles to match your application's design.
6. Item Click Handling: Define custom actions when items are clicked.
7. Empty State Message: Display a customizable message when no items match the filter criteria.

# Sponsor Alphabet-List-Svelte

If you depend on this package, please consider supporting it. Thank you.

<a href="https://buymeacoffee.com/ayushjhunjhunwala" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## Installation

You can install the Alphabet List component via npm:

```bash
npm install alphabet-list-svelte
```

## Usage

To use the Alphabet List component in your Svelte project, simply import it and include it in your Svelte template:

```bash
<script>
  import AlphabetList from 'alphabet-list-svelte';

  let sampleItems = [
    { name: "Apple" },
    { name: "Apricot" },
    { name: "Avocado" },
    { name: "Banana" },
  ]
</script>

<AlphabetList {sampleItems}/>
```

## Props

The Alphabet List component accepts the following props:

1. sampleItems (Array): An array of objects with a "name" key and its value. Example: [{ name: "Apple" }, { name: "Banana" }]
2. customStyles (Object): Custom styles for various parts of the component. Example: { mainContainer: "background-color: red;", searchBar: "color: blue;" }
3. onItemClick (Function): A callback function for item clicks, allowing you to customize actions for individual items.
4. loading (Boolean): A boolean value to indicate a loading state. Default is false.
5. emptyStateMessage (String): A message to display when no items match the filter criteria. Default is "No sample items found."
6. searchBar (Boolean): A boolean value to enable or disable the search bar. Default is true.
7. itemsPerPage (Number): The number of items to display per page for pagination. Default is 30.

### Example with Custom Props

```bash
<script>
  import AlphabetList from 'alphabet-list-svelte';

  let sampleItems = [
    { name: "Apple" },
    { name: "Apricot" },
    { name: "Avocado" },
    { name: "Banana" },
  ];

  let customStyles = {
    mainContainer: "padding: 2rem;",
    searchBar: "border: 2px solid blue;",
  };

  function handleItemClick(item) {
    console.log("Item clicked:", item);
  }
</script>

<AlphabetList
  {sampleItems}
  {customStyles}
  onItemClick={handleItemClick}
  loading={false}
  emptyStateMessage="No items found."
  searchBar={true}
  itemsPerPage={20}
/>
```

## Events

The Alphabet List component emits the following events:

1. None currently.

## Contributions

Contributions are welcome! If you have any ideas, improvements, or bug fixes, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License.
