<script lang="ts">
    import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import { activeButton } from '$lib/stores';
  const setActiveButton = (buttonIndex: number): void => {
    activeButton.set(buttonIndex);
  };
  </script>

  
    <Navbar setActiveButton={setActiveButton}/>
    <slot/>