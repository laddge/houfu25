<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<header class="navbar bg-base-200">
  <h1 class="btn btn-ghost text-xl">
    2025年の抱負
  </h1>
</header>
<main class="container mx-auto p-4">
  {@render children()}
</main>
<footer class="text-center p-4 text-xs">
  &copy; 2025 Laddge
</footer>
