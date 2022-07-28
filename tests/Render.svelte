<script lang="ts">
  import type { SvelteComponent } from "svelte"
  import "../src/app.css"

  export let component: typeof SvelteComponent
</script>

<div><svelte:component this={component}/></div>
<div class="dark"><svelte:component this={component}/></div>
