# Alphabet List Svelte Component

Alphabet List is a reusable Svelte component that provides an alphabet navigation bar and a list of items filtered by the selected letter.

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

1. An Array of objects with the key being "name" and it's value

Events
The Alphabet List component emits the following events:

None currently.

## Contributions

Contributions are welcome! If you have any ideas, improvements, or bug fixes, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License.
