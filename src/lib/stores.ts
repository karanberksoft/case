import { writable } from 'svelte/store';

// Define a type for your store
type activeButton = number | null;

// Create a writable store with the type
export let activeButton = writable<activeButton>(null);
