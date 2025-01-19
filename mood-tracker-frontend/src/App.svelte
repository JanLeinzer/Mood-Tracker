<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
</script>

<Router {routes} />

<style>
  :global(body) {
    margin: 0;
    font-family: sans-serif;
  }
</style>
